// Color Manager Module
const ColorManager = {
	style: document.createElement('style'),

	init() {
		document.head.appendChild(this.style);
		const savedColors = localStorage.getItem('siteColorTheme');

		// Add click handler to any generate buttons on the page
		const generateButtons = document.querySelectorAll('[data-action="generate-colors"]');
		generateButtons.forEach(button => {
			button.addEventListener('click', () => this.generateNewColors());
		});

		if (savedColors) {
			this.loadColors();
		} else {
			this.generateNewColors();
		}
	},

	randomHex() {
		return Math.floor(Math.random() * 256);
	},

	luminance(r, g, b) {
		let [rs, gs, bs] = [r, g, b].map(c => {
			c = c / 255;
			return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
		});
		return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
	},

	contrastRatio(l1, l2) {
		let lighter = Math.max(l1, l2);
		let darker = Math.min(l1, l2);
		return (lighter + 0.05) / (darker + 0.05);
	},

	saveColors(bg, fg, ratio) {
		const colors = {
			background: bg,
			foreground: fg,
			contrastRatio: ratio
		};
		localStorage.setItem('siteColorTheme', JSON.stringify(colors));
	},

	loadColors() {
		const savedColors = localStorage.getItem('siteColorTheme');
		if (savedColors) {
			const colors = JSON.parse(savedColors);
			this.applyColors(colors.background, colors.foreground, colors.contrastRatio);
		}
	},

	applyColors(bg, fg, ratio) {
		this.style.textContent = `
									:root {
											--light: rgb(${bg.r}, ${bg.g}, ${bg.b});
											--dark: rgb(${fg.r}, ${fg.g}, ${fg.b});
									}
							`;

		// Only update contrast display if the element exists on the current page
		const contrastElement = document.getElementById('contrast');
		if (contrastElement) {
			contrastElement.textContent = ratio.toFixed(2);
		}
	},

	generateNewColors() {
		let bg, fg, bgLum, fgLum, ratio;

		do {
			bg = {
				r: this.randomHex(),
				g: this.randomHex(),
				b: this.randomHex()
			};

			fg = {
				r: this.randomHex(),
				g: this.randomHex(),
				b: this.randomHex()
			};

			bgLum = this.luminance(bg.r, bg.g, bg.b);
			fgLum = this.luminance(fg.r, fg.g, fg.b);

			if (bgLum < fgLum) {
				[bg, fg] = [fg, bg];
				[bgLum, fgLum] = [fgLum, bgLum];
			}

			ratio = this.contrastRatio(bgLum, fgLum);
		} while (ratio < 4.5);

		this.applyColors(bg, fg, ratio);
		this.saveColors(bg, fg, ratio);
	}
};

// Initialize the color manager
ColorManager.init();
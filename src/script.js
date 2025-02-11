// Site Manager Module
const SiteManager = {
  style: document.createElement('style'),
  isDarkMode: false,
  widthValues: [100, 80, 70, 60, 70, 80],
  currentWidthIndex: 0,
  fontFamilies: [
    "var(--font-systemui)",
    "var(--font-transitional)",
    "var(--font-oldstyle)",
    "var(--font-humanist)",
    "var(--font-geohumanist)",
    "var(--font-classhuman)",
    "var(--font-neogrote)",
    "var(--font-monoslab)",
    "var(--font-monocode)",
    "var(--font-industrial)",
    "var(--font-roundsans)",
    "var(--font-slabserif)",
    "var(--font-antique)",
    "var(--font-didone)",
    "var(--font-handwritten)",
  ],
  currentFontIndex: 0,

  init() {
    document.head.appendChild(this.style);
    this.loadSettings();
    // Event delegation for button clicks
    document.addEventListener('click', ({ target: { dataset: { action } } }) => {
      if (action === 'colors') this.generateNewColors();
      else if (action === 'darkmode') this.toggleColorScheme();
      else if (action === 'font') this.cycleFontFamily();
      else if (action === 'width') this.cycleWidth();
    });
    if (!localStorage.getItem('siteColorTheme')) this.generateNewColors();
  },

  randomHex() {
    return Math.floor(Math.random() * 256);
  },

  luminance(r, g, b) {
    return [r, g, b].map(c => (c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
      .reduce((acc, val, i) => acc + [0.2126, 0.7152, 0.0722][i] * val, 0);
  },

  contrastRatio(l1, l2) {
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  },

  saveSettings() {
    localStorage.setItem('siteSettings', JSON.stringify({
      colors: JSON.parse(localStorage.getItem('siteColorTheme')),
      isDarkMode: this.isDarkMode,
      currentFontIndex: this.currentFontIndex,
      currentWidthIndex: this.currentWidthIndex
    }));
  },

  loadSettings() {
    const savedSettings = localStorage.getItem('siteSettings');
    if (savedSettings) {
      const { colors, isDarkMode, currentFontIndex, currentWidthIndex } = JSON.parse(savedSettings);
      this.isDarkMode = isDarkMode;
      this.currentFontIndex = currentFontIndex;
      this.currentWidthIndex = currentWidthIndex || 0;
      if (colors) this.applyColors(colors.background, colors.foreground);
      this.applyWidth();
    }
  },

  saveColors(bg, fg) {
    localStorage.setItem('siteColorTheme', JSON.stringify({ background: bg, foreground: fg }));
    this.saveSettings();
  },

  applyColors(bg, fg) {
    const ratio = this.contrastRatio(this.luminance(bg.r, bg.g, bg.b), this.luminance(fg.r, fg.g, fg.b));
    this.style.textContent = `
      :root {
        --light: rgb(${bg.r}, ${bg.g}, ${bg.b});
        --dark: rgb(${fg.r}, ${fg.g}, ${fg.b});
        --width-site: ${this.widthValues[this.currentWidthIndex]}%;
        color-scheme: ${this.isDarkMode ? 'dark' : 'light'};
        font-family: ${this.fontFamilies[this.currentFontIndex]};
      }
    `;
    const contrastElement = document.getElementById('contrast');
    if (contrastElement) contrastElement.textContent = ratio.toFixed(2);
  },

  generateNewColors() {
    let bg, fg, ratio;
    do {
      bg = { r: this.randomHex(), g: this.randomHex(), b: this.randomHex() };
      fg = { r: this.randomHex(), g: this.randomHex(), b: this.randomHex() };
      const bgLum = this.luminance(bg.r, bg.g, bg.b);
      const fgLum = this.luminance(fg.r, fg.g, fg.b);
      if (bgLum < fgLum) [bg, fg] = [fg, bg];
      ratio = this.contrastRatio(bgLum, fgLum);
    } while (ratio < 4.5);
    this.applyColors(bg, fg);
    this.saveColors(bg, fg);
  },

  toggleColorScheme() {
    this.isDarkMode = !this.isDarkMode;
    const colors = JSON.parse(localStorage.getItem('siteColorTheme'));
    if (colors) this.applyColors(colors.background, colors.foreground);
    else this.generateNewColors();
    this.saveSettings();
  },

  cycleFontFamily() {
    this.currentFontIndex = (this.currentFontIndex + 1) % this.fontFamilies.length;
    const colors = JSON.parse(localStorage.getItem('siteColorTheme'));
    if (colors) this.applyColors(colors.background, colors.foreground);
    else this.generateNewColors();
    this.saveSettings();
  },

  cycleWidth() {
    this.currentWidthIndex = (this.currentWidthIndex + 1) % this.widthValues.length;
    this.applyWidth();
    this.saveSettings();
  },

  applyWidth() {
    const colors = JSON.parse(localStorage.getItem('siteColorTheme'));
    if (colors) this.applyColors(colors.background, colors.foreground);
    else this.generateNewColors();
  }
};

// Export the SiteManager object
export default SiteManager;
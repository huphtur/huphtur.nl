---
title: "AWS-CLI + Gulp + awspublish for Dummies"
description: "Quick tutorial on how to automaticaly upload files to S3."
date: 2016-01-02
intro: yes
---
One of the better [Gulp](http://gulpjs.com/) plugins to upload your files to [Amazon S3](https://aws.amazon.com/s3/) has to be [awspublish](https://www.npmjs.com/package/gulp-awspublish). Unfortunately, since I’m not the brightest when it comes to CLI stuff, it took me a while to get it working properly. Here’s a quick tutorial that will hopefully save other developers *in spe* some time.

**Note:** This tutorial assumes you already have an AWS S3 bucket set up and a Gulp project running on your OS X system.

## Install AWS-CLI

First we’re going to install and configure [AWS CLI](https://aws.amazon.com/cli/ "Amazon Web Services Command Line Interface"). Go to your terminal and download, unzip and install the [bundled installer](http://docs.aws.amazon.com/cli/latest/userguide/installing.html#install-bundle-other-os) with these commands:

```bash
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
```

```bash
unzip awscli-bundle.zip
```

```bash
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
```

Type: `aws help` to make sure things installed correctly (hit: `q` to exit the help docs). You can now delete the zip file and the install folder:

```bash
rm -r awscli-bundle*
```

## Configure AWS-CLI

Next up we’re going to [configure AWS-CLI](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) so awspublish can use it. Type the following in your terminal:

```bash
aws configure
```

Fill out your AWS Access and Secret Key.

It will also ask for default region. Check your S3 bucket to see what you used, if it’s set to "US Standard" type: `us-west-2`. **It’s important you fill this out or else awspublish will break.**

For the default output format question just hit enter to leave it blank.

If all went well, 2 files are created in a folder in your home directory. To check hit:

```bash
ls -al ~/.aws
```

If you ever need to change things in the config files, now you also know where they are located.

## Install gulp-awspublish

Go to your Gulp project and install awspublish:

```bash
npm install --save-dev gulp-awspublish
```

Open up your gulpfile.js and add the following:

```js
var awspublish = require(’gulp-awspublish’);

// Publish to AWS S3
gulp.task(’publish’, function() {
  var publisher = awspublish.create({
    region: ’us-west-2’,
    params: {
      Bucket: ’YOUR-BUCKET-NAME’
    }
  });
  var headers = {
    ’Cache-Control’: ’max-age=315360000, no-transform, public’
  };
  return gulp.src(’public/**’)
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});
```

**Make sure the region is set to the same region that you used during the AWS-CLI configuration.**

Change YOUR-BUCKET-NAME to your bucket name you wish to upload to and change the gulp.src location to wherever you are uploading from.

To upload all the things type: `gulp publish` and watch awspublish do it’s magic.

## Disclaimer

This simple set up is what worked for me. There are probably a lot better ways to configure things, so make sure to read the [AWS-CLI](https://aws.amazon.com/documentation/cli/) and [awspublish](https://github.com/pgherveou/gulp-awspublish) docs to fine-tune your projects.

If you have any questions or suggestions, feel free to [hollar at me](https://github.com/huphtur/huphtur.github.io/issues) on Github.

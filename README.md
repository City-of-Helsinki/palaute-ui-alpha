
# Palaute-ui-alpha

## Requirements


* node.js (for npm package management and node-sass) https://nodejs.org

* Grunt ja Grunt CLI (for running Grunt tasks) http://gruntjs.com

* Java SDK for Html linting. See details: https://www.npmjs.com/package/grunt-html

## Basic usage

Run command

```
npm install
```

It will download all needed npm packages to `node_modules` directory.

If you are not developing, feel free to transfer the following files to a web server: `.html` files on the root, `js`, `css`, `fonts` and `styleguide` directories.

## Grunt

Grunt.js configuration includes the following tasks.

### Watch

Watch task monitors changes in files or directories and runs assigned tasks when changes happen. E.g. when `.css` file is saved `sass` compilation task is executed.

### Sass

```
grunt sass
```

Compiles `.scss` files into `.css` files.

### Browsersync

```
grunt browsersync
```

Refreshes the browser window when watch task has found updated files. https://browsersync.io

### Hologram

```
grunt hologram
```

Hologram task parses comments and markup examples from the `.scss` file and creates a styleguide to directory `styleguide`.

### Bootlint

```
grunt bootlint
```

Bootlint checks the html markup for errors that violate good Bootstrap coding conventions.

### Autoprefixer

```
grunt autoprefixer
```

Prefixes css code.

### Cssmin

```
grunt cssmin
```

Minifies css code.

### Html lint

```
grunt htmllint
```

Lints html code.

Command `grunt` runs all Sass, Autoprefixer, BrowswerSync and starts Watch.

Command `Lint` runs Bootlint and Htmllint.

Commend `docs` watches for edits in sass file and builds styleguide.

## Fonts

Helsinki brand fonts are not committed to this repository, if you want to use them you have to install them manually to `fonts` directory.
This prototype uses, but does not require following brand fonts:

* KarbidWeb-Bold.eot
* KarbidWeb-Bold.woff
* KarbidWeb.eot
* KarbidWeb.woff

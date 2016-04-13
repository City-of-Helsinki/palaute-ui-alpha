
# Palaute-ui-alpha

## Requirements

* Ruby (for the sass compiling) https://www.ruby-lang.org/en/

* Sass ruby gem http://sass-lang.com/install

* node.js (for npm package management) https://nodejs.org

* Grunt ja Grunt CLI (for running Grunt tasks) http://gruntjs.com

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

### Livereload

```
grunt livereload
```

Refreshes the browser window when watch task has found updated files. Requires browser plugin: http://livereload.com.   

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

Command `grunt` runs all tasks mentioned above.

## Fonts

Helsinki brand fonts are not committed to this repository, if you want to use them you have to install them manually to `fonts` directory.
This prototype uses, but does not require following brand fonts:

* KarbidWeb-Bold.eot
* KarbidWeb-Bold.woff
* KarbidWeb.eot
* KarbidWeb.woff

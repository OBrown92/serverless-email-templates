# Test Repo for `serverless email-templates`
The basic repo is forked from [serverless-nodejs-starter](https://github.com/AnomalyInnovations/serverless-nodejs-starter.git)

## Problem
If you want to use latest ES7 features like `import export` we have to use `serverless-bundle` plugin to babel and webpack our function.

Unfortunately some packages won't work with webpack so you have to add them to externals. For `email-templates` the following have to be added.
```yaml
custom:
  bundle:
    externals:
      - atpl
      - bracket-template
      - coffee-script
      - dot
      - dustjs-linkedin
      - eco
      - ect
      - ejs
      - haml-coffee
      - hamlet
      - hamljs
      - handlebars
      - hogan.js
      - htmling
      - jazz
      - jqtpl
      - just
      - liquor
      - marko
      - mote
      - plates
      - ractive
      - react-dom/server
      - slm
      - teacup/lib/express
      - templayed
      - toffee
      - twig
      - uglify-js
      - vash
      - walrus
      - whiskers
```

You also have to tell `webpack` where the templates are, with the additional configuration.
```yaml
    copyFiles:
      - from: './emails/mars/*'
        to: './'
```
---

## Install
1. Clone the package
2. `npm install`
3. Modify to your needs.

---

## Usage

To run a function on your local

``` bash
$ serverless invoke local --function sendMail
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

Deploy your project

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function sendMail
```
# Ember Froala Editor Addon [![Ember Observer Score](http://emberobserver.com/badges/ember-froala-editor.svg)](http://emberobserver.com/addons/ember-froala-editor)

Bring the [Froala WYSIWYG Editor](https://www.froala.com/wysiwyg-editor)
into an ember-cli project with this addon. Besides importing the required
Froala Editor files, the _main_ part of this addon is the `{{froala-editor}}`
component. Checkout the [documentation Website](http://froala.github.io/ember-froala-editor/)
for installation, configuration, and usage details.


## Compatibility

ember and ember-cli 1.13+ (including 2.x)


## Installation

```bash
ember install ember-froala-editor
```


## Configuration

Take a look at the [configuration documentation page](http://froala.github.io/ember-froala-editor/#addon/configuration)
for details on the exact configuration options. But basically you add
`'ember-froala-editor':{}` within your `ember-cli-build.js` file and adjust
the available configuration options. Ex:

```js
// ember-cli-build.js
// ... (snip)

  'ember-froala-editor': {
    plugins  : true,
    languages: ['es','fr','de'],
    themes   : 'royal'
  },

// ... (snip)
```


## Usage

Take a look at the [documentation Website](http://froala.github.io/ember-froala-editor/)
for full usage details. But basically this addon comes with a few Ember
Components and Helpers to use within your project templates.

```hbs
{{froala-editor}}
{{froala-content}}
```

```hbs
(froala-method)
(merged-hash)
```


## Development

* `git clone` this repository (fork if you plan on submitting a PR)
* `npm install`
* `bower install`


## Running Docs Server

* `ember server`
* Visit the docs at http://localhost:4200


## Running Tests

* `npm test` (Runs `ember try:testall` to test against multiple Ember versions)
* `ember test`
* `ember test --server`
* `ember server` (Visit tests at http://localhost:4200/tests)


## Releasing

_Notes to self_ really...

1. `npm version x.y.z` - Updates the version in `package.json` and tags in git
2. `git push origin master` - Pushes any changes up to Github
3. `git push origin --tags` - Pushes the new version tag to Github
4. Update the new tag on the [Github Releases page](https://github.com/froala/ember-froala-editor/releases)
5. `npm run deploy` - Deploys the docs to `gh-pages` using [ember-cli-github-pages](https://github.com/poetic/ember-cli-github-pages#how-can-i-create-an-automated-deploy-script)
6. `git checkout master` - Need to switch back to `master` after deploying the docs..
7. `npm publish` - Release the new version to the world!


For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

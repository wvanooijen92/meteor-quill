Package.describe({
  name: 'duodeka:meteorquill',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Quill.js version v1.0.0-beta.10 for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/wvanooijen92/meteor-quill',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');

  api.use('coffeescript')

  api.export('Quill','client');
  api.addFiles('quill/quill.js','client');
  api.addFiles('quill.js','client');
  api.addFiles('quill/quill.base.css', 'client');
  api.addFiles('quill/quill.snow.css', 'client');
});

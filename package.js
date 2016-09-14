Package.describe({
  name: 'wvanooijen92:meteorquill',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'Quill.js version v1.0.3 for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/wvanooijen92/meteor-quill',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');

  api.use('templating', 'client');

  api.export('Quill','client');

  api.addAssets([
    'katex/fonts/KaTeX_AMS-Regular.eot',
    'katex/fonts/KaTeX_AMS-Regular.ttf',
    'katex/fonts/KaTeX_AMS-Regular.woff',
    'katex/fonts/KaTeX_AMS-Regular.woff2',
    'katex/fonts/KaTeX_Caligraphic-Bold.eot',
    'katex/fonts/KaTeX_Caligraphic-Bold.ttf',
    'katex/fonts/KaTeX_Caligraphic-Bold.woff',
    'katex/fonts/KaTeX_Caligraphic-Bold.woff2',
    'katex/fonts/KaTeX_Caligraphic-Regular.eot',
    'katex/fonts/KaTeX_Caligraphic-Regular.ttf',
    'katex/fonts/KaTeX_Caligraphic-Regular.woff',
    'katex/fonts/KaTeX_Caligraphic-Regular.woff2',
    'katex/fonts/KaTeX_Fraktur-Bold.eot',
    'katex/fonts/KaTeX_Fraktur-Bold.ttf',
    'katex/fonts/KaTeX_Fraktur-Bold.woff',
    'katex/fonts/KaTeX_Fraktur-Bold.woff2',
    'katex/fonts/KaTeX_Fraktur-Regular.eot',
    'katex/fonts/KaTeX_Fraktur-Regular.ttf',
    'katex/fonts/KaTeX_Fraktur-Regular.woff',
    'katex/fonts/KaTeX_Fraktur-Regular.woff2',
    'katex/fonts/KaTeX_Main-Bold.eot',
    'katex/fonts/KaTeX_Main-Bold.ttf',
    'katex/fonts/KaTeX_Main-Bold.woff',
    'katex/fonts/KaTeX_Main-Bold.woff2',
    'katex/fonts/KaTeX_Main-Italic.eot',
    'katex/fonts/KaTeX_Main-Italic.ttf',
    'katex/fonts/KaTeX_Main-Italic.woff',
    'katex/fonts/KaTeX_Main-Italic.woff2',
    'katex/fonts/KaTeX_Main-Regular.eot',
    'katex/fonts/KaTeX_Main-Regular.ttf',
    'katex/fonts/KaTeX_Main-Regular.woff',
    'katex/fonts/KaTeX_Main-Regular.woff2',
    'katex/fonts/KaTeX_Math-BoldItalic.eot',
    'katex/fonts/KaTeX_Math-BoldItalic.ttf',
    'katex/fonts/KaTeX_Math-BoldItalic.woff',
    'katex/fonts/KaTeX_Math-BoldItalic.woff2',
    'katex/fonts/KaTeX_Math-Italic.eot',
    'katex/fonts/KaTeX_Math-Italic.ttf',
    'katex/fonts/KaTeX_Math-Italic.woff',
    'katex/fonts/KaTeX_Math-Italic.woff2',
    'katex/fonts/KaTeX_Math-Regular.eot',
    'katex/fonts/KaTeX_Math-Regular.ttf',
    'katex/fonts/KaTeX_Math-Regular.woff',
    'katex/fonts/KaTeX_Math-Regular.woff2',
    'katex/fonts/KaTeX_SansSerif-Bold.eot',
    'katex/fonts/KaTeX_SansSerif-Bold.ttf',
    'katex/fonts/KaTeX_SansSerif-Bold.woff',
    'katex/fonts/KaTeX_SansSerif-Bold.woff2',
    'katex/fonts/KaTeX_SansSerif-Italic.eot',
    'katex/fonts/KaTeX_SansSerif-Italic.ttf',
    'katex/fonts/KaTeX_SansSerif-Italic.woff',
    'katex/fonts/KaTeX_SansSerif-Italic.woff2',
    'katex/fonts/KaTeX_SansSerif-Regular.eot',
    'katex/fonts/KaTeX_SansSerif-Regular.ttf',
    'katex/fonts/KaTeX_SansSerif-Regular.woff',
    'katex/fonts/KaTeX_SansSerif-Regular.woff2',
    'katex/fonts/KaTeX_Script-Regular.eot',
    'katex/fonts/KaTeX_Script-Regular.ttf',
    'katex/fonts/KaTeX_Script-Regular.woff',
    'katex/fonts/KaTeX_Script-Regular.woff2',
    'katex/fonts/KaTeX_Size1-Regular.eot',
    'katex/fonts/KaTeX_Size1-Regular.ttf',
    'katex/fonts/KaTeX_Size1-Regular.woff',
    'katex/fonts/KaTeX_Size1-Regular.woff2',
    'katex/fonts/KaTeX_Size2-Regular.eot',
    'katex/fonts/KaTeX_Size2-Regular.ttf',
    'katex/fonts/KaTeX_Size2-Regular.woff',
    'katex/fonts/KaTeX_Size2-Regular.woff2',
    'katex/fonts/KaTeX_Size3-Regular.eot',
    'katex/fonts/KaTeX_Size3-Regular.ttf',
    'katex/fonts/KaTeX_Size3-Regular.woff',
    'katex/fonts/KaTeX_Size3-Regular.woff2',
    'katex/fonts/KaTeX_Size4-Regular.eot',
    'katex/fonts/KaTeX_Size4-Regular.ttf',
    'katex/fonts/KaTeX_Size4-Regular.woff',
    'katex/fonts/KaTeX_Size4-Regular.woff2',
    'katex/fonts/KaTeX_Typewriter-Regular.eot',
    'katex/fonts/KaTeX_Typewriter-Regular.ttf',
    'katex/fonts/KaTeX_Typewriter-Regular.woff',
    'katex/fonts/KaTeX_Typewriter-Regular.woff2'
  ], ['client']);

  api.addFiles('quill/quill.js','client');
  api.addFiles('katex/katex.min.js','client');
  api.addFiles('index.js','client');
  api.addFiles('quill/quill.base.css', 'client');
  api.addFiles('katex/katex.min.css','client');
});

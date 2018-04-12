# jsEnvironment
lesson for setting up javascript environment with npm

Package management- installing packages, 
Development web server- setting up express, 
Automation using npm scripts, 
Transpiling with babel, 
Bundling with webpack, 
Linting using eslint, 
Test and continous integration using:
  'mocha' as the testing framework,
  'chai as the assertion library,
  'JSdom' as the helper library and 
  'node' as the location to run test files, 
Continuos Integration with Travis-ci for mac and linux(travis-ci.org)
and appveyor for windows machine(ci.appveyor.com).

Making http calls with 'fetch',
Created fake database with 'json schema faker' together with http mock,
mock-data-schema, faker, etc

Automated Production build-built a webpack production(prod.js) to minify
the codes...Build.js is created in buildScripts folder. DistServer.js is also created in the buildScripts folder and the content of the srcServer.js is copied and pasted into it but 
without the webpack features. Compression is imported into distServer.js in order to know
the size of the file to be sent. 
We also get the url by using the getQueryStringParameterByName function in my baseUrl.js

*Production build
  Minification
  SourceMaps
  Minified HTML and dynamic script tags
  Cache busting
  Bundle splitting
  Error logging
  Dynamic HTML via embeddedJS(EJS)
*Production deploy


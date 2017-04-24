# LoginFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## NOTES

Run this in the project directory when "ng serve" does not work
$ npm install -g @angular/cli@latest


Issue:
On Chrome
Uncaught TypeError: Cannot read property 'apply' of undefined
at XMLHttpRequest.desc.get [as ontimeout] (zone.js:1265)
at XHRLocalObject.AbstractXHRObject._cleanup (abstract-xhr.js:149)
at XMLHttpRequest.xhr.onreadystatechange (abstract-xhr.js:125)
at XMLHttpRequest.wrapFn (zone.js:1230)
at ZoneDelegate.invokeTask (zone.js:398)
at Zone.runTask (zone.js:165)
at XMLHttpRequest.ZoneTask.invoke (zone.js:460)

Fix:
npm install zone.js@0.8.5 --save

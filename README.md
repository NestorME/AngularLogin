# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.
with this project you can get a simple login with firebase and a simple menu burger

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Google api firebase 
create an acount in firebase and enable the authentication for google  next in the click in web configuration then 

## edite the app.module.ts
copy the information in each one of the spaces
```
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: 'https://angularproyect.firebaseio.com',
  projectId: 'angularproyect',
  storageBucket: 'angularproyect.appspot.com',
  messagingSenderId: ''
};
```

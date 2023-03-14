# HiberusFrontendTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

For running in development, firstly the localization must be set to false in angular.json settings, since it isn't supported in development.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Two languages are available. Without specifying anything, the default language is english. For setting differente languages, run `ng build` with `--configuration=lang`, where the other available language is `es`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Deploy a docker image

If you want to deploy the application as a docker container, there is a ready to go dockerfile, but there is one thing to have in count, ports must be the same in the host and the container, `3000` for the json-server and `80` for the application.

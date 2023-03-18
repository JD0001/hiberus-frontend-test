# Hiberus Frontend Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Alongside the application, `json-server` must be running so the app can interact with the pre-stored data. 

For launching `json-server`, you can use the script `start-json-server.bat`, which setups the server with the required parameters. You can set a different port, but remember that the endpoint in the angular application will have to be updated with the respective port. This value can be set in `src/app/shared/constants/rest.endpoints.ts`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Two languages are available. The default language is english. For setting different languages, there is available a button in the UI specifically designed for this purpose.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Deploy a docker image

If you want to deploy the application as a docker container, there is a ready to go dockerfile, but there is one thing to account, ports must be the same in the host and the container, `3000` for the json-server and `80` for the application.

The base url site is `http://localhost`.

## UPDATES
- 18.03.2023
  - Localization
	
    `i18n` is the internal solution from Angular for providing a localization system. While it's part of the ecosystem, it doesn't really supports changing languages while the application is running. Instead of that, multiple builds must be compiled for each locale, and the way of changing languages basically is routing all of them and moving back and forth between those routes each time the language is changed. Because of this, and looking to make easier the routing aspect, `i18n` has been substituted by `ngx-translate`, which has more features, where the most important of these is changing languages in the same build/hosted application without altering the routing.
		
  - Dockerfile
	
	 Because of the localization improvemente, now Dockerfile only compiles a build and host it in a unique route, having being updated `nginx.conf` too, which no longer keeps the application hosted in the `/<locale>/main` format.

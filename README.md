# BikeSearcher™©®

Connects to the dataset of [BikeIndex](https://bikeindex.org) and allows you to search for bikes registered within the vicinity of a given city.

## Requirements

This project requires the following to be installed:
- `npm` (8.15+)
- `yarn` (1.22.19+, requires `npm` for installation)
- `node` (16.17+)
- `Angular CLI` (16.2.9+)

The project's workspace was created with [Angular CLI](https://github.com/angular/angular-cli). It comes with routing and uses CSS for the stylesheet format.

This project has an ESLint configuration. Please ensure your ESLint is running.

### IDE

It is recommended to use Visual Studio Code (VSCode), but any IDE which supports front-end developent and can execute commands from the terminal will suffice.

## Overview

### Folder structure

- `/api` - services and interfaces relevant for our Restful API calls
- `/core` - core services and components on which almost all facets of our application depend on
- `/shared` - reusable UI components, types and helper classes

## Commands

### Running

First install all dependencies by running `yarn`.

Then run `yarn start`. This will start the development server (`ng serve`) in watch mode. Navigate to `http://localhost:4200/` to view the application.

### Building application

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Adding `--flat` as a param will not create a folder for the generated item.

To generate in a specific folder, run the following (using `my-component` in `core` as an example): `ng generate component core/components/my-component`.

### Running unit tests

The app uses the [Jasmine testing framework](https://jasmine.github.io/) for unit tests.

Run `ng test` will open the [Karma](https://karma-runner.github.io) runner. Results will also appear in the terminal.

### Linting

If you're using VSCode, then ESLint should auto-fix any issues in a file on save. If you wish you auto-fix manually, run `yarn lint:fix`.

Running the command without `:fix` will list all the warnings and errors only.

### Other



#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

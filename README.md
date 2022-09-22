# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

This project was created for the Udacity course: Angular Fundementals, as a module in the Full-Stack Javascript Developer nanodegree.

MyStore is a simple, single page e-commerce application meant to showcase the performance and modularity of the Angular Framework.

## Layout

This single page application is composed of 4 distinct views: <br>

1.  The Landing View (products-page): dynamically imports the available products using an API call to our "backend" (data.json in this case)
2.  Detailed Product View: Access by clicking the image of any single product, shows the detailed view of the selected product, including product description. <br>
    2a. Both product views support the "add to cart" functionality view the "Add to Cart" button. <br>

3.  Shopping Cart View: accessed via the navigation bar, displays an empty cart message when appropriate. Shows the product, quantity and price of products within the cart, including a running total. The shopping cart view also houses the checkout form.
4.  Order Confirmation Page: accessed after successfully submitting the checkout form, shows the results of the successfully placed order.
    <br>

## Usage

After successfully cloning the repository, navigate into the MyStore folder and run `npm install` to initialize dependencies.

If dependencies have been successfully installed, Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

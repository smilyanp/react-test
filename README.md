# Test React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Overview

The project has 3 tasks. First we will list a set of images from an API. We will then introduce searching functionality, so that when a user searches the list of images will update. Finally, we will create a new page so that when you click a given image, it will take you to that page and it will display more details about the image.

### Task 1

Use API endpoint to list all images for the star search result https://images-api.nasa.gov/search?q=star

For each image display
- The image
- The title

### Task 2

On the original page from Task 1, add a search box at the top of the page. When a user types make an updated API call to https://images-api.nasa.gov/search?q={searchTerm} and display the new results on the page.

### Task 3

Add functionality to be able to click on an image and go to a separate page where you can see more details about the image. Use https://images-api.nasa.gov/asset/{nasa_id} endpoint.

On the new page display additional information for the image. Display
- The image
- The title
- Description
- Date it was created

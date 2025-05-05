
Built by https://www.blackbox.ai

---

# Индивидуальное задание №2 - React.js

## Project Overview

This project is a simple image carousel built using React.js that showcases a collection of images. Users can click on an image to navigate through the carousel. The project demonstrates the use of functional components, hooks, and styling using Tailwind CSS along with Google Fonts.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Open the index.html file**:
   You can simply open the `index.html` file in any modern web browser to view the project. Since this project runs entirely in the browser, there is no need for additional installation steps.

## Usage

1. Open the `index.html` file in your web browser.
2. Click on the images to cycle through the image carousel.

## Features

- Displays a carousel of 10 different images.
- Users can click on the images to change the currently displayed image.
- Inclusively styled using Tailwind CSS for a modern look.
- Mobile responsive design making it accessible on various devices.

## Dependencies

This project utilizes the following libraries:

- React: A JavaScript library for building user interfaces.
- ReactDOM: A package for working with the DOM in React.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Font Awesome: A library providing vector icons and social logos.

Note: The project does not have a `package.json` file included, so it is completely standalone and works directly from the HTML file.

## Project Structure

```
├── index.html           # The main HTML file for the project
└── app.js               # The main JavaScript file containing React components
```

### index.html

- The main entry point of the application.
- Sets up the document structure, links to CSS libraries, and includes the React and ReactDOM scripts.
- Contains a `<div>` with an ID of `root` where the React application is rendered.

### app.js

- Contains the main React components:
  - `ImageCarousel`: A functional component rendering the image carousel.
  - `App`: The main application component that renders the title and the image carousel.
- Implements logic for rendering images and handling user interactions.

Feel free to explore and modify the code to enhance your understanding of React.js and image carousels!
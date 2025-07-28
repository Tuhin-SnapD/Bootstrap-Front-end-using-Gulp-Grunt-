# High Level Threads - Front-End Project

This repository contains the complete front-end code for "High Level Threads," a fictional restaurant website. The project is built with Bootstrap 4 and demonstrates modern web development workflows using both **Gulp** and **Grunt** for task automation.

## Key Features
- **Responsive Design**: Fully responsive layout using the Bootstrap 4 grid system.
- **Interactive Components**: Utilizes Bootstrap components like Modals, Jumbotron, Forms, and Carousels.
- **Sass Preprocessing**: CSS is written using Sass for better organization and maintainability.
- **Dual Build Systems**: The project is configured with two popular JavaScript task runners to demonstrate different automation philosophies:
  - **Gulp**: A fast, stream-based build system that uses code-over-configuration.
  - **Grunt**: A robust, configuration-based task runner.
- **Automated Workflows**:
  - **Development**: Live-reloading server with on-the-fly Sass compilation.
  - **Production**: Asset minification (HTML, CSS, JS), image optimization, and file revisioning for cache-busting.

---

## Prerequisites
Before you begin, ensure you have [Node.js](https://nodejs.org/) (which includes npm) installed on your system.

## Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```
2.  Install all the required dependencies using npm:
    ```bash
    npm install
    ```

---

## How to Run the Project

This project can be run using either Gulp or Grunt. Both provide a development server with live-reloading and a build process for production.

### Development Workflow (Live Server)

To start a development server that automatically compiles Sass and reloads your browser on file changes, use one of the following commands.

#### Using Gulp
```bash
gulp
```
This is the default task. It starts a **BrowserSync** server and watches for any changes to your HTML, SCSS, and JS files, providing a seamless development experience.

#### Using Grunt
```bash
grunt
```
This is Grunt's default task. It achieves the same result as the Gulp command, using Grunt's configuration to run BrowserSync and watch for file changes.

### Production Build

To create an optimized version of the site for deployment, you can generate a production build. This process will create a `dist/` folder with all the final, optimized assets.

#### Using Gulp
```bash
gulp build
```
The Gulp `build` task performs the following steps in sequence:
1.  **`clean`**: Deletes the `dist/` directory to ensure a fresh build.
2.  **`copyFonts`**: Copies Font Awesome fonts into `dist/fonts`.
3.  **`imagemin`**: Compresses all images from the `img/` folder and saves them to `dist/img`.
4.  **`usemin`**: Processes the HTML files to concatenate, minify, and add revision hashes to CSS and JavaScript files for cache-busting. It also minifies the HTML.

The final, production-ready files will be located in the `dist/` folder.

#### Using Grunt
```bash
grunt build
```
The Grunt `build` task follows a similar, configuration-driven process:
1.  **`clean`**: Wipes the `dist/` directory.
2.  **`copy`**: Copies necessary HTML and font files to the `dist/` folder.
3.  **`imagemin`**: Optimizes images.
4.  **`useminPrepare`, `concat`, `cssmin`, `uglify`**: Prepares, concatenates, and minifies CSS and JS assets as defined in the HTML build blocks.
5.  **`filerev` & `usemin`**: Renames files with content hashes and updates the HTML files to point to these new, optimized assets.

The final output is also placed in the `dist/` folder.

---

## Guided by
### Prof. Jogesh Muppala 
> Associate Professor at Hong Kong University of Science and Technology

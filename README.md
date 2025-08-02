# High Level Threads - Premium Fashion Rental Platform

[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.6.2-7952B3?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)
[![Gulp](https://img.shields.io/badge/Gulp-4.0.2-CF4647?style=for-the-badge&logo=gulp)](https://gulpjs.com/)
[![Grunt](https://img.shields.io/badge/Grunt-1.6.1-FBA919?style=for-the-badge&logo=grunt)](https://gruntjs.com/)
[![Sass](https://img.shields.io/badge/Sass-1.77.2-CC6699?style=for-the-badge&logo=sass)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](LICENSE)

A modern, responsive fashion rental website built with **Bootstrap 4**, featuring a comprehensive front-end development workflow using both **Gulp** and **Grunt** for task automation. This project demonstrates professional web development practices with dual build system support.

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Technology Stack](#️-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🎮 Development Workflow](#-development-workflow)
- [🏗️ Production Build](#️-production-build)
- [🎨 Customization](#-customization)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

## 🎯 Project Overview

**High Level Threads** is a revolutionary fashion platform that provides sustainable, affordable, and premium rental clothing solutions. The website showcases modern fashion collections with an emphasis on user experience and responsive design.

### Key Features
- **Responsive Design**: Fully responsive layout using Bootstrap 4 grid system
- **Interactive Components**: Bootstrap modals, carousels, forms, and navigation
- **Enhanced JavaScript**: Form validation, smooth animations, and user experience features
- **Dual Build Systems**: Configured with both Gulp and Grunt for flexibility
- **Sass Preprocessing**: Organized CSS using Sass for maintainability
- **Performance Optimized**: Image optimization, minification, and cache-busting

## ✨ Features

### 🎨 Frontend Features
- **Responsive Navigation**: Mobile-first navbar with smooth transitions
- **Interactive Carousel**: Image slider with controls and indicators
- **Modal Forms**: Login and size-check forms with validation
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Form Validation**: Client-side validation with user feedback
- **Back to Top**: Smooth scroll-to-top functionality
- **Loading States**: Progressive image loading with animations

### 🛠️ Development Features
- **Live Reload**: Automatic browser refresh on file changes
- **Sass Compilation**: Real-time CSS preprocessing with source maps
- **Error Handling**: Comprehensive error reporting and notifications
- **Cross-browser Testing**: BrowserSync for multiple device testing
- **Asset Optimization**: Minification, concatenation, and revisioning

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/) (for version control)

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/high-level-threads.git
cd high-level-threads

# Install dependencies
npm install

# Start development server (Gulp)
gulp

# Or start with Grunt
grunt
```

**That's it!** Your development server will be running at `http://localhost:3000`

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Bootstrap** | 4.6.2 | CSS Framework |
| **jQuery** | 3.7.1 | JavaScript Library |
| **Popper.js** | 2.11.8 | Tooltip/Popover Positioning |
| **Font Awesome** | 4.7.0 | Icon Library |
| **Sass** | 1.77.2 | CSS Preprocessor |
| **Gulp** | 4.0.2 | Build System |
| **Grunt** | 1.6.1 | Alternative Build System |
| **BrowserSync** | 3.0.2 | Development Server |

## 📁 Project Structure

```
high-level-threads/
├── 📁 src/                    # Source files
│   ├── 📁 html/              # HTML templates
│   │   ├── index.html        # Homepage
│   │   ├── aboutus.html      # About page
│   │   ├── contactus.html    # Contact page
│   │   └── developer.html    # Developer page
│   ├── 📁 css/               # Sass/CSS files
│   │   ├── styles.scss       # Main Sass file
│   │   └── styles.css        # Compiled CSS
│   └── 📁 js/                # JavaScript files
│       └── scripts.js        # Main JavaScript file
├── 📁 dist/                  # Production build (generated)
├── 📁 node_modules/          # Dependencies
├── 📄 gulpfile.js           # Gulp configuration
├── 📄 Gruntfile.js          # Grunt configuration
├── 📄 package.json          # Project dependencies
└── 📄 README.md             # This file
```

## 🎮 Development Workflow

### Available Commands

#### Gulp Commands
```bash
gulp                    # Start development server with live reload
gulp sass              # Compile Sass files
gulp build             # Build for production
gulp production        # Production build with optimization
gulp clean             # Clean dist folder
gulp copyfonts         # Copy font files
gulp copyhtml          # Copy HTML files
gulp usemin            # Process and minify assets
```

#### Grunt Commands
```bash
grunt                  # Start development server with watch
grunt sass            # Compile Sass files
grunt build           # Build for production
grunt css             # Compile CSS only
```

### Development Features
- **Live Reload**: Automatic browser refresh on file changes
- **Sass Compilation**: Real-time CSS preprocessing with source maps
- **Cross-browser Testing**: BrowserSync for multiple device testing
- **Error Reporting**: Console notifications for build issues
- **File Watching**: Automatic compilation on file changes

## 🏗️ Production Build

Generate optimized production-ready files for deployment.

### Gulp Build Process
```bash
gulp build
```

**Build Steps:**
1. **Clean**: Removes existing `dist/` directory
2. **Copy Fonts**: Copies Font Awesome fonts
3. **Copy HTML**: Copies HTML files
4. **Asset Processing**: Concatenates, minifies, and adds revision hashes
5. **HTML Minification**: Optimizes HTML files

### Grunt Build Process
```bash
grunt build
```

**Build Steps:**
1. **Clean**: Wipes `dist/` directory
2. **Copy**: Copies HTML and font files
3. **Asset Processing**: Prepares, concatenates, and minifies CSS/JS
4. **File Revisioning**: Adds content hashes for cache-busting

### Build Output
Both build processes create a `dist/` folder containing:
- Minified HTML, CSS, and JavaScript
- Optimized assets with cache-busting
- Font files
- Production-ready files

## 🎨 Customization

### Adding New Pages
1. Create HTML file in `src/html/`
2. Include standard header/footer structure
3. Add navigation links
4. Update build configuration if needed

### Styling Changes
1. Modify Sass files in `src/css/`
2. Variables are defined in `styles.scss`
3. Component styles in organized sections
4. Run build process to compile

### JavaScript Enhancements
1. Add features to `src/js/scripts.js`
2. Follow existing code structure
3. Test in development mode
4. Build for production

## 🧪 Testing

### Manual Testing Checklist
- [ ] Responsive design on all screen sizes
- [ ] Navigation functionality
- [ ] Form validation
- [ ] Modal interactions
- [ ] Carousel controls
- [ ] Image loading
- [ ] Cross-browser compatibility

### Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🚀 Deployment

### Static Hosting
1. Run build process: `gulp build` or `grunt build`
2. Upload `dist/` folder contents to your hosting provider
3. Configure server for single-page application routing if needed

### Recommended Hosting Platforms
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable static hosting

### Deployment Commands
```bash
# Build for production
gulp build

# Deploy to Netlify (if using Netlify CLI)
netlify deploy --prod --dir=dist

# Deploy to Vercel (if using Vercel CLI)
vercel --prod
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature-name`
3. **Make** your changes
4. **Test** thoroughly
5. **Commit** changes: `git commit -m 'Add feature'`
6. **Push** to branch: `git push origin feature-name`
7. **Submit** a pull request

### Development Guidelines
- Follow existing code style
- Test on multiple browsers
- Ensure responsive design
- Update documentation if needed

## 📝 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Tuhin Chakrabarty**
- Full Stack Web Developer
- VIT Vellore
- Email: tuhinchakrabarty14@gmail.com

## 🙏 Acknowledgments

- **Bootstrap Team**: For the amazing CSS framework
- **Font Awesome**: For the comprehensive icon library
- **Gulp & Grunt Communities**: For excellent build tools
- **Prof. Jogesh Muppala**: For guidance and inspiration

---

<div align="center">

**High Level Threads** - Where Style Meets Sustainability

*Built with ❤️ using modern web technologies*

[![GitHub stars](https://img.shields.io/github/stars/your-username/high-level-threads?style=social)](https://github.com/your-username/high-level-threads)
[![GitHub forks](https://img.shields.io/github/forks/your-username/high-level-threads?style=social)](https://github.com/your-username/high-level-threads)

</div>

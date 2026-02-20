# 📚 Essential NPM Commands Guide

A comprehensive guide for setting up and configuring modern web development projects.

---

## 🚀 React Project with Vite

### Creating and Running Your Project

1. **Create a new Vite project**
   ```bash
   npm create vite@latest
   ```
   This command creates a new project using Vite, a build tool that provides a faster and leaner development experience for modern web projects. You'll be prompted to select a framework (React, Vue, Svelte, etc.).

2. **Install dependencies**
   ```bash
   npm install
   ```
   Installs all dependencies listed in `package.json` and creates the `node_modules` folder.

3. **Start development server**
   ```bash
   npm run dev
   ```
   Starts a development server that watches for file changes and automatically reloads the application.

---

## 🎨 Bootstrap Configuration

### Installation & Setup

1. **Install Bootstrap**
   ```bash
   npm install bootstrap@5.3.8
   ```
   Installs Bootstrap library version 5.3.8 for styling and responsive design.

2. **Import Bootstrap CSS**
   
   Add this line to your `App.jsx`:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```
   This imports Bootstrap's CSS into your React application, making all styles available throughout your app.

---

## 🎯 Lucide Icons

### Installation & Setup

1. **Install Lucide React**
   ```bash
   npm install lucide-react
   ```
   Provides a set of customizable SVG icons for React applications.

2. **Install Lucide Lab**
   ```bash
   npm install @lucide/lab
   ```
   Contains additional icon lab for use with Lucide React icons.

3. **Import standard icons**
   
   Add this to your component:
   ```javascript
   import { IconName } from 'lucide-react';
   ```
   Replace `IconName` with the actual icon you want to use.

4. **Import label icons**
   
   Add this to your component:
   ```javascript
   import { IconName } from '@lucide/lab';
   ```
   Replace `IconName` with the actual label icon you want to use.

---

## 🎨 Tailwind CSS (Vite with React)

### Installation & Configuration

1. **Create a Vite project and navigate to it**
   ```bash
   npm create vite@latest
   cd your-project-name
   ```
   Creates a new Vite project with React. Navigate into the project directory.

2. **Install Tailwind CSS and dependencies**
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
   Installs Tailwind CSS version 4 and the Vite plugin for Tailwind.

3. **Configure the Vite plugin for Tailwind CSS**
   
   Open `vite.config.js` and add the Tailwind CSS plugin:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   })
   ```
   This configures Vite to use the Tailwind CSS plugin during the build process.

4. **Initialize Tailwind CSS configuration**
   
   Add this line to your `src/index.css`:
   ```css
   @import "tailwindcss";
   ```
   This imports Tailwind's base styles, components, and utilities into your project.

5. **Start your development server**
   ```bash
   npm run dev
   ```
   Starts the development server with Tailwind CSS enabled. Your Tailwind classes will now work in your React components.

---

## 🎨 Tailwind CSS (Non-React Project)

### Installation & Configuration

1. **Initialize Node.js project**
   ```bash
   npm init -y
   ```
   Creates a `package.json` file with default settings.

2. **Install Tailwind CSS and dependencies**
   ```bash
   npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
   ```
   - **Tailwind CSS**: Utility-first CSS framework
   - **PostCSS**: Tool for transforming CSS with JavaScript
   - **Autoprefixer**: Automatically adds vendor prefixes

3. **Create source CSS file**
   
   Create `src/styles.css` and add:
   ```css
   @import "tailwindcss";
   ```

4. **Create HTML file**
   
   Create `index.html` and add in the `<head>` section:
   ```html
   <link rel="stylesheet" href="./dist/output.css">
   ```

5. **Configure build scripts**
   
   Update the `scripts` section in `package.json`:
   ```json
   "scripts": {
     "dev": "npx @tailwindcss/cli -i ./src/styles.css -o ./dist/output.css --watch",
     "build": "npx @tailwindcss/cli -i ./src/styles.css -o ./dist/output.css --minify"
   }
   ```

6. **Run the appropriate command**

   **Development mode:**
   ```bash
   npm run dev
   ```
   - Use during development when writing code
   - Runs in watch mode - automatically rebuilds CSS when you make changes
   - Keeps running until you stop it (Ctrl+C)
   - Output file is not minified (larger file size, easier to debug)

   **Production build:**
   ```bash
   npm run build
   ```
   - Use once when you're done (before deploying/publishing)
   - Runs once and stops
   - Output file is minified (smaller file size)
   - Creates production-ready version

---

## 🟢 Node.js Project with Nodemon

### Initialization & Setup

1. **Initialize Node.js project**
   ```bash
   npm init
   ```
   Initializes a new Node.js project. You will be prompted to enter project details.

2. **Install Nodemon**
   ```bash
   npm install nodemon --save-dev
   ```
   Installs Nodemon as a development dependency to automatically restart the server when file changes are detected.

3. **Configure start script**

   Add this line to the `scripts` section in your `package.json`:
   ```json
   "start": "nodemon App.js"
   ```
   This allows you to start your application using `npm start`.

---

## 📝 Notes

- Always run `npm install` after cloning a project or adding new dependencies
- Use `npm run dev` for development with hot-reloading
- Use `npm run build` for production-ready builds
- Keep your `package.json` updated and version-controlled

---

*Last updated: January 2026*

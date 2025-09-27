# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion. Features a clean design, smooth animations, and comprehensive sections showcasing projects, skills, and experience.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **React Router**: Single-page application with smooth navigation
- **TypeScript**: Type-safe development for better code quality
- **Performance Optimized**: Fast loading and smooth interactions

### Sections
1. **Dashboard/Hero**: Animated hero section with typewriter effect
2. **Projects**: Filterable project gallery with modal details
3. **About**: Personal story, timeline, and skills visualization
4. **Contact**: Form with validation and submission handling
5. **Footer**: Social links and additional navigation

### Technical Features
- Framer Motion animations
- Custom CSS with CSS variables for theming
- Error boundaries for graceful error handling
- Form validation and state management
- Image galleries and project showcases
- Responsive navigation with mobile menu
- SEO-friendly structure

## 🛠️ Technologies Used

### Frontend
- **React 18+** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon components

### Styling
- **CSS3** - Custom styling with modern features
- **CSS Variables** - Dynamic theming
- **Flexbox & Grid** - Modern layout systems
- **Media Queries** - Responsive design

### Development Tools
- **Create React App** - Project setup and build tools
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking
- **npm** - Package management

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── common/          # Reusable components
│   │   ├── ErrorBoundary.tsx
│   │   └── ScrollToTop.tsx
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   ├── Dashboard.tsx    # Hero/landing section
│   ├── Footer.tsx       # Footer component
│   ├── Header.tsx       # Navigation header
│   └── Projects.tsx     # Projects showcase
├── data/                # Static data
│   ├── aboutData.ts     # Personal information
│   └── projectsData.ts  # Project details
├── styles/              # CSS files
│   ├── components/      # Component-specific styles
│   ├── App.css         # Global styles
│   └── variables.css   # CSS custom properties
├── utils/               # Utility functions
│   ├── animations.ts   # Animation configurations
│   ├── helpers.ts      # Helper functions
│   └── theme.ts        # Theme management
├── assets/              # Static assets
│   ├── images/         # Image files
│   └── icons/          # Icon files
└── App.tsx             # Main application component
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The page will reload automatically when you make changes

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

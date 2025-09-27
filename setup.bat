@echo off
REM Portfolio Website Setup Script for Windows
REM This script sets up the development environment and provides helpful information

echo 🚀 Portfolio Website Setup
echo ==========================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies. Please check your internet connection and try again.
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully!

REM Create environment file if it doesn't exist
if not exist .env (
    echo 📝 Creating .env file...
    (
    echo # Portfolio Website Environment Variables
    echo # Add your configuration here
    echo.
    echo # Email service ^(optional^)
    echo # REACT_APP_EMAILJS_SERVICE_ID=your_service_id
    echo # REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
    echo # REACT_APP_EMAILJS_USER_ID=your_user_id
    echo.
    echo # Analytics ^(optional^)
    echo # REACT_APP_GA_TRACKING_ID=your_tracking_id
    echo.
    echo # API endpoints ^(optional^)
    echo # REACT_APP_API_URL=https://your-api.com
    ) > .env
    echo ✅ .env file created!
)

echo.
echo 🎉 Setup completed successfully!
echo.
echo 📋 Next Steps:
echo 1. Customize your personal information in src/data/aboutData.ts
echo 2. Add your projects in src/data/projectsData.ts
echo 3. Replace placeholder images in src/assets/images/
echo 4. Update colors and styling in src/styles/variables.css
echo 5. Start the development server with: npm start
echo.
echo 📚 Available Commands:
echo   npm start          - Start development server
echo   npm run build      - Build for production
echo   npm test           - Run tests
echo.
echo 🌐 The application will be available at: http://localhost:3000
echo.
echo 📖 For more information, check the README.md file
echo.
echo Happy coding! 🚀
echo.
pause
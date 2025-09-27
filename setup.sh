#!/bin/bash

# Portfolio Website Setup Script
# This script sets up the development environment and provides helpful information

echo "🚀 Portfolio Website Setup"
echo "=========================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (version 16+) from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "⚠️  Node.js version is $NODE_VERSION. Please upgrade to version 16 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi

# Create environment file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cat > .env << EOL
# Portfolio Website Environment Variables
# Add your configuration here

# Email service (optional)
# REACT_APP_EMAILJS_SERVICE_ID=your_service_id
# REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
# REACT_APP_EMAILJS_USER_ID=your_user_id

# Analytics (optional)
# REACT_APP_GA_TRACKING_ID=your_tracking_id

# API endpoints (optional)
# REACT_APP_API_URL=https://your-api.com
EOL
    echo "✅ .env file created!"
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next Steps:"
echo "1. Customize your personal information in src/data/aboutData.ts"
echo "2. Add your projects in src/data/projectsData.ts"
echo "3. Replace placeholder images in src/assets/images/"
echo "4. Update colors and styling in src/styles/variables.css"
echo "5. Start the development server with: npm start"
echo ""
echo "📚 Available Commands:"
echo "  npm start          - Start development server"
echo "  npm run build      - Build for production"
echo "  npm test           - Run tests"
echo "  npm run type-check - Check TypeScript types"
echo ""
echo "🌐 The application will be available at: http://localhost:3000"
echo ""
echo "📖 For more information, check the README.md file"
echo ""
echo "Happy coding! 🚀"
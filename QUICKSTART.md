# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Setup
```bash
# Windows
setup.bat

# macOS/Linux
chmod +x setup.sh
./setup.sh
```

### 2. Customize Content
- **Personal Info**: Edit `src/data/aboutData.ts`
- **Projects**: Edit `src/data/projectsData.ts`
- **Images**: Add to `src/assets/images/`
- **Colors**: Edit `src/styles/variables.css`

### 3. Start Development
```bash
npm start
```

### 4. Build for Production
```bash
npm run build
```

## 📝 Essential Customizations

### Update Personal Information
```typescript
// src/data/aboutData.ts
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  role: "Your Role", 
  bio: "Your bio...",
  email: "your.email@example.com",
  // ... more fields
};
```

### Add Your Projects
```typescript
// src/data/projectsData.ts
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description...",
    technologies: ["React", "TypeScript"],
    // ... more fields
  }
];
```

### Customize Theme
```css
/* src/styles/variables.css */
:root {
  --primary-color: #your-color;
  --bg-primary: #your-bg-color;
  /* ... more variables */
}
```

## 🔧 Common Issues

**TypeScript Errors with Icons**: 
- These are non-blocking warnings
- The app will still run correctly

**Missing Images**: 
- Add your images to `src/assets/images/`
- Update paths in your data files

**Environment Variables**:
- Copy `.env.example` to `.env`
- Add your API keys and configuration

## 📞 Need Help?

1. Check the full README.md
2. Look at the project structure
3. Examine the sample data files
4. Review the CSS variable system

---

**Your portfolio is ready! 🎉**
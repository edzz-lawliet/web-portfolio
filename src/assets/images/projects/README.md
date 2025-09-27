# Project Images

This directory contains screenshots and images for portfolio projects:

## Organization:
Create subdirectories for each project:
- `project1/` - E-commerce website images
- `project2/` - Task management app images  
- `project3/` - Weather dashboard images
- `project4/` - Social media app images
- `project5/` - Portfolio website images

## Required Images per Project:
- `main.jpg` - Primary project screenshot (recommended: 1200x800px)
- `thumbnail.jpg` - Small preview image (recommended: 400x300px)
- `gallery/` - Additional screenshots for project gallery
  - `screenshot1.jpg`
  - `screenshot2.jpg` 
  - `screenshot3.jpg`

## Image Guidelines:
- Capture full browser screenshots for web projects
- Include mobile views for responsive projects
- Show key features and user interfaces
- Optimize file sizes for web delivery
- Use consistent aspect ratios within each project

## Placeholder Images:
For development, you can use:
- https://picsum.photos/1200/800 (for main screenshots)
- https://picsum.photos/400/300 (for thumbnails)

## Implementation:
Import and reference in projectsData.ts:
```javascript
import project1Main from '../assets/images/projects/project1/main.jpg';
import project1Thumb from '../assets/images/projects/project1/thumbnail.jpg';
```
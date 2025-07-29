# Portfolio
🌟 Personal Portfolio Website

A modern, responsive portfolio showcasing my work with an innovative dark/light mode toggle system.

## ✨ Features

### 🌙 Advanced Theme Toggle
- **Interactive SVG Switch**: Custom-designed toggle with morphing animations
- **Precision Coordinates**: Meticulously positioned decorative screws at (6px, 6px) intervals
- **Smooth Rotations**: -10° to +10° transitions with hover effects
- **Theme Persistence**: Remembers user preference across sessions

### 🎨 Design Highlights
- **Dual Color Schemes**: Dark mode + "Sleek & Tech" light palette
- **Responsive Grid**: 3-column → 1-column adaptive layout
- **Social Icons**: Theme-aware color adaptation
- **Smooth Animations**: CSS transitions and JavaScript morphing

## 🛠️ Tech Stack
- HTML5 | CSS3 | JavaScript (ES6+)
- CSS Grid & Flexbox
- Typed.js for animations
- Git version control

## 🌙 Dark/Light Mode Toggle Button - Technical Details

### Overview
An interactive theme toggle button with SVG morphing animation, decorative screws, and smooth rotation effects.

### Key Features
- **SVG Morphing Animation**: Toggle switch changes from "off" to "on" state with smooth transitions
- **Decorative Screws**: Four corner screws positioned at precise coordinates for realistic appearance
- **Rotation Effects**: Button rotates from -10° (dark mode) to +10° (light mode) with hover effects
- **Label Updates**: "Mode: Dark" ↔ "Mode: Light" text changes dynamically

### Technical Coordinates & Specifications

```css
/* Button Container */
transform: rotate(-10deg);  /* Dark mode default */
border: 0.5px solid var(--text-primary);
padding: 1px;
border-radius: 4px;

/* SVG Toggle Switch */
viewBox: "0 0 62 89"
height: 80px
width: auto

/* SVG Elements Coordinates */
Polygon: "21.82 29.26 38.09 29.26 38.09 59.74 21.82 59.74 17.46 39.46 21.82 29.26"
Polyline: "17.46 39.46 32.63 39.46 38.09 59.74"
Line: x1="38.09" y1="29.26" x2="32.63" y2="39.46"

/* Screw Positions */
Top-left: (6px, 6px)
Top-right: (6px from right, 6px from top)
Bottom-left: (6px, 6px from bottom)
Bottom-right: (6px from right, 6px from bottom)
Screw size: 6px × 6px with 1.5px center hole
```

### JavaScript Functionality
- Theme persistence in localStorage
- CSS variable switching for color schemes
- SVG stroke color adaptation
- Smooth rotation animations

## 🚀 Portfolio Project Overview

### Description
A modern, responsive portfolio website featuring dark/light mode theming, interactive elements, and clean design aesthetics.

### 🎯 Key Sections
1. **Hero Section** - Introduction with animated typing effect
2. **About Me** - Professional background and skills
3. **Services** - Web Development, Graphic Design, Data Analysis
4. **Projects** - Latest work showcase with live links
5. **Contact** - Interactive contact form

### 🛠️ Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables for theming
- **Libraries**: Typed.js for text animation
- **Features**: Responsive design, Theme persistence, SVG animations

### ✨ Notable Features
- **Dual Theme System**: Complete dark/light mode with "Sleek & Tech" palette
- **Interactive Toggle**: Custom-designed switch with realistic screw details
- **Responsive Grid**: 3-column project layout (desktop) → 1-column (mobile)
- **Social Media Integration**: Clean icon styling with theme adaptation
- **Smooth Animations**: Hover effects, transitions, and morphing elements

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints optimized for all devices
- Grid layouts adapt seamlessly
- Touch-friendly interactive elements

### 🔧 Code Organization
- Modular CSS with custom properties
- Separate JavaScript file for maintainability
- Clean HTML structure with semantic elements
- Optimized for performance and accessibility

## 🚀 Live Demo
[View Portfolio](https://vishalsingh3026.github.io/Portfolio/)

## 📂 Project Structure
```
Portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with theme variables
├── script.js           # JavaScript for functionality
├── images/             # Project images and assets
├── Resume_Vishal_.pdf  # Downloadable resume
└── README.md           # Project documentation
```

## 🌟 Getting Started

1. Clone the repository
```bash
git clone https://github.com/VishalSingh3026/Portfolio.git
```

2. Open `index.html` in your browser
3. Experience the interactive theme toggle and responsive design!

## 📧 Contact
Feel free to reach out for collaborations or opportunities!

- **GitHub**: [@VishalSingh3026](https://github.com/VishalSingh3026)
- **LinkedIn**: [Vishal Singh](https://www.linkedin.com/in/vishal-singh-chauhan-4a0273239/)
- **Email**: [Contact through portfolio](mailto:your-email@example.com)

---

⭐ **Star this repository if you found it helpful!**

# Lotto Number Generator Project Blueprint

## Overview
A modern, interactive Lotto Number Generator web application. It allows users to generate 6 unique lottery numbers (1-45) and 1 bonus number with beautiful animations and a premium aesthetic.

## Features & Design
- **Interactive UI**: A "Generate" button that triggers a sequence of animations.
- **Theme Support**: Integrated Dark and Light modes with a smooth transition and persistent user preference.
- **Visual Feedback**: Lotto balls that appear one by one with different colors based on their number range.
- **Premium Aesthetic**: Uses glassmorphism, deep shadows, and subtle textures for a high-end feel.
- **Modern CSS**: Employs CSS Variables, Flexbox/Grid, and the `:has()` selector where appropriate.
- **Mobile Responsive**: Adapts to various screen sizes for a seamless experience on both mobile and desktop.

## Current Plan & Steps
1.  **Implement Theme Switching**: Add a theme toggle button and CSS variables for light mode.
2.  **Define Structure (`index.html`)**: Update layout to include the theme toggle.
3.  **Apply Styles (`style.css`)**: Implement transitions and light mode theme overrides.
4.  **Implement Logic (`main.js`)**:
    - Add theme toggle logic with localStorage persistence.
    - Generate 6 random unique numbers between 1 and 45.
    - Generate 1 bonus number.
    - Animate the appearance of each number.
5.  **Verification**: Ensure no runtime errors and the animations run smoothly.

## Project Details
- **Entry Point**: `index.html`
- **Main Script**: `main.js`
- **Styles**: `style.css`
- **Tech Stack**: HTML5, CSS3, ES Modules.

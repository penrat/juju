# Theme Implementation Guide

## Available Themes
The application supports four theme colors:
1. **Black** - A dark theme with black background
2. **White** - A light theme with white background
3. **Gray** - A neutral gray theme
4. **Orange** - A warm orange theme

## How Themes Work

### Theme Context
The theme system is managed through React Context API using [ThemeContext.js](src/app/contexts/ThemeContext.js). The context provides:
- `theme` - Current theme identifier
- `toggleTheme()` - Function to change the theme

### CSS Variables
Each theme defines a set of CSS variables in [globals.css](src/app/globals.css):
- `--background` - Main background color
- `--foreground` - Primary text color
- `--primary` - Primary UI element color
- `--secondary` - Secondary UI element color
- `--accent` - Accent color for highlights
- `--border` - Border color
- `--message-user` - User message background
- `--message-assistant` - Assistant message background
- `--message-error` - Error message background

### Theme Switching
Themes are applied by setting the `data-theme` attribute on the HTML root element. Components can access the current theme through the `useTheme()` hook and adjust their styling accordingly.

## Adding New Themes
1. Add a new theme definition in [globals.css](src/app/globals.css)
2. Add the theme to the `themes` array in [ThemeSelector.js](src/app/components/ThemeSelector.js)
3. Update component styling to support the new theme if necessary
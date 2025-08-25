# Macintosh 1984 Ghost Theme

A retro-styled Ghost CMS theme inspired by the classic Macintosh System 1.0 interface, built with system.css and featuring authentic 1984 Mac aesthetics.

## Features

- **Classic Mac UI**: Authentic Macintosh 1984 interface design
- **System.css Integration**: Utilizes the system.css framework for retro styling
- **Ghost CMS Compatible**: Built for Ghost 5.0+ with full theme validation
- **Responsive Design**: Mobile-friendly while maintaining retro aesthetics
- **Typography**: Classic Mac fonts including Chicago, Monaco, and Geneva
- **Interactive Effects**: Retro button presses and hover animations
- **Blog Articles**: Pre-written content about Macintosh 1984 history

## Project Structure

```
├── README.md
├── index.html                 # Static homepage
├── article.html              # Static article template
├── articles/                 # Markdown articles about Mac 1984
│   ├── 01-birth-of-macintosh.md
│   ├── 02-super-bowl-commercial.md
│   ├── 03-team-behind-macintosh.md
│   ├── 04-interface-revolution-gui.md
│   └── 05-price-of-innovation-market-challenge.md
├── ghost/                    # Ghost CMS installation
│   ├── content/
│   │   └── themes/
│   │       ├── journal/      # Modified Journal theme with Mac styling
│   │       └── macintosh-1984-clean/  # Custom Mac theme
│   └── versions/
└── macintosh-1984-clean/     # Original custom theme files
    ├── assets/
    │   ├── css/
    │   │   └── screen.css
    │   └── js/
    │       └── app.js
    ├── default.hbs
    ├── index.hbs
    ├── post.hbs
    ├── package.json
    └── ...
```

## Themes Included

### 1. Journal Theme (Modified)
- Based on Ghost's Journal theme
- Enhanced with system.css integration
- Macintosh 1984 color scheme and typography
- Custom CSS file: `macintosh-1984.css`
- Custom JavaScript: `macintosh-1984.js`

### 2. Macintosh 1984 Clean Theme
- Custom-built theme from scratch
- Pure Macintosh System 1.0 aesthetic
- Window-style layout with classic Mac elements
- Optimized for Ghost 6.x compatibility

## Installation

1. **Static Version**: Open `index.html` in a web browser
2. **Ghost Theme**: 
   - Upload theme zip to Ghost admin
   - Or copy theme folder to `/content/themes/`
   - Activate in Ghost admin design settings

## Ghost CMS Setup

The project includes a complete Ghost installation:

1. Navigate to `ghost/` directory
2. Start Ghost: `ghost start`
3. Visit `http://localhost:2368/ghost/` for admin
4. Activate the Macintosh 1984 theme

## Customization

### Colors
- **Mac Black**: `#000000`
- **Mac White**: `#ffffff`
- **Mac Gray**: `#c0c0c0`
- **Light Gray**: `#f0f0f0`

### Fonts
- **Chicago**: Primary UI font
- **Monaco**: Monospace/terminal font
- **Geneva**: Body text font

### Theme Options
Available in Ghost admin:
- Title font selection
- Body font selection
- Navigation layout options

## Development

### CSS Structure
- `screen.css`: Base theme styles
- `macintosh-1984.css`: Mac-specific styling
- System.css: External retro CSS framework

### JavaScript Features
- Retro button effects
- Classic Mac window interactions
- Hover animations
- Optional system sound effects

## Content

### Articles Included
1. **Birth of Macintosh**: Development history
2. **Super Bowl Commercial**: The famous 1984 ad
3. **Team Behind Macintosh**: Key personnel
4. **Interface Revolution**: GUI innovations
5. **Price of Innovation**: Market challenges

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

This project is open source. Individual components may have their own licenses:
- Ghost CMS: MIT License
- System.css: MIT License
- Custom theme code: MIT License

## Credits

- **System.css**: [@sakun](https://github.com/sakun)
- **Ghost CMS**: Ghost Foundation
- **Journal Theme**: Ghost Foundation
- **Historical Content**: Curated from various sources about Mac 1984
- **Images**: Unsplash contributors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Ghost CMS
5. Submit a pull request

## Version History

- **v1.0.1**: Journal theme integration with system.css
- **v1.0.0**: Initial custom Macintosh 1984 theme

---

*Built with ❤️ and nostalgia for the classic Macintosh experience*

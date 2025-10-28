# Build Process

This project uses Sass for CSS preprocessing. 

## Available Scripts

### CSS Compilation

- `npm run build:css` - Compile SCSS to compressed CSS for production
- `npm run dev:css` - Compile SCSS to expanded CSS with source maps for development  
- `npm run watch:css` - Watch SCSS files and recompile automatically on changes

## Folder Structure

```
build/
└── scss/          # Source SCSS files
    └── style.scss # Main SCSS file with mixins and variables

docs/
└── css/           # Compiled CSS output (production ready)
    ├── style.css     # Compiled CSS (ready for production)
    └── style.css.map # Source map for debugging
```

## Usage

1. **For development**: Use `npm run watch:css` to automatically compile changes
2. **For production**: Use `npm run build:css` to generate optimized CSS
3. **For debugging**: Use `npm run dev:css` to generate readable CSS with source maps

## Next Steps

- The compiled CSS is already linked in your HTML files: `<link rel="stylesheet" href="css/style.css">`
- Consider adding `docs/css/style.css.map` to `.gitignore` if you don't want to commit source maps
- The SCSS file includes modern features like mixins, functions, and variables for easy maintenance
- The compiled CSS is production-ready and optimized
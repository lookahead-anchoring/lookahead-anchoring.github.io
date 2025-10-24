# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website project page for "Lookahead Anchoring: Preserving Character Identity in Audio-Driven Human Animation" research paper. It's a standalone HTML website with no build process - files are served directly from the repository.

## Project Structure

- `index.html` - Main website page with paper information, abstract, and media galleries
- `css/` - Stylesheets including Bootstrap, custom app styles, and third-party components
- `js/` - JavaScript files for interactive features and UI components
- `img/` - Static images including paper thumbnails, logos, and icons
- `video/` - Video content organized in subdirectories by category
- `README.md` - Basic project description

## Development Workflow

**No build process required** - This is a static website that can be opened directly in a browser.

### Local Development
```bash
# Simply open index.html in a browser
open index.html

# Or serve locally with any static server, e.g.:
python -m http.server 8000
# Then visit http://localhost:8000
```

### File Serving
All resources are served directly - no compilation, bundling, or preprocessing needed.

## Key Components

### Interactive Video Comparison
- `js/video_comparison.js` - Custom canvas-based video comparison tool that allows side-by-side video comparison with draggable divider
- `js/jquery.twentytwenty.js` - jQuery plugin for before/after image comparisons

### Code Syntax Highlighting
- `js/codemirror.min.js` + `css/codemirror.min.css` - Used for BibTeX citation display
- Configured as read-only in `js/app.js`

### UI Framework
- Bootstrap 3.x (`css/bootstrap.min.css`, `js/bootstrap.min.js`)
- Font Awesome icons (`css/font-awesome.min.css`)
- jQuery (`js/jquery.min.js`)

### Custom Styling
- `css/app.css` - Contains Lato font definitions, academic paper styling, video container layouts, and responsive design elements

## Content Management

### Adding New Videos
1. Place video files in appropriate `video/` subdirectories
2. Update `index.html` to reference new videos in the gallery sections
3. Ensure video format is web-compatible (MP4 recommended)

### Updating Paper Information
- Edit `index.html` directly for abstract, author information, and links
- Update meta tags for social media sharing
- Modify BibTeX citation in the textarea element

### Images and Assets
- Add new images to `img/` directory
- Update references in `index.html`
- Ensure proper alt text for accessibility

## Technical Notes

### Browser Compatibility
- Uses modern HTML5 video and canvas features
- Requires JavaScript enabled for interactive components
- Responsive design works on mobile and desktop

### External Dependencies
- Google Analytics integration
- Google Fonts (Lato) loaded from CDN
- All other assets are self-hosted

### No Server-Side Processing
This is a purely client-side website - all functionality runs in the browser with no backend requirements.
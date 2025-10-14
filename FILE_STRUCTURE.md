# Portfolio File Structure Explained

This document explains what each file and folder does in your portfolio.

## 📁 Root Directory

### HTML Files
- **`index.html`** - Main homepage with bio, research areas, and introduction
- **`news.html`** - Redirect file that sends visitors to `/news/` 
- **`projects.html`** - Redirect file that sends visitors to `/projects/`
- **`footer.html`** - Shared footer component with social links, loaded by all pages

### Configuration Files
- **`CNAME`** - Contains your custom domain name for GitHub Pages
- **`README.md`** - Main documentation file (what you're reading now!)
- **`SETUP_GUIDE.md`** - Step-by-step guide to set up your portfolio
- **`CHECKLIST.md`** - Checklist to track your setup progress
- **`.gitignore`** - Tells Git which files to ignore

## 📁 assets/ - All Media Files

### assets/profile/
- **Purpose**: Store your profile photo
- **Files to add**: 
  - `profile-photo.jpg` - Your professional headshot (400x400px+ recommended)

### assets/images/news/
- **Purpose**: Images for news items
- **Examples**: Award photos, conference pictures, event photos
- **Referenced from**: Your `data/news.csv` file

### assets/images/publications/
- **Purpose**: Images for projects and publications
- **Examples**: Project diagrams, paper figures, screenshots
- **Referenced from**: Your `data/projects.csv` file

### assets/anway/ *(DELETE THIS)*
- Old personal files from previous owner - remove these!

## 📁 config/ - Configuration

### config/site-config.js
- **Purpose**: Centralized configuration for easy customization
- **Contains**: Name, email, social links, colors, typing words
- **Usage**: Edit this file to change site-wide settings (currently optional)

## 📁 data/ - Your Content Data

### Your Content Files (TO CREATE)
- **`news.csv`** or **`news.xlsx`** - Your news and updates
- **`projects.csv`** or **`projects.xlsx`** - Your projects and publications

### Template & Instructions
- **`news_template.csv`** - Example news data structure
- **`projects_template.csv`** - Example projects data structure
- **`NEWS_INSTRUCTIONS.md`** - Detailed guide for creating news data
- **`PROJECTS_INSTRUCTIONS.md`** - Detailed guide for creating projects data

### Old Files *(DELETE THESE)*
- `news.xlsx` - Previous owner's news data
- `projects.xlsx` - Previous owner's projects data

## 📁 documents/ - Downloadable Files

### documents/
- **Purpose**: Store your CV/Resume and other documents
- **Add**: `Your_Name_CV.pdf` - Your curriculum vitae
- **Delete**: `AnwayPimpalkar_CV.pdf` - Previous owner's CV

## 📁 js/ - JavaScript Functionality

### Core Scripts
- **`data-loader.js`** - Loads and parses Excel/CSV data files
- **`news.js`** - Controls news page: loading, filtering, rendering
- **`publications.js`** - Controls projects page: loading, filtering, rendering
- **`footer.js`** - Loads the shared footer on all pages
- **`last-updated.js`** - Shows when page was last updated

### Interactive Features
- **`typing.js`** - Animated typing effect on homepage ("I build...")
- **`venn.js`** - Interactive Venn diagram for research areas

## 📁 news/ - News Page

### news/index.html
- **Purpose**: Displays chronological timeline of your news and updates
- **Data source**: `data/news.csv` or `data/news.xlsx`
- **Features**: Filterable by tags, sorted by date

## 📁 projects/ - Projects Page

### projects/index.html
- **Purpose**: Displays grid/list of your projects and publications
- **Data source**: `data/projects.csv` or `data/projects.xlsx`
- **Features**: Filterable by type and tags

## 📁 styles/ - Styling

### styles/style.css
- **Purpose**: All visual styling for the entire website
- **Contains**: 
  - Color scheme (`:root` variables)
  - Typography
  - Layout (responsive grid)
  - Component styles
  - Animations

## 🔄 How It All Works Together

### Page Load Flow

1. **Browser opens `index.html`**
2. **Loads CSS** from `styles/style.css`
3. **Loads JavaScript files**:
   - `typing.js` - Starts typing animation
   - `venn.js` - Initializes Venn diagram
   - `footer.js` - Loads footer from `footer.html`
   - `last-updated.js` - Adds timestamp

### Projects Page Flow

1. **Browser opens `projects/index.html`**
2. **Loads scripts**:
   - `data-loader.js` - Ready to load data
   - `publications.js` - Initiates loading
3. **Publications.js**:
   - Tries to load `data/projects.xlsx`
   - Falls back to `data/projects.csv` if needed
   - Parses data and renders projects
   - Sets up filter buttons

### News Page Flow

1. **Browser opens `news/index.html`**
2. **Loads scripts**:
   - `data-loader.js` - Ready to load data
   - `news.js` - Initiates loading
3. **News.js**:
   - Tries to load `data/news.xlsx`
   - Falls back to `data/news.csv` if needed
   - Parses data and renders timeline
   - Sets up filter buttons

## 🎨 Customization Guide

### Quick Changes
1. **Name**: Edit in each HTML file
2. **Bio**: Edit `index.html` around line 90
3. **Colors**: Edit `styles/style.css` `:root` section
4. **Typing words**: Edit `js/typing.js`
5. **Social links**: Edit `footer.html`

### Content Changes
1. **Add projects**: Create/edit `data/projects.csv`
2. **Add news**: Create/edit `data/news.csv`
3. **Add images**: Place in `assets/images/`
4. **Update CV**: Replace PDF in `documents/`

### Structural Changes
1. **Remove Venn diagram**: Delete section in `index.html` and remove `venn.js`
2. **Add new page**: Create new HTML file, copy structure from existing page
3. **Change layout**: Modify CSS in `styles/style.css`
4. **Add features**: Create new JS file and include in HTML

## 🚀 Deployment

### GitHub Pages
- All files in this repository are served as-is
- Changes pushed to GitHub are automatically deployed
- Custom domain configured via `CNAME` file
- Accessible at `https://yourusername.github.io`

### Local Development
- No build process required
- Simply open `index.html` in browser
- Use a local server for best results:
  ```bash
  python -m http.server 8000
  # or
  npx http-server
  ```

## 📊 Data File Formats

### CSV Format (Recommended for simplicity)
- Plain text, comma-separated values
- Easy to edit in any text editor
- Supported by Excel, Google Sheets, Numbers

### Excel Format (.xlsx)
- Binary format
- Requires data-loader.js to parse
- Supports formatting (but formatting is ignored)

Both formats work identically - choose what's easier for you!

## 🔧 Troubleshooting

### Projects/News not showing?
**Check**: Do `data/projects.csv` and `data/news.csv` exist?
**Fix**: Create these files using the templates provided

### Images not loading?
**Check**: Are paths correct in your CSV files?
**Fix**: Use paths like `assets/images/publications/image.jpg`

### Styling broken?
**Check**: Browser console (F12) for errors
**Fix**: Verify `styles/style.css` loaded and has no syntax errors

### Links not working?
**Check**: Are URLs complete (starting with http:// or https://)?
**Fix**: Add protocol to all external links

## 📚 Learn More

- **HTML/CSS**: [MDN Web Docs](https://developer.mozilla.org/en-US/)
- **JavaScript**: [JavaScript.info](https://javascript.info/)
- **GitHub Pages**: [GitHub Pages Docs](https://docs.github.com/en/pages)
- **Web Accessibility**: [Web Accessibility Initiative](https://www.w3.org/WAI/)

## 💡 Tips

1. **Keep it simple**: Don't overcomplicate - less is more
2. **Update regularly**: Add new content as you accomplish things
3. **Test often**: Check on different devices and browsers
4. **Get feedback**: Ask colleagues to review before launching
5. **Backup data**: Keep copies of your CSV/Excel files
6. **Version control**: Use Git to track changes over time

---

**Need help?** Review the `SETUP_GUIDE.md` or `CHECKLIST.md` files!

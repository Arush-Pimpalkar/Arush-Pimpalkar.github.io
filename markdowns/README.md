# 🎨 Personal Portfolio Template

> **✨ This repository has been converted into a clean, ready-to-use portfolio template!**

A modern, responsive personal portfolio website with project showcase, news timeline, and interactive visualizations. Perfect for researchers, engineers, developers, and professionals.

## 🚀 Quick Start (Choose Your Path)

### 👉 New to this? Start here:
1. **Read** [`START_HERE.md`](START_HERE.md) - Overview of what's been done
2. **Follow** [`SETUP_GUIDE.md`](SETUP_GUIDE.md) - Step-by-step instructions (~1 hour)
3. **Track** [`CHECKLIST.md`](CHECKLIST.md) - Mark off items as you complete them

### 👨‍💻 Just want to customize?
1. **Edit** [`HOMEPAGE_GUIDE.md`](HOMEPAGE_GUIDE.md) - Section-by-section homepage editing guide
2. **Create** your data files using `data/news_template.csv` and `data/projects_template.csv`
3. **Replace** images in `assets/profile/` and update social links in `footer.html`

### 🔧 Want to understand everything?
1. **Study** [`FILE_STRUCTURE.md`](FILE_STRUCTURE.md) - Detailed explanation of every file
2. **Review** [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md) - Solutions to common issues

## ✨ Features

- 📱 **Fully responsive** - Works on desktop, tablet, and mobile
- 🎨 **Interactive Venn diagram** - Showcase three research areas (optional)
- 📰 **Dynamic news timeline** - Loaded from Excel/CSV
- 🚀 **Filterable project gallery** - Sort by type and tags
- ⚡ **Fast and lightweight** - No build process required
- ♿ **Accessible design** - ARIA labels and semantic HTML
- 🎯 **Easy customization** - CSV files for content, CSS variables for colors
- 📊 **Excel or CSV** - Use whichever format you prefer

## 📋 What You Need to Do

### Must Edit (30 minutes)
- [ ] Replace "Your Name" in all HTML files
- [ ] Write your bio in `index.html`
- [ ] Update social links in `footer.html`
- [ ] Change `CNAME` to your domain

### Must Create (30 minutes)
- [ ] Add your photo: `assets/profile/profile-photo.jpg`
- [ ] Add your CV: `documents/Your_Name_CV.pdf`
- [ ] Create: `data/news.csv` with your news
- [ ] Create: `data/projects.csv` with your projects

### Should Delete (5 minutes)
- [ ] `assets/anway/` folder (old personal files)
- [ ] `data/news.xlsx` and `data/projects.xlsx` (old data)
- [ ] `documents/AnwayPimpalkar_CV.pdf` (old CV)

See [`CHECKLIST.md`](CHECKLIST.md) for the complete list!

## 📁 Quick Reference

### Key Files & Folders

| File/Folder | Description |
|-------------|-------------|
| `index.html` | Main homepage - edit bio, name, greeting |
| `news/index.html` | News timeline page |
| `projects/index.html` | Projects gallery page |
| `footer.html` | Shared footer - update social links here |
| `data/` | CSV/Excel files with your content |
| `assets/profile/` | Your profile photo goes here |
| `assets/images/` | Project and news images |
| `documents/` | Your CV/resume PDF |
| `js/` | JavaScript for functionality |
| `styles/style.css` | All styling and colors |

## 📖 Documentation Files

> **📚 See [`DOCUMENTATION_INDEX.md`](DOCUMENTATION_INDEX.md) for complete guide to all docs**

| Document | Purpose | Read When |
|----------|---------|-----------|
| [`START_HERE.md`](START_HERE.md) | Overview & next steps | **First!** |
| [`SETUP_GUIDE.md`](SETUP_GUIDE.md) | Step-by-step setup | During setup |
| [`HOMEPAGE_GUIDE.md`](HOMEPAGE_GUIDE.md) | Edit homepage section-by-section | Customizing bio |
| [`CHECKLIST.md`](CHECKLIST.md) | Track your progress | Throughout |
| [`FILE_STRUCTURE.md`](FILE_STRUCTURE.md) | What each file does | When confused |
| [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md) | Fix common problems | When stuck |
| [`QUICK_REFERENCE.md`](QUICK_REFERENCE.md) | One-page cheat sheet | Keep handy |
| [`VISUAL_GUIDE.md`](VISUAL_GUIDE.md) | Flowcharts & diagrams | Visual learners |
| [`data/NEWS_INSTRUCTIONS.md`](data/NEWS_INSTRUCTIONS.md) | How to format news data | Adding news |
| [`data/PROJECTS_INSTRUCTIONS.md`](data/PROJECTS_INSTRUCTIONS.md) | How to format project data | Adding projects |

## 🎯 Common Tasks

### Add a news item
1. Open `data/news.csv`
2. Add a new line: `2024,Oct,,My Achievement,Description here,,award,`
3. Save and refresh your browser

### Add a project
1. Open `data/projects.csv`  
2. Add a new line with your project details
3. Add project image to `assets/images/publications/`
4. Save and refresh

### Change colors
1. Open `styles/style.css`
2. Find the `:root {` section (around line 40)
3. Change color values
4. Save and refresh

### Update your bio
1. Open `index.html`
2. Find `<div class="about_text">` (around line 99)
3. Replace placeholder text with your bio
4. Save and refresh

See [`HOMEPAGE_GUIDE.md`](HOMEPAGE_GUIDE.md) for detailed instructions!

## 🎨 Example Output

### Homepage
- Clean hero section with animated greeting
- Professional bio with photo
- Interactive research visualization (optional)
- Responsive navigation

### Projects Page
- Grid/list of all your projects
- Filter by type (Publication, Project, Preprint, etc.)
- Filter by tags
- Links to papers, code, videos

### News Page
- Timeline of achievements
- Organized by year and month
- Filter by tags (awards, publications, talks, etc.)
- Optional images

## ⚙️ Technical Details

### No Build Process Required
- Pure HTML, CSS, and JavaScript
- No npm, webpack, or other tools needed
- Just edit files and push to GitHub

### Data Loading
- Supports both Excel (.xlsx) and CSV formats
- JavaScript automatically parses and displays data
- No server-side processing required

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interactions

### Performance
- Lightweight (~50KB total JS)
- Lazy loading for images
- Fast page loads

## 🌍 Deployment

### GitHub Pages (Recommended)
1. Repository name: `yourusername.github.io`
2. Push your changes to main branch
3. Enable Pages in Settings
4. Site live at `https://yourusername.github.io`

### Custom Domain
1. Add domain to `CNAME` file
2. Configure DNS at your registrar
3. Enable HTTPS in GitHub settings

See [`SETUP_GUIDE.md`](SETUP_GUIDE.md) for detailed deployment instructions.

## 🤝 Contributing

This is a template repository. Feel free to:
- Fork and customize for your own use
- Share with others who need a portfolio
- Submit issues if you find bugs
- Suggest improvements

## ⭐ Show Your Support

If this template helped you:
- Star this repository
- Share it with others
- Credit the template (optional)
- Show off your portfolio!

## 📞 Getting Help

1. Check [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md) for common issues
2. Review the relevant documentation file
3. Search existing GitHub issues
4. Open a new issue with details

## 🎓 Learning Resources

- **HTML/CSS Basics**: [MDN Web Docs](https://developer.mozilla.org/)
- **JavaScript**: [JavaScript.info](https://javascript.info/)
- **GitHub Pages**: [GitHub Pages Docs](https://docs.github.com/en/pages)
- **CSV Format**: [CSV Guide](https://en.wikipedia.org/wiki/Comma-separated_values)

## 📜 License

Free to use for personal portfolios. No attribution required but appreciated!

## ✨ Credits

Template created by converting a personal portfolio into a reusable format. Design inspired by modern academic and professional portfolio websites.

---

## 🚀 Ready to Start?

**👉 Open [`START_HERE.md`](START_HERE.md) to begin!**

Questions? Check the documentation files above or open an issue.

**Good luck with your portfolio! 🎉**

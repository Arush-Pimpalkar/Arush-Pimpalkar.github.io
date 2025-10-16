# Quick Setup Guide

Follow these steps to personalize your portfolio website.

## Step 1: Personal Information (5 minutes)

### Update index.html
1. Open `index.html`
2. Replace "Your Name" with your actual name (appears in ~10 places)
3. Update the bio section starting at line ~90
4. Update email address in the contact section
5. Change profile image path from `assets/profile/profile-photo.jpg` to your image

### Update Navigation
In all HTML files, replace navigation text:
- `index.html` line ~83
- `news/index.html` line ~53
- `projects/index.html` line ~53

### Update Meta Tags
In each HTML file's `<head>` section:
- Change all instances of "Your Name" to your name
- Update "yourdomain.com" to your actual domain
- Update descriptions to match your work

## Step 2: Add Your Content (10 minutes)

### Profile Photo
1. Add your photo to `assets/profile/profile-photo.jpg`
2. Recommended size: 400x400 pixels or larger
3. Format: JPG or PNG

### CV/Resume
1. Add your CV to `documents/Your_Name_CV.pdf`
2. Update the link in `index.html` around line ~147

### Research Areas (Optional)
If using the Venn diagram in `index.html` (around line ~160):
1. Update the three circle titles and descriptions
2. Update the center description explaining how they intersect
3. Or delete the entire `.research_venn` section if not needed

## Step 3: Add Your Projects (15 minutes)

### Create Projects Data File
1. Open `data/PROJECTS_INSTRUCTIONS.md` for format details
2. Create `data/projects.csv` or `data/projects.xlsx`
3. Add your projects with columns:
   - title, authors, year, venue, description
   - link, image, type, tags
4. Place project images in `assets/images/publications/`

### Example projects.csv:
```csv
title,authors,year,venue,description,link,image,type,tags
My Awesome Project,Your Name,2024,Conference Name,Brief description here,https://link.com,assets/images/publications/project1.jpg,Publication,"tag1, tag2"
```

## Step 4: Add News Updates (10 minutes)

### Create News Data File
1. Open `data/NEWS_INSTRUCTIONS.md` for format details
2. Create `data/news.csv` or `data/news.xlsx`
3. Add news items with columns:
   - year, month, title, description
   - link (optional), image (optional), tags
4. Place news images in `assets/images/news/`

### Example news.csv:
```csv
year,month,title,description,link,tags,image
2024,Oct,New Position,Started new role at Company,https://company.com,career,
```

## Step 5: Social Links (5 minutes)

### Update footer.html
1. Open `footer.html`
2. Update all social media URLs (lines ~4-30):
   - LinkedIn
   - Google Scholar
   - GitHub
   - Add/remove other platforms as needed

## Step 6: Styling (Optional, 10 minutes)

### Update colors in styles/style.css
Find the `:root` section and change color variables:
```css
:root {
  --light-grey: #d9d9d9;    /* Light backgrounds */
  --medium-grey: #727272;   /* Secondary text */
  --dark-grey: #282828;     /* Main text */
  --harvard: #a51c30;       /* Primary accent */
  --hopkins: #002d72;       /* Secondary accent */
  --coep: #562f86;         /* Tertiary accent */
}
```

Rename the color variables if desired (e.g., change `--harvard` to `--primary`).

## Step 7: Domain Setup (5 minutes)

### Update CNAME file
1. Open `CNAME`
2. Replace `yourdomain.com` with your actual domain
3. Or delete this file if using GitHub's default domain

### Configure DNS (if using custom domain)
1. Go to your domain registrar
2. Add a CNAME record pointing to `yourusername.github.io`
3. Or add A records pointing to GitHub Pages IPs:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

## Step 8: Customize Typing Animation (2 minutes)

### Update js/typing.js
1. Open `js/typing.js`
2. Find line ~7: `const words = [...]`
3. Replace with your own phrases:
```javascript
const words = ["your work.", "your passion.", "your expertise."];
```

## Step 9: Clean Up (5 minutes)

### Remove Personal Assets
Delete or replace existing personal images:
```bash
rm -rf assets/anway/
rm -rf assets/images/news/*
rm -rf assets/images/publications/*
rm documents/AnwayPimpalkar_CV.pdf
```

Create your folders:
```bash
mkdir -p assets/profile
mkdir -p assets/images/news
mkdir -p assets/images/publications
```

### Remove Old Data Files
```bash
rm data/news.xlsx
rm data/projects.xlsx
```

## Step 10: Test Your Site (5 minutes)

### Local Testing
1. Open `index.html` in a web browser
2. Check all pages: Home, Projects, News
3. Verify all links work
4. Test responsive design (resize browser)

### GitHub Pages
1. Commit all changes to your repository
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Visit your site at `https://yourusername.github.io`

## Common Issues

### News/Projects not showing?
- Check that `data/news.csv` or `data/projects.csv` exists
- Verify CSV format matches the examples
- Check browser console for errors (F12)

### Images not loading?
- Verify image paths are correct
- Check that images exist in the specified folders
- Use relative paths starting with `assets/`

### Styling looks broken?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that `styles/style.css` loaded correctly
- Verify no CSS syntax errors

### Custom domain not working?
- Wait 24-48 hours for DNS propagation
- Verify CNAME file has correct domain
- Check DNS settings at your registrar
- Ensure GitHub Pages is enabled

## Optional Enhancements

### Remove Venn Diagram
If you don't need the research visualization:
1. Delete the `.research_venn` div in `index.html`
2. Remove `<script src="/js/venn.js">` from `index.html`

### Add Google Analytics
Add to `<head>` of each HTML file:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Add More Pages
1. Create new HTML file (e.g., `blog.html`)
2. Copy structure from existing pages
3. Add navigation link to all pages
4. Create corresponding folder for clean URLs

## Need Help?

- Check the README.md for detailed documentation
- Review instruction files in `data/` folder
- Look at example data format in CSV files
- Inspect browser console for error messages

---

**Total Setup Time: ~1 hour**

Take your time and test after each step. Good luck with your portfolio! 🚀

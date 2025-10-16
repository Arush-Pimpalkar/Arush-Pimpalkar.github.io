# Troubleshooting Guide

Common issues and how to fix them.

## 🚫 Content Not Showing

### Projects page is empty
**Symptoms**: `/projects/` page loads but shows no projects

**Possible causes**:
1. No data file exists
2. Data file format is incorrect
3. JavaScript error preventing load

**Solutions**:
```bash
# Check if file exists
ls data/projects.csv
# or
ls data/projects.xlsx

# If missing, create from template
cp data/projects_template.csv data/projects.csv
```

**Check format**: Make sure first line has these exact headers:
```
title,authors,year,venue,description,link,pdf,code,video,image,type,tags,featured
```

**Check console**: Open browser DevTools (F12), look for red errors

---

### News page is empty
**Symptoms**: `/news/` page loads but shows no news items

**Solutions**:
```bash
# Check if file exists
ls data/news.csv

# If missing, create from template
cp data/news_template.csv data/news.csv
```

**Check format**: First line should have:
```
year,month,date,title,description,link,tags,image
```

---

## 🖼️ Images Not Loading

### Profile photo not showing
**Check**:
1. File exists at `assets/profile/profile-photo.jpg`
2. Path in `index.html` is correct
3. File name matches exactly (case-sensitive!)

**Fix**:
```bash
# Check file exists
ls assets/profile/

# Add your photo
cp ~/path/to/your/photo.jpg assets/profile/profile-photo.jpg
```

---

### Project/News images broken
**Symptoms**: Gray boxes or broken image icons

**Common mistakes**:
- Wrong path in CSV (use relative paths: `assets/images/...`)
- File doesn't exist
- Wrong file extension (`.jpg` vs `.JPG`)
- Space in filename

**Fix**:
1. Check path in CSV file matches actual file location
2. Use lowercase extensions: `.jpg`, `.png`
3. No spaces in filenames: use `my-image.jpg` not `my image.jpg`

---

## 💻 GitHub Pages Issues

### Site not loading at all
**Check**:
1. Is GitHub Pages enabled?
   - Go to repository Settings → Pages
   - Source should be set to main/master branch
2. Wait 2-3 minutes after pushing changes
3. Clear browser cache (Ctrl+Shift+R)

---

### Custom domain not working
**Symptoms**: `yourdomain.com` doesn't load but `username.github.io` does

**Fix DNS settings** at your domain registrar:

For apex domain (`yourdomain.com`):
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A  
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

For www subdomain:
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

**Wait**: DNS changes can take 24-48 hours

**Verify CNAME file**: Should contain only your domain:
```
yourdomain.com
```

---

### Getting 404 errors
**Possible causes**:
1. Repository name doesn't match `username.github.io` format
2. Pages not enabled
3. Files in wrong location

**Fix**: Repository must be named exactly: `yourusername.github.io`

---

## 🎨 Styling Problems

### Page looks broken
**Symptoms**: No colors, everything is plain text, bad layout

**Cause**: CSS file not loading

**Check**:
1. File exists at `styles/style.css`
2. Link in HTML is correct:
   ```html
   <link rel="stylesheet" href="/styles/style.css" />
   ```
3. No CSS syntax errors

**Test locally**:
```bash
# Start simple web server
python -m http.server 8000
# Then visit: http://localhost:8000
```

---

### Colors are wrong
**Fix**: Edit `styles/style.css` around line 40:
```css
:root {
  --light-grey: #d9d9d9;
  --medium-grey: #727272;
  --dark-grey: #282828;
  /* Change these values */
}
```

**Color picker**: Use https://colorhunt.co/ or https://coolors.co/

---

### Mobile layout broken
**Usually**: Works automatically

**If not**: 
1. Check viewport meta tag in `<head>`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```
2. Test in browser DevTools (F12) → Device toolbar

---

## 🔧 JavaScript Errors

### Typing animation not working
**Symptoms**: Text says "awesome things." and doesn't change

**Check**:
1. `js/typing.js` file exists
2. Script tag in `index.html` is present:
   ```html
   <script src="/js/typing.js" defer></script>
   ```
3. Element with id="typing-text" exists

**Debug**: Open console (F12), look for errors

---

### Venn diagram not interactive
**Check**:
1. `js/venn.js` file exists
2. Script tag present in HTML
3. Elements have correct class names

**Simple fix**: If you don't need it, just delete it!

---

### Filters not working on Projects/News page
**Check console** for errors:
1. Press F12
2. Click Console tab
3. Reload page
4. Look for red error messages

**Common causes**:
- Data file malformed (missing quotes around commas)
- Missing column in CSV
- JavaScript syntax error

---

## 📝 CSV/Excel Format Issues

### Error: "Unable to load projects"
**Cause**: Data file has formatting errors

**Check**:
1. All rows have same number of columns
2. Text with commas is in quotes: `"Title, with comma"`
3. No extra blank lines at end
4. File is saved as UTF-8

**Test your CSV**: Use https://csvlint.io/

**Excel alternative**: Save as `.xlsx` instead

---

### Some entries missing
**Cause**: Empty cells breaking parser

**Fix**: Fill in all required fields
- Projects: title, authors, year, venue, description
- News: year, month, title, description

**Optional fields** can be empty but column must exist

---

### Special characters look wrong
**Symptoms**: Strange symbols like "â€™" instead of apostrophes

**Cause**: Wrong encoding

**Fix**: Save file as UTF-8:
- **Excel**: File → Save As → More options → Tools → Web Options → Encoding → UTF-8
- **VS Code**: Click encoding in bottom bar → Save with Encoding → UTF-8
- **Notepad**: Save As → Encoding → UTF-8

---

## 🌐 Browser-Specific Issues

### Works in Chrome but not Safari/Firefox
**Likely**: Using browser-specific features

**Fix**: Test in all major browsers:
- Chrome
- Firefox  
- Safari
- Edge

**Use standard features**: The template uses only standard web features

---

### Console shows CORS errors
**Symptoms**: "Access to fetch at 'file://...' from origin 'null' has been blocked"

**Cause**: Opening `index.html` directly in browser

**Fix**: Use a local web server:
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# VS Code
# Install "Live Server" extension
# Right-click index.html → Open with Live Server
```

---

## 📱 Mobile Testing

### How to test on mobile without deploying
**Option 1**: Use browser DevTools
1. Press F12
2. Click device icon (toggle device toolbar)
3. Select phone model

**Option 2**: Test on real device
1. Get your computer's local IP: `ipconfig` or `ifconfig`
2. Start local server on port 8000
3. On phone, visit: `http://YOUR-IP:8000`

---

## 🔐 Security Warnings

### "Not secure" warning in browser
**Cause**: Using HTTP instead of HTTPS

**Fix**: 
1. Use GitHub Pages (automatic HTTPS)
2. Enable HTTPS in repository settings
3. Wait for SSL certificate to provision

---

## 🧹 Cleaning Up Errors

### Finding all placeholder text
**Use VS Code search**:
1. Press Ctrl+Shift+F (Cmd+Shift+F on Mac)
2. Search for:
   - "Your Name"
   - "yourdomain.com"
   - "yourname"
   - "[Your" (finds [Your Title], [Your Organization], etc.)

---

### Validating HTML
**Use validator**: https://validator.w3.org/

**Common errors**:
- Unclosed tags
- Duplicate IDs
- Missing alt text on images

---

## 🆘 Still Stuck?

### Check these resources:
1. **Browser Console**: F12 → Console tab for JavaScript errors
2. **Network Tab**: F12 → Network tab to see what's loading
3. **HTML Validator**: https://validator.w3.org/
4. **CSS Validator**: https://jigsaw.w3.org/css-validator/

### Debug checklist:
- [ ] Browser console shows no errors
- [ ] All files exist in correct locations
- [ ] CSV files have correct format
- [ ] Paths are relative (start with `assets/` not `/assets/`)
- [ ] Tested in multiple browsers
- [ ] Cleared browser cache
- [ ] Pushed latest changes to GitHub

### Nuclear option - Start fresh:
```bash
# Backup your content
cp data/news.csv ~/backup/
cp data/projects.csv ~/backup/

# Re-clone repository
cd ..
git clone https://github.com/yourusername/yourusername.github.io fresh-copy
cd fresh-copy

# Copy your content back
cp ~/backup/news.csv data/
cp ~/backup/projects.csv data/
```

---

## 📚 Additional Help

- **HTML/CSS**: https://developer.mozilla.org/
- **JavaScript**: https://javascript.info/
- **GitHub Pages**: https://docs.github.com/en/pages
- **CSV Format**: https://en.wikipedia.org/wiki/Comma-separated_values

---

**Remember**: When asking for help, include:
1. What you were trying to do
2. What you expected to happen  
3. What actually happened
4. Any error messages (screenshot of console)
5. Link to your repository

# 📝 Quick Reference Card

Keep this handy while setting up your portfolio!

## 🎯 5-Minute Overview

```
1. Read START_HERE.md
2. Edit index.html (name + bio)
3. Create data/news.csv
4. Create data/projects.csv
5. Add assets/profile/profile-photo.jpg
6. Update footer.html (social links)
7. Update CNAME (your domain)
8. Push to GitHub
```

## 📄 Must-Edit Files

| File | What to Change | Line(s) |
|------|----------------|---------|
| `index.html` | Your name in nav | ~83 |
| `index.html` | Greeting text | ~92 |
| `index.html` | Bio paragraphs | ~99-127 |
| `index.html` | Email address | ~141-147 |
| `index.html` | Profile photo path | ~136 |
| `index.html` | CV path | ~151 |
| `news/index.html` | Your name in nav | ~53 |
| `projects/index.html` | Your name in nav | ~53 |
| `footer.html` | All social URLs | ~4-30 |
| `js/typing.js` | Animation words | ~7 |
| `CNAME` | Your domain | entire file |

## 📊 CSV File Formats

### news.csv
```csv
year,month,date,title,description,link,tags,image
2024,Oct,,Title,Description,https://...,tag1 tag2,assets/...
```

### projects.csv  
```csv
title,authors,year,venue,description,link,pdf,code,video,image,type,tags,featured
My Project,Your Name,2024,Venue,Desc,url,pdf,code,vid,img,Publication,tags,yes
```

## 🎨 Common CSS Variables

In `styles/style.css` around line 40:

```css
:root {
  --light-grey: #d9d9d9;    /* Backgrounds */
  --medium-grey: #727272;   /* Secondary text */
  --dark-grey: #282828;     /* Main text */
  --harvard: #a51c30;       /* Accent 1 */
  --hopkins: #002d72;       /* Accent 2 */
  --coep: #562f86;          /* Accent 3 */
}
```

## 🔍 Search & Replace Terms

Use VS Code Find (Ctrl+Shift+F):

| Search For | Replace With |
|------------|--------------|
| `Your Name` | Your actual name |
| `yourdomain.com` | Your domain |
| `yourname@example.com` | Your email |
| `Your Organization` | Your company/university |
| `Your Title` | Your job title |

## 🖼️ Image Sizes

| Image Type | Recommended Size | Location |
|------------|------------------|----------|
| Profile photo | 400×400px+ | `assets/profile/` |
| News images | 800×600px | `assets/images/news/` |
| Project images | 1200×800px | `assets/images/publications/` |

## 🌐 Domain Setup

### GitHub Default
```
Just push to: username.github.io
Delete CNAME file
```

### Custom Domain
```
1. Update CNAME: yourdomain.com
2. Add DNS A records:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
3. Wait 24-48 hours
```

## 🐛 Quick Debugging

| Problem | Solution |
|---------|----------|
| Page blank | Check browser console (F12) |
| Images not loading | Verify paths start with `assets/` |
| Projects not showing | Create `data/projects.csv` |
| News not showing | Create `data/news.csv` |
| Styling broken | Check `styles/style.css` loaded |
| Local testing | Use `python -m http.server 8000` |

## ⌨️ Useful Commands

```bash
# Local web server
python -m http.server 8000

# Find all placeholder text
grep -r "Your Name" .

# Check if files exist
ls data/
ls assets/profile/

# Git workflow
git add .
git commit -m "Updated portfolio"
git push
```

## 📱 Testing Checklist

```
□ Desktop Chrome
□ Desktop Firefox
□ Desktop Safari
□ Mobile (responsive mode)
□ All links work
□ Images load
□ No console errors
□ Projects load
□ News loads
```

## 🔗 Quick Links

| Need | File |
|------|------|
| Overview | `START_HERE.md` |
| Step-by-step | `SETUP_GUIDE.md` |
| Homepage help | `HOMEPAGE_GUIDE.md` |
| Track progress | `CHECKLIST.md` |
| Understand files | `FILE_STRUCTURE.md` |
| Fix issues | `TROUBLESHOOTING.md` |
| News format | `data/NEWS_INSTRUCTIONS.md` |
| Projects format | `data/PROJECTS_INSTRUCTIONS.md` |
| Visual guide | `VISUAL_GUIDE.md` |

## 💡 Pro Tips

1. **Edit one file at a time** - Test after each change
2. **Use templates** - Copy from `*_template.csv` files
3. **Save often** - Commit to Git frequently
4. **Test locally first** - Before pushing to GitHub
5. **Keep backups** - Of your CSV files
6. **Clear cache** - Ctrl+Shift+R if changes not showing
7. **Mobile matters** - Always test responsive design

## 🚨 Emergency Fixes

### Site completely broken?
```
1. Revert last commit: git revert HEAD
2. Or restore from backup
3. Check TROUBLESHOOTING.md
```

### Can't find an error?
```
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for failed loads
4. Search error in TROUBLESHOOTING.md
```

### Need to start over?
```
1. Backup your CSVs: cp data/*.csv ~/backup/
2. Re-clone repository
3. Copy CSVs back
4. Start fresh with SETUP_GUIDE.md
```

## 📞 Getting Help

1. **First**: Check `TROUBLESHOOTING.md`
2. **Then**: Review relevant guide file
3. **Still stuck**: Check browser console
4. **Finally**: Open GitHub issue with:
   - What you were doing
   - What went wrong
   - Error messages
   - Browser/OS info

## ✅ Launch Day Checklist

```
□ All placeholders replaced
□ Bio written
□ Projects added
□ News added
□ Images uploaded
□ CV uploaded
□ Social links updated
□ Domain configured
□ Tested locally
□ Pushed to GitHub
□ GitHub Pages enabled
□ Site loads at URL
□ All pages work
□ Looks good on mobile
□ Shared with friends
□ Added to LinkedIn
```

## 🎯 Maintenance Schedule

### Monthly
- Add new publications/projects
- Add major news items

### Quarterly  
- Review and update bio
- Check all links still work
- Update project descriptions

### Annually
- Update CV
- Refresh profile photo (if needed)
- Review entire site content
- Consider design updates

---

**Print this page or keep it open in a tab while working! 📌**

**Start here**: [`START_HERE.md`](START_HERE.md)

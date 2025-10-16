# 📸 Lens Photography Gallery - Complete Setup

Your new photography gallery is ready! Here's everything you need to know.

---

## ✨ What You Have

A beautiful Instagram-style photo gallery with:

✅ **Responsive Grid Layout**
- 3 columns on desktop
- 2 columns on tablet  
- 1 column on mobile
- Auto-adjusts to screen size

✅ **Lightbox Viewer**
- Click any photo to view full-size
- Navigate with arrow keys or buttons
- Display metadata (location, date, camera)
- Press ESC to close

✅ **Category Filters**
- Auto-generated from your data
- Click to filter by category
- "All" button to show everything

✅ **Professional Design**
- Smooth hover effects
- Card-based layout
- Mobile-optimized
- Fast loading

---

## 🚀 Quick Start (5 Minutes)

### 1. Add Your Photos
Create folder and add images:
```
assets/images/lens/
├── photo1.jpg
├── photo2.jpg
└── photo3.jpg
```

### 2. Create Data File
**Option A:** Create `data/lens.xlsx` in Excel

| image | title | description | category | location | date | camera |
|-------|-------|-------------|----------|----------|------|--------|
| assets/images/lens/photo1.jpg | Sunset | Beautiful view | Nature | Mumbai | Oct 2024 | Canon |

**Option B:** Create `data/lens.csv` 

```csv
image,title,description,category,location,date,camera
assets/images/lens/photo1.jpg,Sunset,Beautiful view,Nature,Mumbai,Oct 2024,Canon
```

### 3. Done!
Visit `https://arush-pimpalkar.github.io/lens/` 🎉

---

## 📋 Data Column Reference

### Required
- **image**: Path to photo
  - Example: `assets/images/lens/sunset.jpg`
  - Must point to actual file in lens folder

### Optional (Recommended)
- **title**: Photo name
  - Example: `Golden Hour at Marine Drive`
  - Shows on card and in lightbox

- **description**: Short story (1-2 sentences)
  - Example: `Captured during my evening walk along the coast`
  - Shows on card and in lightbox

- **category**: Tags for filtering (use `;` for multiple)
  - Example: `Travel; Landscape; Nature`
  - Creates filter buttons automatically
  - Common categories: Travel, Nature, Portrait, Street, Urban, Landscape, Macro, Night

- **location**: Where photo was taken
  - Example: `Mumbai, India` or `Himalayas`
  - Shows with location icon

- **date**: When photo was taken
  - Example: `October 2024` or `2024-10-15`
  - Any format works
  - Shows with calendar icon

- **camera**: Equipment used
  - Example: `Canon EOS R5` or `iPhone 14 Pro`
  - Shows in lightbox only

---

## 📂 File Structure

```
your-website/
├── lens/
│   └── index.html          (main gallery page)
├── assets/images/lens/      (your photos go here)
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── README.md
├── data/
│   ├── lens.xlsx           (your photo data - Excel)
│   ├── lens.csv            (or CSV format)
│   ├── lens_template.csv   (example template)
│   └── LENS_INSTRUCTIONS.md (full documentation)
├── js/
│   └── lens.js             (gallery functionality)
├── styles/
│   └── style.css           (includes lens styles)
├── lens.html               (redirect page)
├── LENS_SETUP.md          (this file)
└── header.html             (includes Lens nav link)
```

---

## 🎯 Example Setup

### Example 1: Simple Gallery

**data/lens.csv:**
```csv
image,title,category
assets/images/lens/photo1.jpg,Mountain Peak,Nature
assets/images/lens/photo2.jpg,City Lights,Urban
assets/images/lens/photo3.jpg,Portrait,People
```

Result: Clean gallery with titles and filters

### Example 2: Detailed Gallery

**data/lens.xlsx:**
| image | title | description | category | location | date | camera |
|-------|-------|-------------|----------|----------|------|--------|
| assets/images/lens/trek.jpg | Himalayan Trek | Dawn at basecamp | Travel; Nature | Himalayas | Oct 2024 | Canon R5 |
| assets/images/lens/street.jpg | Mumbai Vibes | Street life | Street; Urban | Mumbai | Sep 2024 | Sony A7III |
| assets/images/lens/coast.jpg | Coastal Sunset | Golden hour | Landscape | Goa | Aug 2024 | iPhone 14 |

Result: Rich gallery with full metadata and multiple filters

---

## 🎨 Features In Detail

### Grid Layout
- **Auto-fit**: Cards adjust to available space
- **Consistent sizing**: All cards same height in rows
- **Hover effects**: Cards lift up, images zoom slightly
- **Responsive**: Works on all devices

### Lightbox
- **Click to open**: Click any photo
- **Navigation**: 
  - Arrow buttons (left/right)
  - Keyboard arrows
  - ESC to close
- **Metadata display**: Shows all details
- **Dark overlay**: Focus on photo

### Filters
- **Auto-generated**: From your categories
- **Multiple tags**: One photo can have many categories
- **Active state**: Selected filter highlighted
- **"All" button**: Reset to show everything

---

## 💡 Pro Tips

### 1. Image Optimization
```
Recommended specs:
- Width: 1200-2000px
- Format: JPG (smaller file size)
- Quality: 80-85% 
- File size: < 500KB each
```

Tools:
- [TinyPNG](https://tinypng.com/) - Online compression
- [ImageOptim](https://imageoptim.com/) - Mac app
- [Squoosh](https://squoosh.app/) - Google's tool

### 2. Square Crops
For best grid appearance:
- Crop photos to 1:1 ratio (square)
- Or use 4:5 ratio (Instagram portrait)
- Avoid very tall/wide photos

### 3. Category Strategy
Create meaningful categories:
- **Too few**: Not useful for filtering
- **Too many**: Cluttered filter bar
- **Sweet spot**: 4-8 main categories

Good categories:
```
Travel, Nature, Portrait, Street, Urban, Landscape, Macro, Night, Food, Architecture
```

### 4. Batch Processing
If adding many photos:
1. Rename all at once (use bulk rename tool)
2. Create CSV with formulas in Excel
3. Optimize all images in batch

### 5. Progressive Loading
For large galleries (50+ photos):
- Optimize images heavily
- Consider lazy loading (already built-in)
- Keep each image under 300KB

---

## 🛠️ Customization

### Change Grid Size

Edit `styles/style.css`:

```css
.lens_grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* Change 300px to: */
  /* 250px = smaller cards, more per row */
  /* 400px = larger cards, fewer per row */
}
```

### Change Card Aspect Ratio

```css
.lens_card_image {
  aspect-ratio: 1;  /* Square */
  /* Change to: */
  /* 4/5 = Instagram portrait */
  /* 16/9 = Widescreen */
}
```

### Change Hover Effect

```css
.lens_card:hover {
  transform: translateY(-4px);  /* Lift amount */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);  /* Shadow */
}
```

### Change Colors

Uses your site's existing color variables:
- `--harvard`: Accent color (filters, hovers)
- `--dark-grey`: Text
- `--medium-grey`: Secondary text
- `--light-grey`: Borders

---

## 📱 Mobile Experience

Automatically optimized for mobile:
- ✅ Single column layout
- ✅ Touch-friendly buttons
- ✅ Optimized image loading
- ✅ Full-screen lightbox
- ✅ Swipe gestures support

---

## 🔄 Workflow Examples

### Weekly Photo Upload
1. Take photos during week
2. Edit/optimize photos
3. Name consistently: `2024-10-15-location-subject.jpg`
4. Add to `assets/images/lens/`
5. Add new row to Excel/CSV
6. Push to GitHub - Done!

### Event Coverage
1. Create event folder: `assets/images/lens/event-name/`
2. Add all event photos
3. Use same category: `Events; Event-Name`
4. Add date and location to all
5. Creates automatic event album

### Travel Series
```csv
image,title,description,category,location,date
assets/images/lens/trip1.jpg,Day 1,Arrival,Travel; Trip Name,City,Oct 1
assets/images/lens/trip2.jpg,Day 2,Exploring,Travel; Trip Name,City,Oct 2
assets/images/lens/trip3.jpg,Day 3,Highlight,Travel; Trip Name,City,Oct 3
```

---

## 🆘 Troubleshooting

### Photos Not Showing?
**Check:**
- [ ] Image files exist in `assets/images/lens/`
- [ ] Paths in data match actual file names (case-sensitive!)
- [ ] Image file extensions correct (.jpg, .jpeg, .png)
- [ ] No typos in file paths

**Fix:**
```csv
Wrong: Assets/Images/Lens/Photo.JPG
Right: assets/images/lens/photo.jpg
```

### Filters Not Appearing?
**Check:**
- [ ] `category` column exists in your data
- [ ] At least one photo has a category

**Fix:**
Add categories to your CSV/Excel

### Lightbox Not Working?
**Check:**
- [ ] JavaScript loaded (check browser console)
- [ ] No JavaScript errors

**Fix:**
- Clear browser cache
- Try incognito mode
- Check console for errors (F12)

### Images Loading Slow?
**Check:**
- [ ] File sizes (should be < 500KB each)
- [ ] Image dimensions (should be 1200-2000px)

**Fix:**
- Optimize images with TinyPNG
- Reduce dimensions to 1500px max width
- Convert PNG to JPG if possible

---

## 📚 Additional Resources

Created files for you:
- **LENS_SETUP.md** (this file) - Complete setup guide
- **data/LENS_INSTRUCTIONS.md** - Detailed data format guide  
- **data/lens_template.csv** - Example data template
- **assets/images/lens/README.md** - Photo folder guidelines

---

## ✅ Quick Checklist

Before launch:
- [ ] Create `assets/images/lens/` folder
- [ ] Add your photos to folder
- [ ] Create `data/lens.xlsx` or `data/lens.csv`
- [ ] Fill in at least image paths and titles
- [ ] Test on local/preview
- [ ] Optimize images if needed
- [ ] Add categories for filters
- [ ] Test lightbox navigation
- [ ] Check mobile view
- [ ] Push to GitHub

---

## 🎉 You're Ready!

Your Lens gallery is fully set up and ready to showcase your photography!

**Navigation**: Your site now has a "Lens" link in the header that takes visitors to your gallery.

**URL**: `https://arush-pimpalkar.github.io/lens/`

**Workflow**: Just add photos to the folder and update your Excel/CSV file. That's it!

---

**Happy sharing your photography! 📸**

For questions or issues, refer to the documentation files or check the code comments.

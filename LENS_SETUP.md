# 📸 Lens Gallery - Quick Setup Guide

## What You Get

A beautiful Instagram-style photo gallery with:
- ✅ Responsive grid layout (like Instagram)
- ✅ Click to view full-size in lightbox
- ✅ Category filters (Travel, Nature, Portrait, etc.)
- ✅ Photo metadata (location, date, camera)
- ✅ Keyboard navigation (arrow keys, ESC)
- ✅ Mobile-friendly design

## 🚀 5-Minute Setup

### Step 1: Create Photo Folder
```
assets/images/lens/
```

### Step 2: Add Your Photos
Put your photos in the `assets/images/lens/` folder.
- Recommended: 1200-2000px wide
- Square format (1:1) looks best in grid
- JPG or PNG format

### Step 3: Create Your Data File

**Option A: Excel** (`data/lens.xlsx`)
Create an Excel file with these columns:
| image | title | description | category | location | date | camera |
|-------|-------|-------------|----------|----------|------|--------|

**Option B: CSV** (`data/lens.csv`)
```csv
image,title,description,category,location,date,camera
assets/images/lens/photo1.jpg,Sunset View,Beautiful golden hour,Nature; Landscape,Mumbai,Oct 2024,Canon
```

### Step 4: Fill In Your Photos

**Required:**
- `image`: Path to photo (e.g., `assets/images/lens/sunset.jpg`)

**Optional:**
- `title`: Name of the photo
- `description`: Short story (1-2 sentences)
- `category`: Tags (use `;` for multiple: "Travel; Nature")
- `location`: Where it was taken
- `date`: When it was taken
- `camera`: Equipment used

### Step 5: Done! 🎉

Visit `/lens/` on your site to see your gallery!

## 📊 Example Data

```csv
image,title,description,category,location,date,camera
assets/images/lens/mountain.jpg,Himalayan Dawn,First light on snow peaks,Nature; Landscape,Himalayas,Oct 2024,Canon EOS R5
assets/images/lens/street.jpg,Mumbai Streets,Colorful street life,Street; Urban,Mumbai,Sep 2024,iPhone 14
assets/images/lens/portrait.jpg,Golden Hour,Natural light portrait,Portrait,Studio,Aug 2024,Sony A7III
```

## 🎨 Features Explained

### Instagram-like Grid
Photos display in a responsive grid:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

### Lightbox Viewer
Click any photo to:
- View full-size
- Navigate with arrow buttons or keyboard
- See full metadata
- Press ESC to close

### Category Filters
If you add categories, filter buttons appear automatically:
- "All" shows everything
- Click a category to filter
- Multiple categories per photo supported

### Hover Effects
- Cards lift up on hover
- Photos zoom slightly
- Smooth animations

## 🎯 Pro Tips

### 1. Use Categories Wisely
Good categories:
- Travel, Nature, Portrait, Street, Urban, Landscape, Macro, Night

### 2. Optimize Images
```bash
# Resize large images (use any tool)
# Target: 1200-2000px wide, under 500KB
```

### 3. Square Crops
Photos look best in square format (1:1) for the grid view.

### 4. Consistent Style
Keep similar editing style for a cohesive gallery.

## 📝 Adding More Photos

Just add a new row to your Excel/CSV file:

```csv
assets/images/lens/new-photo.jpg,New Title,Description,Category,Location,Date,Camera
```

Save and refresh - that's it!

## 🔧 Customization

### Change Grid Size
Edit `styles/style.css`:
```css
.lens_grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* Change 300px to 250px for smaller cards */
  /* Change to 400px for larger cards */
}
```

### Change Colors
The gallery uses your site's color scheme from CSS variables:
- `--harvard`: Accent color (used for filters, hover)
- `--dark-grey`: Text color
- `--light-grey`: Borders

## 📱 Mobile Experience

Everything works on mobile:
- Single column layout
- Touch-friendly lightbox
- Swipe to navigate (coming soon)
- Optimized loading

## 🆘 Troubleshooting

**Photos not showing?**
- Check image paths: `assets/images/lens/photo.jpg`
- Make sure photos exist in the folder
- Check file names match exactly (case-sensitive)

**Filters not appearing?**
- Add `category` column to your data
- Use consistent category names

**Lightbox not working?**
- Clear browser cache
- Check browser console for errors

## 📚 Full Instructions

See `data/LENS_INSTRUCTIONS.md` for complete documentation.

---

**Enjoy sharing your photography! 📸**

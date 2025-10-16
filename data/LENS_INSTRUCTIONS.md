# Lens Gallery Data Instructions

This file explains how to add photos to your Lens photography gallery.

## 📋 Column Structure

Your data file (Excel or CSV) should have these columns:

- **image**: Path to the photo (e.g., "assets/images/lens/photo1.jpg") - REQUIRED
- **title**: Title/name of the photo (optional but recommended)
- **description**: Description or story behind the photo (optional)
- **category**: Category/tag (e.g., "Travel", "Nature", "Portrait") - can have multiple separated by semicolons
- **location**: Where the photo was taken (e.g., "Paris, France")
- **date**: When the photo was taken (e.g., "October 2024", "2024-10-15")
- **camera**: Camera/equipment used (e.g., "Canon EOS R5", "iPhone 14 Pro")

## 📸 Example CSV Format

```csv
image,title,description,category,location,date,camera
assets/images/lens/sunset.jpg,Golden Hour,Beautiful sunset over the mountains,Nature; Landscape,Himalayas,October 2024,Canon EOS R5
assets/images/lens/street.jpg,City Life,Bustling street scene,Street; Travel,Mumbai,September 2024,Sony A7III
assets/images/lens/portrait.jpg,Candid Moment,Natural portrait in soft light,Portrait,Studio,August 2024,Nikon Z6
```

## 🎯 How It Works

1. **Instagram-like Grid**: Photos display in a responsive grid (3 columns on desktop, 1 on mobile)
2. **Lightbox View**: Click any photo to view full-size with navigation arrows
3. **Category Filters**: Automatically creates filter buttons for each category
4. **Metadata Display**: Shows location, date, and camera info on cards and in lightbox

## 📁 Where to Put Images

1. Create a folder: `assets/images/lens/`
2. Put your photos in this folder
3. Reference them in the data file: `assets/images/lens/your-photo.jpg`

## 💡 Tips

- **Image Size**: Optimize images for web (1200-2000px wide is good)
- **Square Format**: Photos look best in square format (1:1 ratio) for the grid
- **Categories**: Use semicolons to add multiple categories: "Travel; Landscape; Nature"
- **Descriptions**: Keep descriptions concise (1-2 sentences)
- **Dates**: Use any format you prefer (Month Year, DD/MM/YYYY, etc.)

## 🚀 Quick Start

1. Copy the example CSV above
2. Replace with your photo paths and details
3. Save as `data/lens.csv` or `data/lens.xlsx`
4. Put your photos in `assets/images/lens/`
5. Refresh your website!

## 🎨 Customization

To change the grid columns, edit the CSS in `styles/style.css`:

```css
.lens_grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* Change 300px to adjust card size */
}
```

## ✨ Features

- ✅ Responsive grid layout
- ✅ Click to open full-size lightbox
- ✅ Keyboard navigation (arrows, ESC)
- ✅ Category filtering
- ✅ Smooth animations
- ✅ Mobile-friendly

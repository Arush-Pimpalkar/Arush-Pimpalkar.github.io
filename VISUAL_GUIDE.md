# Visual Setup Flow

This diagram shows the complete setup process from start to finish.

```
┌─────────────────────────────────────────────────────────────────┐
│                     START: Portfolio Template                    │
│                    (Currently has placeholders)                  │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  1. READ DOCUMENTATION  │
                    │  • START_HERE.md        │
                    │  • SETUP_GUIDE.md       │
                    │  • HOMEPAGE_GUIDE.md    │
                    └─────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  2. UPDATE HTML FILES   │
                    │  • index.html           │
                    │  • news/index.html      │
                    │  • projects/index.html  │
                    │  • footer.html          │
                    └─────────────────────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          ▼                       ▼                       ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│ Replace Name    │   │ Update Bio      │   │ Social Links    │
│ everywhere      │   │ text            │   │ in footer       │
└─────────────────┘   └─────────────────┘   └─────────────────┘
          │                       │                       │
          └───────────────────────┴───────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  3. ADD YOUR CONTENT    │
                    └─────────────────────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          ▼                       ▼                       ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│ Create          │   │ Create          │   │ Add your        │
│ news.csv        │   │ projects.csv    │   │ images          │
│                 │   │                 │   │                 │
│ Use template    │   │ Use template    │   │ • Profile photo │
│ from            │   │ from            │   │ • Project pics  │
│ news_template   │   │ projects_       │   │ • News images   │
│                 │   │ template        │   │                 │
└─────────────────┘   └─────────────────┘   └─────────────────┘
          │                       │                       │
          └───────────────────────┴───────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  4. ADD ASSETS          │
                    └─────────────────────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          ▼                       ▼                       ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│ Profile Photo   │   │ Your CV/Resume  │   │ Project Images  │
│                 │   │                 │   │                 │
│ assets/profile/ │   │ documents/      │   │ assets/images/  │
│ profile-        │   │ Your_Name_      │   │ publications/   │
│ photo.jpg       │   │ CV.pdf          │   │ image.jpg       │
└─────────────────┘   └─────────────────┘   └─────────────────┘
          │                       │                       │
          └───────────────────────┴───────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  5. CUSTOMIZE (Optional)│
                    └─────────────────────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          ▼                       ▼                       ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│ Colors          │   │ Typing Words    │   │ Remove Venn     │
│ Edit            │   │ Edit            │   │ (if not needed) │
│ style.css       │   │ typing.js       │   │                 │
│ :root section   │   │ line 7          │   │ Delete section  │
└─────────────────┘   └─────────────────┘   └─────────────────┘
          │                       │                       │
          └───────────────────────┴───────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  6. CLEAN UP OLD FILES  │
                    └─────────────────────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          ▼                       ▼                       ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│ Delete          │   │ Delete          │   │ Delete          │
│ assets/anway/   │   │ data/           │   │ documents/      │
│ folder          │   │ news.xlsx       │   │ OldPerson_      │
│                 │   │ projects.xlsx   │   │ CV.pdf          │
└─────────────────┘   └─────────────────┘   └─────────────────┘
          │                       │                       │
          └───────────────────────┴───────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  7. TEST LOCALLY        │
                    │  • Open in browser      │
                    │  • Check all pages      │
                    │  • Test responsive      │
                    │  • Fix any issues       │
                    └─────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  8. CONFIGURE DOMAIN    │
                    │  • Update CNAME         │
                    │  • Or delete if using   │
                    │    GitHub default       │
                    └─────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  9. DEPLOY TO GITHUB    │
                    │  • git add .            │
                    │  • git commit -m "..."  │
                    │  • git push             │
                    └─────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  10. ENABLE PAGES       │
                    │  • Settings → Pages     │
                    │  • Select main branch   │
                    │  • Wait 2-3 minutes     │
                    └─────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SUCCESS! Your Portfolio is Live! 🎉           │
│                                                                  │
│  Visit: https://yourusername.github.io                          │
│  or:    https://yourdomain.com                                  │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │  ONGOING MAINTENANCE    │
                    │  • Add new projects     │
                    │  • Update news          │
                    │  • Refresh CV           │
                    │  • Update bio as needed │
                    └─────────────────────────┘
```

## Time Estimates

- **Steps 1-2**: 15 minutes (reading + HTML updates)
- **Step 3**: 20 minutes (creating CSV files)
- **Step 4**: 10 minutes (adding images)
- **Step 5**: 15 minutes (optional customization)
- **Steps 6-7**: 10 minutes (cleanup + testing)
- **Steps 8-10**: 10 minutes (domain + deployment)

**Total**: ~1 hour (or 45 minutes without customization)

## Parallel Tasks (To Save Time)

You can do these at the same time:

```
┌─────────────────────┐     ┌─────────────────────┐
│ Write your bio text │ AND │ Gather project info │
│ in a text editor    │     │ for CSV file        │
└─────────────────────┘     └─────────────────────┘
         │                            │
         └────────────┬───────────────┘
                      ▼
         Both ready to paste into files!


┌─────────────────────┐     ┌─────────────────────┐
│ Resize your profile │ AND │ Organize project    │
│ photo to 400x400    │     │ images              │
└─────────────────────┘     └─────────────────────┘
         │                            │
         └────────────┬───────────────┘
                      ▼
         All images ready to upload!
```

## Decision Points

### Do you need the Venn Diagram?
```
     ┌─────────────────────┐
     │ Venn Diagram?       │
     └─────────────────────┘
              │
     ┌────────┴────────┐
     │                 │
    YES                NO
     │                 │
     ▼                 ▼
Customize it      Delete it
3 circles         from HTML
descriptions      Quick & simple
```

### Excel or CSV?
```
     ┌─────────────────────┐
     │ Data File Format?   │
     └─────────────────────┘
              │
     ┌────────┴────────┐
     │                 │
   EXCEL              CSV
     │                 │
     ▼                 ▼
.xlsx file        .csv file
Familiar UI       Simple text
                  Git-friendly
                  
Both work identically!
Choose what's easier.
```

### Custom Domain?
```
     ┌─────────────────────┐
     │ Custom Domain?      │
     └─────────────────────┘
              │
     ┌────────┴────────┐
     │                 │
    YES                NO
     │                 │
     ▼                 ▼
Add to CNAME      Delete CNAME
Configure DNS     Use GitHub URL
yourdomain.com    username.github.io
```

## Troubleshooting Flow

```
        ┌─────────────────────┐
        │ Something broken?   │
        └─────────────────────┘
                  │
                  ▼
        ┌─────────────────────┐
        │ Check browser       │
        │ console (F12)       │
        └─────────────────────┘
                  │
         ┌────────┴────────┐
         │                 │
      Errors?              No errors?
         │                 │
         ▼                 ▼
   ┌──────────┐      ┌──────────┐
   │ Read     │      │ Check    │
   │ error    │      │ if files │
   │ message  │      │ exist    │
   └──────────┘      └──────────┘
         │                 │
         ▼                 ▼
   ┌──────────┐      ┌──────────┐
   │ Search   │      │ Verify   │
   │ TROUBLE- │      │ paths    │
   │ SHOOTING │      │ correct  │
   │ .md      │      └──────────┘
   └──────────┘            │
         │                 │
         └────────┬────────┘
                  ▼
        ┌─────────────────────┐
        │ Still stuck?        │
        │ Review              │
        │ TROUBLESHOOTING.md  │
        └─────────────────────┘
```

## Success Checklist

```
✅ Name updated everywhere
✅ Bio written and inserted
✅ Social links updated
✅ Profile photo added
✅ CV uploaded
✅ Projects CSV created
✅ News CSV created
✅ Images added
✅ Tested in browser
✅ No console errors
✅ Responsive on mobile
✅ Domain configured
✅ Pushed to GitHub
✅ Pages enabled
✅ Site is live!

🎉 DONE!
```

## Next Steps After Launch

```
Launch Day
    │
    ▼
Share on social media
    │
    ▼
Add to email signature
    │
    ▼
Update LinkedIn profile
    │
    ▼
Tell colleagues/friends
    │
    ▼
Monitor analytics (if added)
    │
    ▼
Regular updates:
• New publications → Update projects.csv
• Awards/news → Update news.csv
• Career changes → Update bio
• Annual CV refresh
```

---

**Visual learner?** This diagram shows the entire process. Follow it step by step!

**Prefer written instructions?** Check out [`SETUP_GUIDE.md`](SETUP_GUIDE.md)

**Ready to start?** Begin with [`START_HERE.md`](START_HERE.md)

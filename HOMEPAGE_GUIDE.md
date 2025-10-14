# Homepage Customization Guide

This guide shows you exactly where to edit each section of `index.html`.

## 🎯 Section-by-Section Guide

### 1. Header / Navigation (Lines ~82-88)
```html
<nav class="navbar" aria-label="Primary">
  <a class="nav_link" href="/" aria-current="page">Your Name</a>  ← CHANGE THIS
  <a class="nav_link" href="/projects/">Projects</a>
  <a class="nav_link" href="/news/">News</a>
</nav>
```
**What to change**: Replace "Your Name" with your first name or nickname

---

### 2. Hero Section / Greeting (Lines ~91-96)
```html
<div class="name_big">
  <span class="name_main">Hi, I'm Your Name.</span>  ← CHANGE THIS
  <span class="name_sub">I build
    <span class="typing" id="typing-text">awesome things.</span>  ← Animated by typing.js
  </span>
</div>
```

**What to change**: 
- Line 1: Your full name in greeting
- Line 2: Initial word (others come from `js/typing.js`)

**To customize animation**: Edit `js/typing.js` line 7
```javascript
const words = ["your thing.", "your passion.", "your work."];
```

---

### 3. About Section (Lines ~99-128)

#### Profile Photo (Lines ~135-140)
```html
<img
  class="about_photo"
  src="assets/profile/profile-photo.jpg"  ← CHANGE THIS PATH
  alt="Your Name"  ← CHANGE THIS
  loading="lazy"
/>
```
**What to change**: 
- Image path: Point to your photo
- Alt text: Your name

#### Email Display (Lines ~141-147)
```html
<span class="address">
  <span>yourname</span>           ← Your email username
  <span style="display: none">nospam</span>
  <span>&#64;</span>
  <span style="display: none">remove</span>
  <span>example</span>            ← Your email domain
  <span>.</span>
  <span>com</span>                ← Domain extension
</span>
```
**What to change**: Build your email in pieces (spam protection)

#### CV Link (Lines ~149-154)
```html
<a
  class="link cv"
  href="/documents/Your_Name_CV.pdf"  ← CHANGE THIS PATH
  target="_blank"
>
  Curriculum vitae
</a>
```
**What to change**: Path to your CV/resume PDF

#### Bio Text (Lines ~100-127)
```html
<div class="about_text">
  <p>
    I'm Your Name, a [Your Title] at  ← CHANGE ALL OF THIS
    <a class="link" href="https://yourorganization.edu" target="_blank">
      Your Organization
    </a>. <br /><br />
    
    Write your professional bio here...  ← WRITE YOUR BIO
    
    <br /><br />
    
    Add information about your background...  ← ADD MORE DETAILS
  </p>
</div>
```

**What to write**:
- Paragraph 1: Current position and organization
- Paragraph 2: What you do / research interests
- Paragraph 3: Educational background or achievements
- (Optional) Paragraph 4: Personal interests

**Tips**:
- Keep it conversational but professional
- Use `<br /><br />` for paragraph breaks
- Add links with `<a class="link" href="URL">text</a>`
- Aim for 3-4 short paragraphs

---

### 4. Research Section / Venn Diagram (Lines ~158-201)

**Option A: Customize the Venn Diagram**

#### Left Circle (Lines ~167-175)
```html
<div class="circle circle-left"
  data-title="Research Area 1"           ← Circle popup title
  data-description="Describe your first research area here..."  ← Popup text
  data-highlight="left"
  tabindex="0">
  <span>Research<br />Area<br />One</span>  ← Text inside circle
</div>
```

#### Right Circle (Lines ~176-184)
```html
<div class="circle circle-right"
  data-title="Research Area 2"           ← Circle popup title
  data-description="Describe your second research area here..."  ← Popup text
  data-highlight="right"
  tabindex="0">
  <span>Research<br />Area<br />Two</span>  ← Text inside circle
</div>
```

#### Bottom Circle (Lines ~185-193)
```html
<div class="circle circle-bottom"
  data-title="Research Area 3"           ← Circle popup title
  data-description="Describe your third research area here..."  ← Popup text
  data-highlight="bottom"
  tabindex="0">
  <span>Research<br />Area<br />Three</span>  ← Text inside circle
</div>
```

#### Center Description (Lines ~197-201)
```html
<div class="venn-description" id="venn-description">
  <h2 id="venn-description-title">Your Main Research Focus</h2>  ← Title
  <p id="venn-description-body">
    Describe how your three research areas come together...  ← Description
  </p>
</div>
```

**Option B: Remove Venn Diagram Entirely**

Delete lines ~158-202 (everything from `<div class="research">` to `</div>`)
Also remove this line from bottom: `<script src="/js/venn.js" defer></script>`

---

## 🎨 Styling Tips

### Color Classes
You can use these classes on links to add color:
- `.link` - Default dark grey with underline
- `.harvard` - Red color (rename to `.primary`)
- `.hopkins` - Blue color (rename to `.secondary`)
- `.coep` - Purple color (rename to `.tertiary`)

Example:
```html
<a class="link primary" href="URL">Text</a>
```

### Line Breaks
- `<br />` - Single line break
- `<br /><br />` - Paragraph spacing (recommended between paragraphs)

### Links
```html
<a class="link" href="https://example.com" target="_blank">Link Text</a>
```
- `target="_blank"` opens in new tab
- Always include `https://`

---

## 📝 Complete Example Bio

Here's a complete example you can use as a template:

```html
<div class="about_text">
  <p>
    I'm Jane Smith, a Software Engineer at
    <a class="link" href="https://techcompany.com" target="_blank">
      Tech Company
    </a>. <br /><br />
    
    I build scalable web applications and distributed systems that handle
    millions of users. My work focuses on backend architecture, database
    optimization, and API design. I'm passionate about creating elegant
    solutions to complex technical challenges.
    <br /><br />
    
    Before joining Tech Company, I completed my Master's in Computer Science from
    <a class="link" href="https://university.edu" target="_blank">
      State University
    </a>
    and my Bachelor's in Software Engineering from
    <a class="link" href="https://college.edu" target="_blank">
      Tech College
    </a>.
    <br /><br />
    
    When I'm not coding, you'll find me hiking local trails, experimenting
    with new coffee brewing methods, or contributing to open source projects.
  </p>
</div>
```

---

## 🔍 Quick Find & Replace

Use these VS Code shortcuts to update multiple places at once:

1. Press `Ctrl+H` (Windows/Linux) or `Cmd+H` (Mac)
2. Search for: `Your Name`
3. Replace with: `Jane Smith` (your name)
4. Click "Replace All" in current file

Do this for:
- `Your Name` → Your actual name
- `Your Title` → Your job title
- `Your Organization` → Your company/university
- `yourdomain.com` → Your actual domain
- `yourname@example.com` → Your email

---

## ✅ Checklist for Homepage

Use this checklist when editing `index.html`:

- [ ] Updated name in navigation
- [ ] Changed greeting text
- [ ] Customized typing animation words (in `js/typing.js`)
- [ ] Wrote complete bio (3-4 paragraphs)
- [ ] Added profile photo path
- [ ] Updated email address
- [ ] Added CV file path
- [ ] Customized or removed Venn diagram
- [ ] Added organization links
- [ ] Checked all text for placeholders
- [ ] Tested page in browser

---

## 🚨 Common Mistakes

1. **Forgetting closing tags**: Every `<a>` needs `</a>`, every `<div>` needs `</div>`
2. **Wrong quote types**: Use regular quotes `"`, not smart quotes `"` or `"`
3. **Missing `<br />` tags**: They need to be self-closing with `/>`
4. **Broken links**: Include full URL with `https://`
5. **Image paths**: Use relative paths starting with `assets/`

---

## 💡 Pro Tips

1. **Use line breaks liberally**: Makes text more readable
2. **Add links to keywords**: Link organizations, publications, awards
3. **Keep paragraphs short**: 2-4 sentences each
4. **Test on mobile**: Your bio should look good on phones too
5. **Update regularly**: Refresh bio as your career progresses
6. **Get feedback**: Ask someone to proofread before launching

---

## 📱 Responsive Considerations

Your bio will automatically adapt to different screen sizes:
- **Desktop**: Photo on right, text on left
- **Tablet**: Similar layout, slightly narrower
- **Mobile**: Photo stacks above text

No need to create separate versions!

---

**Ready to edit?** Open `index.html` and start customizing! 🎨

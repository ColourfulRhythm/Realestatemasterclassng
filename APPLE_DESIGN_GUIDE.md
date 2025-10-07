# 🍎 Apple-Style Presentation Design Guide

## Design Philosophy

This presentation follows Apple/Steve Jobs presentation principles:

> **"Simplicity is the ultimate sophistication."** - Steve Jobs

---

## 🎨 Color Palette

### Primary Colors
- **Background:** Pure black (#000000)
- **Text:** White (#FFFFFF) with varying opacity
- **Accent:** Subtle white highlights (no bright colors)

### Typography Hierarchy
```
Main Title:     8rem (128px) - Ultra light weight
Subtitle:       4rem (64px)  - Light weight  
Body Text:      3rem (48px)  - Extra light weight
Supporting:     2rem (32px)  - Light/thin weight
```

---

## 📐 Layout Principles

### 1. **Whitespace is King**
- Generous padding and margins
- Content breathes
- Never cramped

### 2. **One Idea Per Slide**
- Focus on single concept
- No information overload
- Clear visual hierarchy

### 3. **Typography Over Graphics**
- Let words be the hero
- Minimal icons (if any)
- High-quality photography only

### 4. **Asymmetric Balance**
- Not always centered
- Dynamic compositions
- Professional tension

---

## 🎭 Animation Style

### Timing
- **Fade In:** 0.8s
- **Slide Up:** 0.8s with 30px offset
- **Delay Between Elements:** 0.6-1s

### Easing
```css
ease: cubic-bezier(0.25, 0.8, 0.25, 1)
```

### Principles
- Subtle, not flashy
- Purposeful movement
- Builds hierarchy

---

## 📸 Imagery Guidelines

### Photo Selection
✅ **Use:**
- High-resolution (4K+)
- Professional photography
- Dramatic lighting
- Architectural shots
- Cinematic composition

❌ **Avoid:**
- Stock-looking images
- Busy backgrounds
- Low resolution
- Multiple subjects
- Distracting elements

### Overlay
- **Darkness:** 60-80% black overlay
- **Gradient:** Subtle directional gradient
- **Purpose:** Ensure text readability

---

## 🔤 Typography Rules

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 
             "SF Pro Display", "Helvetica Neue", 
             Arial, sans-serif;
```

### Weights
- **100-200:** Thin/Extra Light (primary use)
- **300:** Light (secondary use)
- **400:** Regular (body text only)
- **500-900:** Never use (too heavy for Apple style)

### Letter Spacing
```css
/* Large headings */
letter-spacing: -0.04em;  /* Tight, modern */

/* Body text */
letter-spacing: -0.01em;  /* Natural */
```

---

## 🎯 Slide Templates

### 1. **Hero Slide** (Opening/Section Breaks)
```
┌────────────────────────────────┐
│                                │
│                                │
│         [HUGE TITLE]           │
│      [subtle subtitle]         │
│                                │
│                                │
└────────────────────────────────┘
```

### 2. **Statement Slide** (Key Messages)
```
┌────────────────────────────────┐
│                                │
│    [One powerful sentence]     │
│    [that fills the screen]     │
│                                │
└────────────────────────────────┘
```

### 3. **List Slide** (Maximum 3 items)
```
┌────────────────────────────────┐
│                                │
│    Item 1                      │
│                                │
│    Item 2                      │
│                                │
│    Item 3                      │
│                                │
└────────────────────────────────┘
```

### 4. **Big Number Slide** (Stats)
```
┌────────────────────────────────┐
│                                │
│          [HUGE #]              │
│       [what it means]          │
│                                │
└────────────────────────────────┘
```

---

## ❌ What NOT to Do

### Visual No-Nos
- ❌ Multiple colors per slide
- ❌ Colorful icons
- ❌ Gradients on text
- ❌ Drop shadows
- ❌ Borders and frames
- ❌ Bullet points
- ❌ More than 3 items per slide
- ❌ Small text
- ❌ Busy backgrounds

### Content No-Nos
- ❌ Paragraphs of text
- ❌ Complex charts
- ❌ Multiple ideas per slide
- ❌ Cluttered layouts
- ❌ Low-quality images

---

## ✅ Apple Presentation Checklist

### Before Each Slide
- [ ] Does it communicate ONE idea?
- [ ] Is the text large enough to read from the back?
- [ ] Is there enough whitespace?
- [ ] Is the image high-quality?
- [ ] Can I remove anything?

### Typography
- [ ] Using ultra-light/thin weights?
- [ ] Proper hierarchy (size contrast)?
- [ ] Tight letter-spacing on headings?
- [ ] White or subtle grey only?

### Animation
- [ ] Subtle and purposeful?
- [ ] Proper timing (0.8s)?
- [ ] Builds content logically?

### Overall
- [ ] Would Steve Jobs approve?
- [ ] Is it elegant and minimal?
- [ ] Does it feel premium?

---

## 🎬 Real Apple Presentation Examples

### Slide 1: Opening
```
────────────────────────────────
                                
                                
         Real Estate            
                                
                                
────────────────────────────────
```

### Slide 2: Statement
```
────────────────────────────────
                                
    The foundation of           
    everything.                 
                                
────────────────────────────────
```

### Slide 3: Big Concept
```
────────────────────────────────
                                
         Location               
                                
    [Beautiful cityscape photo]
────────────────────────────────
```

### Slide 4: Simple List
```
────────────────────────────────
                                
    Residential                 
                                
    Commercial                  
                                
    Industrial                  
                                
────────────────────────────────
```

---

## 🎨 Current Slide Styles

### Hero Slide (Opening/Cover)
```jsx
<h1 className="text-[8rem] font-extralight text-white 
               leading-none tracking-tight">
  Real Estate
</h1>
```

### Subtitle
```jsx
<div className="text-4xl font-light text-white/80">
  The Foundation of Everything
</div>
```

### Body Text
```jsx
<div className="text-3xl font-extralight text-white/60">
  Supporting information
</div>
```

---

## 🔧 Customization

### Change Slide Background
```jsx
<div className="slide-background" style={{
  backgroundImage: 'url("YOUR_HIGH_RES_IMAGE_URL")'
}} />
```

### Adjust Overlay Darkness
In `index.css`:
```css
.slide-overlay {
  background: rgba(0,0,0,0.8); /* 0.6-0.9 range */
}
```

### Typography Sizes
```jsx
text-[8rem]   /* Main titles */
text-6xl      /* Section headers */
text-4xl      /* Subtitles */
text-3xl      /* Body */
text-2xl      /* Supporting */
```

---

## 📚 Resources

### Inspiration
- Apple Keynote presentations (2007-present)
- Steve Jobs presentation style
- Swiss design principles
- Bauhaus minimalism

### Typography
- SF Pro Display (Apple's font)
- Helvetica Neue
- Inter (web alternative)

### Photography
- Unsplash (high-quality, free)
- Pexels (architectural shots)
- Professional real estate photography

---

## 🎯 Key Takeaways

1. **Less is More** - Remove everything unnecessary
2. **Size Matters** - Go big or go home with typography
3. **One Thing** - One message per slide
4. **Quality** - Only premium photography
5. **Simplicity** - Black, white, minimal

---

**Remember:** Apple presentations are about making complex things feel simple and elegant. Every element should have a purpose, and nothing should distract from the core message.

*"Design is not just what it looks like and feels like. Design is how it works."* - Steve Jobs


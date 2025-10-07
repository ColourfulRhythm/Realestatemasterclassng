# 🎯 Quick Reference Card

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `1-9` | Jump to slide 1-9 |
| `F` | Toggle fullscreen |
| `Esc` | Exit fullscreen / Go to first slide |

## 📱 Touch Gestures

| Gesture | Action |
|---------|--------|
| Swipe Left | Next slide |
| Swipe Right | Previous slide |
| Tap indicators | Jump to slide |

## 🔗 URL Structure

Share specific slides:
```
http://localhost:3000/#cover
http://localhost:3000/#opening
http://localhost:3000/#investment-strategy
```

## 🎨 Customization

Edit CSS variables in `src/index.css`:
```css
:root {
  --controls-bottom: 3rem;      /* Control position */
  --indicators-top: 1.5rem;     /* Indicator position */
  --transition-normal: 0.3s;    /* Animation speed */
}
```

## 📂 Project Structure

```
src/
├── App.js                      # Main app
├── hooks/                      # Custom hooks
│   ├── useKeyboardNavigation.js
│   ├── useSwipeGestures.js
│   ├── useSlideHistory.js
│   └── useFullscreen.js
└── components/
    ├── ErrorBoundary.js
    ├── NavigationControls.js
    ├── SlideIndicators.js
    └── [Slide components...]
```

## 🚀 Commands

```bash
npm start        # Start development server
npm run build    # Production build
npm test         # Run tests
```

## 🐛 Troubleshooting

**Slides not navigating?**
- Check browser console for errors
- Ensure `npm install` ran successfully

**Styles not updating?**
- Clear browser cache
- Hard refresh (Cmd+Shift+R / Ctrl+Shift+F5)

**Fullscreen not working?**
- Ensure HTTPS (some browsers require it)
- Try pressing 'F' key

**Mobile swipe not working?**
- Ensure touch events are enabled
- Try in Chrome mobile or Safari iOS

## ✅ Features

- ✅ Keyboard navigation
- ✅ Touch gestures
- ✅ URL routing
- ✅ LocalStorage persistence
- ✅ Fullscreen mode
- ✅ Error boundary
- ✅ Responsive design
- ✅ Accessibility (WCAG)
- ✅ Animation direction fix
- ✅ Browser back/forward support


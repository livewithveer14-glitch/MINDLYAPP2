# AEIRON MVP - Deployment & Build Guide

## Overview
AEIRON is a premium, futuristic MVP landing page for a cognitive AI startup. This is a **production-ready, frontend-only** React + Vite application designed for deployment on Vercel.

---

## Technology Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite (with Rolldown)
- **Styling**: Tailwind CSS 4 + PostCSS
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Fonts**: Inter Display + Space Grotesk (Google Fonts)
- **Deployment**: Vercel (recommended) or any static hosting

---

## Project Structure

```
aeiron/
├── src/
│   ├── App.tsx                    # Main app with layout, bg, and toast provider
│   ├── App.css                    # Legacy styles (minimal use)
│   ├── index.css                  # Global styles: glass panels, animations, typography
│   ├── main.tsx                   # React DOM entry point
│   ├── components/
│   │   ├── Hero.tsx              # Hero section with AEIRON title & CTAs
│   │   ├── Products.tsx          # 3-product grid with toast integration
│   │   ├── Philosophy.tsx        # Privacy & philosophy mission statement
│   │   ├── Donation.tsx          # Funding progress, $129/$9800 target, QR code
│   │   ├── Founders.tsx          # Team section: Veer Thakur + Sorabh Kumar
│   │   ├── Footer.tsx            # Contact section with email & Instagram
│   │   ├── Loader.tsx            # Page loader animation (1.2s)
│   │   └── ToastContainer.tsx    # Toast notification renderer
│   ├── context/
│   │   └── ToastContext.tsx      # Toast state management context
│   └── assets/                    # (empty - for future assets)
├── public/
│   ├── bg.png                    # Background image (dark futuristic)
│   └── donation.png              # QR code for donations
├── package.json                  # Dependencies & scripts
├── vite.config.ts               # Vite configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.cjs           # PostCSS configuration
├── eslint.config.js             # ESLint rules
├── index.html                   # HTML entry point
└── DEPLOYMENT_GUIDE.md          # This file

```

---

## Features Implemented

### ✅ Design & UX
- **Premium Glass UI**: Real backdrop-blur with clear transparency (not milky)
- **3D Lighting Effects**: Panels tilt on hover with depth shadows
- **Premium Typography**: Space Grotesk for headlines, Inter for body
- **Smooth Animations**: Fade-in, scale, parallax with Framer Motion
- **Responsive Design**: Mobile-first, tested on all screen sizes
- **Parallax Background**: bg.png scrolls with content

### ✅ Components
1. **Hero Section**: Large "AEIRON" title + tagline + two CTAs
2. **Products (3 Grid)**: 
   - COGNI-LINK
   - PIE (Personal Intelligence Engine)
   - AERO Browser
3. **Philosophy**: Privacy & cognitive freedom statement
4. **Donation**: $129/$9,800 progress bar + QR code image
5. **Team**: Veer Thakur (14) + Sorabh Kumar
6. **Contact**: Email + Instagram links
7. **Loader**: 1.2s animated page entry

### ✅ Toast Notification System
- **Click "Try for Free"** on any product → toast appears
- **Message**: "We are still building. Please wait and consider donating to support AEIRON."
- **Auto-dismiss**: 4 seconds with exit animation
- **Manual close**: X button to dismiss instantly

### ✅ Production Quality
- ✓ Zero build errors
- ✓ TypeScript strict mode
- ✓ ESLint compliant
- ✓ Tailwind utilities validated
- ✓ All animations optimized
- ✓ Accessibility basics (aria labels, semantic HTML)

---

## Local Development

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **pnpm** 8+

### Installation

```bash
cd aeiron
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at:
- **Local**: http://localhost:5174
- Vite will auto-reload on file changes

### Build for Production

```bash
npm run build
```

Output: `dist/` folder with optimized HTML, CSS, and JS

### Preview Production Build

```bash
npm run preview
```

Test the production build locally before deploying.

### Lint Code

```bash
npm lint
```

---

## Deployment to Vercel

### Option 1: Git Push (Recommended)

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial AEIRON MVP commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/aeiron.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com/new
   - Import the GitHub repository
   - Select "Next.js" as the framework (Vite is auto-detected)
   - Click "Deploy"

3. **Environment**: Vercel auto-detects Node.js project and runs:
   ```
   npm install
   npm run build
   ```

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
cd aeiron
vercel
```

Follow the CLI prompts to link your project and deploy.

### Option 3: Manual Upload

1. Run `npm run build` locally
2. Upload the `dist/` folder to Vercel via the dashboard
3. Point your domain to Vercel

---

## Post-Deployment Checklist

- [ ] Website loads without 404 errors
- [ ] Background image `/bg.png` displays correctly
- [ ] Donation QR `/donation.png` appears in funding section
- [ ] All links work (mailto:, Instagram, internal anchors)
- [ ] Toast notifications trigger on "Try for Free" buttons
- [ ] Page loads smoothly (check Network tab for CSS/JS timing)
- [ ] Mobile responsive (test on iPhone, iPad, Android)
- [ ] Custom domain configured (if using)
- [ ] SSL certificate active (Vercel auto-provides)

---

## Configuration Files Reference

### `tailwind.config.ts`
- Custom glass colors and shadows
- Extended font families (Inter, Space Grotesk)
- Backdrop blur utilities

### `index.css`
**Global styles include**:
- `.glass-panel`: Base glass effect with inset gradient lighting
- `.glass-panel-hover`: Interactive 3D hover transform
- `.btn-glass`: Button styling with glass effect
- `.display-xl`, `.display-lg`, `.display-md`: Typography scales
- `@keyframes fadeInUp`, `fadeInDown`, `scaleIn`, `slideInRight`: Animations
- `.toast`, `.toast-container`: Notification styles

### `vite.config.ts`
- React plugin for JSX/TSX
- Auto asset optimization

### `tsconfig.json`
- Strict type checking
- ES2020 target

---

## Key CSS Classes

Use these in components:

```tsx
// Glass panels with hover effect
<div className="glass-panel glass-panel-hover rounded-3xl p-8">
  Content
</div>

// Premium buttons
<button className="btn-glass">Try for Free</button>

// Typography
<h1 className="display-xl text-white">AEIRON</h1>
<p className="display-md text-white">Subtitle</p>
```

---

## Important Notes

### Asset Paths
- **Background**: Must be at `/public/bg.png`
- **QR Code**: Must be at `/public/donation.png`
- Images referenced as `/filename` (root-relative)

### Tailwind Classes
- Only use **valid** Tailwind utilities
- Examples: `text-white/80`, `bg-white/10`, `backdrop-blur-20`, `rounded-3xl`
- Avoid typos like `border-white/8` (not valid; use `/10`, `/20`, etc.)

### Toast Notifications
- Auto-fire on button click via `handleProductClick()`
- Managed by `ToastContext` + `useToast()` hook
- No external libraries needed

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires CSS backdrop-filter support
- Tested on mobile (iOS 12+, Android 5+)

---

## Performance Optimization

**Already included**:
- ✓ Minified CSS & JavaScript
- ✓ Font loading optimization (Google Fonts)
- ✓ Image optimization (consider WebP for bg.png)
- ✓ Code splitting (Vite default)
- ✓ Tree-shaking (unused code removed)

**For production**:
- Use CDN for static assets
- Monitor Core Web Vitals on Vercel Analytics
- Consider image compression for `/public/bg.png`

---

## Troubleshooting

### Issue: "Module not found"
**Solution**: Run `npm install` to ensure all dependencies are installed

### Issue: "bg.png not loading"
**Solution**: 
1. Check that `/public/bg.png` exists
2. Verify path is `/bg.png` (root-relative, no `src/`)
3. Reload page (Ctrl+Shift+R for hard refresh)

### Issue: Build fails
**Solution**:
1. Run `npm run build` locally first
2. Check for TypeScript errors: `npx tsc --noEmit`
3. Ensure no unused imports (ESLint will flag these)

### Issue: Toast not showing
**Solution**:
1. Check that `ToastProvider` wraps App in `main.tsx`
2. Ensure `ToastContainer` is rendered (in App.tsx)
3. Check browser console for errors

### Issue: Styles not applying
**Solution**:
1. Clear cache: `npm run build` (clean rebuild)
2. Hard refresh browser: Ctrl+Shift+R
3. Check that Tailwind classes are spelled correctly

---

## Customization Guide

### Change Funding Amount
Edit `src/components/Donation.tsx`:
```tsx
const GOAL = 9800;
const RAISED = 129; // Change this value
```

### Update Contact Info
Edit `src/components/Footer.tsx`:
```tsx
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="https://instagram.com/your-handle">Instagram: @your-handle</a>
```

### Modify Product Descriptions
Edit `src/components/Products.tsx` in the `products` array:
```tsx
const products = [
  {
    id: 'cogni-link',
    title: 'Your Title',
    description: 'Your description here',
    icon: Brain,
  },
  // ... more products
];
```

### Change Toast Message
Edit `src/components/Products.tsx` in `handleProductClick()`:
```tsx
showToast('Your custom message here', 'info');
```

### Adjust Colors/Styling
Edit `src/index.css` for:
- Glass panel opacity: `rgba(255, 255, 255, 0.05)` → increase 0.05 for more visible
- Backdrop blur: `blur(20px)` → adjust amount
- Shadow intensity: Modify box-shadow values

---

## Vercel Specific Settings

No special configuration needed! Vercel auto-detects:
- **Framework**: React + Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

Optional env vars (if needed later):
- Go to Project Settings > Environment Variables
- Add any required secrets

---

## Next Steps for MVP

✅ **Completed**:
- Premium glass UI design
- All sections implemented
- Toast notifications
- Responsive design
- Build optimization

🔄 **For Future Phases**:
- Product detail pages
- Email capture form
- Analytics tracking
- Blog section
- API integration (payment, emails)
- Dark/light theme toggle
- Multi-language support

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion

---

## License

This project is proprietary to AEIRON. All rights reserved.

---

**Deploy Ready** ✅ Go live anytime!

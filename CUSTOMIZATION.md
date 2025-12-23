# Customization Guide

This guide will help you customize the portfolio with your personal information and preferences.

## 🔧 Quick Customization Checklist

### 1. Contact Information
**File**: `app/contact/page.tsx`

Update the following:
- Email address (replace `frank.ishimwe@example.com`)
- GitHub URL (replace `https://github.com/yourusername`)
- LinkedIn URL (replace `https://linkedin.com/in/yourusername`)

Also update in:
- `components/footer.tsx` (same contact links)
- `app/layout.tsx` (Open Graph URLs if you have a domain)

### 2. Resume
**File**: `app/resume/page.tsx`

Add your resume PDF to the `public/` folder:
1. Place your resume PDF in the `public/` folder
2. Name it `resume.pdf`
3. The download button and preview will automatically work

### 3. Projects
**File**: `data/projects.ts`

Update with your actual projects:
- Add/remove/modify project entries
- Include real GitHub and demo URLs
- Update tech stacks, descriptions, and case studies
- Set `featured: true` for projects to show on the home page

### 4. Skills
**File**: `app/skills/page.tsx`

Update the `skillCategories` array:
- Modify skill names and proficiency levels
- Add or remove skill categories
- Adjust skill groupings as needed

### 5. Experience
**File**: `app/experience/page.tsx`

Update:
- Education details (institution, degree, period, description)
- Certifications (title, issuer, period, description)
- Practical experience entries

### 6. About Page
**File**: `app/about/page.tsx`

Update:
- Personal summary text
- Education timeline
- Values & philosophy section

### 7. Home Page
**File**: `app/page.tsx`

Update:
- Hero section value statement (if different)
- Featured projects (ensure IDs match projects in `data/projects.ts`)
- Impact statements (customize to reflect your approach)

### 8. SEO & Metadata
**File**: `app/layout.tsx`

Update root metadata:
- Title
- Description
- Keywords
- Open Graph URLs (when you have a domain)
- Twitter card info

**Files**: Individual layout files in each route folder
- Update page-specific titles and descriptions

### 9. Theme Colors (Optional)
**File**: `app/globals.css`

Customize CSS variables:
- Primary colors
- Background colors
- Accent colors
- Border colors

### 10. Fonts (Optional)
**File**: `app/layout.tsx`

If you want different fonts:
- Replace Inter with another Google Font
- Replace JetBrains Mono with another monospace font
- Update `tailwind.config.ts` font family names

## 🎨 Design Customization

### Colors
Edit `app/globals.css` to change the color scheme:
- Light mode colors are in `:root`
- Dark mode colors are in `.dark`
- Uses HSL color format for easy adjustments

### Spacing
The project uses an 8pt spacing system. All spacing values are multiples of 4px (4, 8, 16, 24, 32, etc.)

### Typography
- Primary: Inter (for body text)
- Secondary: JetBrains Mono (for code/technical content)
- Configured in `app/layout.tsx`

## 📝 Form Handling

The contact form in `app/contact/page.tsx` is currently static. To make it functional, integrate with:
- **Formspree**: Easy form backend
- **SendGrid**: Email service
- **Your own API**: Custom backend endpoint
- **Resend**: Modern email API

Example integration with Formspree:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository on Vercel
3. Deploy automatically

### Environment Variables
If you add any API keys or secrets:
1. Create `.env.local` file
2. Add variables (never commit this file)
3. Add to Vercel environment variables in dashboard

## ✅ Final Checklist Before Going Live

- [ ] All contact information updated
- [ ] Resume PDF added to public folder
- [ ] All projects updated with real data
- [ ] Skills reflect actual expertise
- [ ] Experience section updated
- [ ] About page personalized
- [ ] SEO metadata updated
- [ ] Contact form integrated (if applicable)
- [ ] Test all links
- [ ] Test dark/light mode toggle
- [ ] Test responsive design on mobile
- [ ] Check all pages load correctly
- [ ] Verify animations work smoothly

## 🐛 Troubleshooting

### Theme not persisting
- Check browser localStorage is enabled
- Verify `ThemeProvider` is wrapping the app in `app/layout.tsx`

### Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check that components have `"use client"` directive

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check TypeScript errors: `npm run build`
- Verify all imports are correct

### Images not loading
- Ensure images are in the `public/` folder
- Use Next.js Image component for optimization
- Check image paths are correct

---

Happy customizing! 🎉

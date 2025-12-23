# Frank ISHIMWE - Portfolio Website

A modern, aesthetic, and highly interactive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark-first, minimal, premium aesthetic with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile → desktop)
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Animations**: Framer Motion powered micro-interactions
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Accessibility**: ARIA labels and proper contrast ratios
- **Performance**: Optimized images, fonts, and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components built with Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (primary), JetBrains Mono (secondary)

## 📁 Project Structure

```
frank-portfolio/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── skills/            # Skills page
│   ├── projects/          # Projects page with case studies
│   ├── experience/        # Experience page
│   ├── resume/            # Resume page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navigation.tsx    # Navigation component
│   ├── mobile-nav.tsx    # Mobile navigation menu
│   ├── theme-toggle.tsx  # Theme switcher
│   └── scroll-progress.tsx # Scroll progress indicator
├── lib/                  # Utility functions
│   ├── utils.ts          # Utility functions (cn, formatDate)
│   └── theme-provider.tsx # Theme context provider
├── data/                 # Data files
│   └── projects.ts       # Projects data
└── public/               # Static assets
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frank-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Update Personal Information

1. **Contact Information**: Edit `app/contact/page.tsx` and update email, GitHub, and LinkedIn links.

2. **Resume**: Add your resume PDF to the `public/` folder as `resume.pdf`.

3. **Projects**: Update `data/projects.ts` with your actual projects, including:
   - Project titles and descriptions
   - GitHub and demo URLs
   - Tech stacks
   - Case study details

4. **Experience**: Update `app/experience/page.tsx` with your actual education and certifications.

5. **Skills**: Modify `app/skills/page.tsx` to reflect your actual skills and proficiency levels.

### Styling

The project uses Tailwind CSS with a custom theme. Colors and design tokens are defined in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - CSS variables for colors

### SEO

Update metadata in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter card metadata

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Build command: `npm run build`
Start command: `npm start`

## 🎨 Design System

### Colors

The portfolio uses a dark-first design system with CSS variables for easy theming. Colors are defined in `app/globals.css` and can be customized there.

### Typography

- **Primary Font**: Inter (for body text and headings)
- **Secondary Font**: JetBrains Mono (for code and technical content)

### Spacing

Uses an 8pt spacing system:
- Padding and margins use multiples of 4 (4px, 8px, 16px, 24px, 32px, etc.)

## 📄 License

This project is private and personal. All rights reserved.

## 👨‍💻 Author

**Frank ISHIMWE**
- Software Engineer
- AI Systems & Web Development
- African Leadership University

---

Built with ❤️ using Next.js and TypeScript

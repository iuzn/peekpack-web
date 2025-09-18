# QR Engine Landing Page

A beautiful, responsive landing page for QR Engine - the privacy-first QR scanner and generator for iOS.

## ✨ Features

- **🎨 Beautiful Design**: Modern glass morphism design with smooth animations
- **🌙 Dark/Light Mode**: Automatic theme switching with system preference detection
- **📱 Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **⚡ Smooth Animations**: Powered by Framer Motion for fluid user experience
- **🔒 Privacy-Focused**: Highlights the app's privacy-first approach
- **📸 App Story Flow**: Showcases the 4 main app screens as a visual story

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and interactions
- **ShadcnUI** - Beautiful and accessible UI components
- **Lucide React** - Consistent iconography

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main landing page
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/
│   │   └── button.tsx      # Button component
│   ├── theme-provider.tsx  # Theme context provider
│   └── theme-toggle.tsx    # Dark/light mode toggle
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design System

- **Colors**: Uses CSS custom properties for theming
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Components**: ShadcnUI components with custom styling
- **Animations**: Framer Motion with performance optimizations

## 📱 App Store Images

The landing page showcases 4 main app screens:

1. **QR Scanner** (`/images/1.png`) - Instant QR detection interface
2. **QR Generator** (`/images/2.png`) - Professional QR creation
3. **Preview & Actions** (`/images/3.png`) - Save, share, and use anywhere
4. **Smart Recognition** (`/images/4.png`) - Context-aware actions

## 🔒 Privacy Policy

The site includes a comprehensive privacy policy at `/privacy` that explains:

- No data collection or tracking
- 100% local processing
- Offline-first functionality
- Individual developer transparency

## 🚀 Deployment

The site is ready for deployment on any modern hosting platform:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

Build for production:

```bash
npm run build
```

## 👨‍💻 Developer

**Ibrahim Uzun** - Individual iOS Developer

- Based in Istanbul, Turkey
- Focus on privacy-first applications
- Available for contact through App Store or social media

---

Built with ❤️ for QR Engine users who value privacy and beautiful design.

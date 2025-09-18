# PeekPack Landing Page

A beautiful, responsive landing page for PeekPack - the addictive physics-based casual game for iOS.

## ✨ Features

- **🎨 Beautiful Design**: Modern glass morphism design with smooth animations
- **🌙 Dark/Light Mode**: Automatic theme switching with system preference detection
- **📱 Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **⚡ Smooth Animations**: Powered by Framer Motion for fluid user experience
- **🎮 Game-Focused**: Showcases the addictive physics-based gameplay
- **📸 Game Story Flow**: Showcases the 4 main game features as a visual story

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
│   ├── privacy-policy/
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

## 📱 Game Feature Images

The landing page showcases 4 main game features:

1. **Drop & Merge** (`/images/1.png`) - Physics-based ball dropping mechanics
2. **Score System** (`/images/2.png`) - Points and progression tracking
3. **Theme Selection** (`/images/3.png`) - Multiple visual themes and styles
4. **Physics Effects** (`/images/4.png`) - Realistic physics and particle effects

## 🔒 Privacy Policy

The site includes a comprehensive privacy policy at `/privacy-policy` that explains:

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

**Ibrahim Uzun** - Individual iOS Game Developer

- Based in Istanbul, Turkey
- Focus on addictive mobile games
- Available for contact through App Store or social media

---

Built with ❤️ for PeekPack players who love physics-based puzzles.

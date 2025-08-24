# Anthony Arbe Cinco - Personal Portfolio

A modern, clean, and responsive personal portfolio website built with React, Vite, and TailwindCSS. Features light/dark mode, smooth animations, and is fully responsive across all devices.

## 🌟 Features

- **Modern Design**: Clean, minimalist design with professional aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Light/Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Fast Performance**: Built with Vite for optimal build times and performance
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Icons**: React Icons (Feather Icons)
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## 📱 Sections

1. **Hero Section** - Introduction with stats and call-to-action buttons
2. **About Me** - Personal description and key strengths
3. **Work Experience** - Timeline of professional experience
4. **Education** - Academic background and achievements
5. **Skills** - Technical skills with progress bars
6. **Projects** - Portfolio of completed projects
7. **Articles** - Published articles and publications
8. **In Development** - Upcoming projects and works in progress
9. **Contact** - Contact form and information

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/anthnycinco/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  }
}
```

### Content
Update the content in each component file:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - About section content
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Project portfolio
- And so on...

### Styling
Modify the TailwindCSS classes in component files or add custom CSS in `src/index.css`.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is automatically detected based on system preferences and can be manually toggled. The theme preference is saved in localStorage.

## 🚀 Deployment

### GitHub Pages (Automatic)

The portfolio is automatically deployed to GitHub Pages using GitHub Actions:

1. **Push to main branch** - Triggers automatic build and deployment
2. **GitHub Actions** - Builds the project and deploys to `gh-pages` branch
3. **Live Site** - Available at `https://anthonycinco.github.io/portfolio/`

### Manual Deployment

```bash
npm run build
npm run deploy
```

### Custom Domain

To use a custom domain:
1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Configure your domain's DNS settings
3. The site will be available at your custom domain

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/
│   ├── components/            # React components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About section
│   │   ├── Experience.jsx    # Work experience
│   │   ├── Education.jsx     # Education section
│   │   ├── Skills.jsx        # Skills section
│   │   ├── Projects.jsx      # Projects portfolio
│   │   ├── Articles.jsx      # Articles section
│   │   ├── InDevelopment.jsx # Upcoming projects
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer
│   ├── contexts/
│   │   └── ThemeContext.jsx  # Theme context provider
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # TailwindCSS configuration
├── vite.config.js            # Vite configuration
└── README.md                  # This file
```

## 🔧 Configuration Files

### Vite Configuration (`vite.config.js`)
- Base path for GitHub Pages deployment
- React plugin configuration
- Build output settings

### TailwindCSS Configuration (`tailwind.config.js`)
- Custom color palette
- Custom animations
- Font family configurations
- Dark mode settings

### PostCSS Configuration (`postcss.config.js`)
- TailwindCSS and Autoprefixer plugins

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: Fast initial load with lazy loading
- **SEO**: Optimized meta tags and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: aam.cinco@gmail.com
- **LinkedIn**: [aam-cinco](https://linkedin.com/in/aam-cinco)
- **GitHub**: [anthnycinco](https://github.com/anthnycinco)
- **Portfolio**: [anthonycinco.github.io/portfolio/](https://anthonycinco.github.io/portfolio/)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Deployed with [GitHub Pages](https://pages.github.com/)

---

**Made with ❤️ by Anthony Arbe Cinco**

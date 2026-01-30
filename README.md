# Enseigner - Sovereign AI for Regulated GCC Enterprises

A Next.js 15 (App Router) website for Enseigner, providing compliance-first GPU infrastructure and AI execution for regulated GCC enterprises.

## 🚀 Project Overview

This project is a rebranded and restructured version of the DC Tech Consulting website, transformed into Enseigner's platform. The site maintains the original DC Tech framework structure while featuring Enseigner's branding, content, and focus on sovereign AI infrastructure for GCC enterprises.

## ✨ Key Features

- **Sovereign AI Focus**: Compliance-first GPU infrastructure and AI execution
- **GCC Compliance**: Full alignment with UAE PDPL, Saudi NDMO, and GCC regulations
- **Modern UI**: Clean, professional design with bright theme and blue accents
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Content-Driven**: All content centralized in `app/content/enseigner.content.json`

## 📁 Project Structure

```
├── app/
│   ├── content/
│   │   └── enseigner.content.json    # Centralized content configuration
│   ├── about/                         # About Us page
│   ├── services/                      # Services/Consulting page
│   ├── resources/                     # Resources (Blogs, Case Studies, Success Stories)
│   ├── contact/                       # Contact/Request Demo page
│   ├── partners/                      # Partners page
│   ├── page.tsx                       # Homepage
│   └── layout.tsx                     # Root layout with metadata
├── components/
│   ├── sections/
│   │   ├── hero-section.tsx           # Hero with micro-highlights
│   │   ├── service-section.tsx        # Services (4 cards)
│   │   ├── partner-section.tsx        # Partners section
│   │   ├── blogs-section.tsx          # Blogs section (NEW)
│   │   ├── customer-stories.tsx       # Success Stories
│   │   ├── testimonials.tsx          # Testimonials carousel
│   │   └── ...
│   ├── Navbar.tsx                     # Navigation with dropdowns
│   ├── Footer.tsx                     # Footer
│   └── ...
├── data/
│   └── data.ts                        # Static data (case studies, testimonials, etc.)
└── lib/
    └── content.ts                     # Content helper functions
```

## 🎨 Design System

### Theme
- **Theme**: Bright/Light theme with blue primary accents
- **Primary Color**: Blue (`221 83% 53%`)
- **Background**: White with light gray accents
- **Typography**: High contrast, crisp text

### Components
- All components use Tailwind CSS utility classes
- Theme variables defined in `app/globals.css`
- Consistent card styling with hover effects
- Responsive grid layouts

## 📄 Homepage Structure

The homepage follows this exact order (matching reference site):

1. **Hero Section**
   - Top label: "FUTURE-READY IT SERVICES"
   - Main headline and subheadline
   - Primary and secondary CTAs
   - 3 Micro-highlights with icons (Future-Ready, Resilient, Robust)
   - 3 Feature highlights with checkmarks

2. **Partner/Technology Logos Strip** (Infinite Carousel)
   - Auto-scrolling partner logos

3. **Our Services** (4 Cards)
   - Data Analytics
   - AI Solutions
   - Data Center
   - Cloud Migration

4. **Partners Section**
   - Major cloud partner logos and description

5. **Trusted by Industry Leaders**
   - Customer logo grid

6. **Success Stories** (3 Cards)
   - Customer success story cards

7. **Our Blogs** (3 Cards)
   - Recent blog posts with "View All Blogs" link

8. **Testimonials**
   - Carousel/slider with customer testimonials

9. **FAQ**
   - Accordion list of frequently asked questions

10. **Final CTA**
    - "Ready to Transform Your Business?" section

11. **Footer**
    - Logo, links, copyright

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📝 Content Management

All website content is centralized in `app/content/enseigner.content.json`:

- Brand information (name, tagline, logo)
- SEO metadata
- Navigation links
- Hero section content
- Services/Offerings
- About Us content
- Training programs
- Compliance information
- Contact details
- Footer links

### Adding/Updating Content

1. Edit `app/content/enseigner.content.json`
2. Content is automatically loaded via `lib/content.ts`
3. Components use `getContent()` to access content

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server (port 3001)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The development server runs on **http://localhost:3001**

## 📋 Recent Updates

### Major Changes

1. **Full Framework Restoration**
   - Restored complete DC Tech website structure
   - All original pages and routes maintained
   - Navigation with dropdowns (About, Consulting, Training, Resources)

2. **Rebranding to Enseigner**
   - Logo updated to Enseigner logo (transparent, trimmed)
   - All "DC Tech" references replaced with "Enseigner"
   - Content adapted for sovereign AI focus
   - Metadata and SEO updated

3. **Theme Conversion**
   - Changed from dark theme to bright/light theme
   - Blue primary accents maintained
   - Updated all components for light theme compatibility

4. **Homepage Restructuring**
   - Reordered sections to match reference site (dctech.cloud)
   - Removed extra sections (Solution, Advantage, Roadmap, Funding)
   - Added Blogs section on homepage
   - Updated Services to show 4 cards

5. **Content Enrichment**
   - Extracted and adapted content from PDF portfolio
   - Added comprehensive capabilities section
   - Enhanced About Us page with company details
   - Added training program details
   - Updated case studies

6. **Hero Section Enhancement**
   - Added top label ("FUTURE-READY IT SERVICES")
   - Added micro-highlights with icons (Future-Ready, Resilient, Robust)
   - Each micro-highlight has icon, title, and subtitle
   - Aligned micro-highlights with feature descriptions

7. **New Components**
   - Created `BlogsSection` component for homepage
   - Updated service cards to 4-column layout
   - Enhanced CTA section with customizable content

## 🎯 Key Pages

- **Homepage** (`/`): Main landing page with all sections
- **About Us** (`/about`): Company overview, mission, capabilities
- **Services** (`/services`): Consulting services and training programs
- **Resources** (`/resources`): Blogs, case studies, success stories
- **Contact** (`/contact`): Request demo form
- **Partners** (`/partners`): Partner logos and specializations

## 🔧 Configuration

### Port Configuration
The dev server runs on port 3001 (configured in `package.json`):
```json
"dev": "next dev --turbopack -p 3001"
```

### Logo
- Location: `/public/enseigner-logo.png`
- Transparent background, trimmed whitespace
- Used in Navbar and Footer

## 📦 Dependencies

Key dependencies:
- `next`: ^15.x
- `react`: ^19.x
- `typescript`: ^5.x
- `tailwindcss`: Latest
- `lucide-react`: Icons
- `@radix-ui/*`: UI primitives (via shadcn/ui)

## 🎨 Styling

- **Global Styles**: `app/globals.css`
- **Theme Variables**: HSL color system
- **Components**: Tailwind utility classes
- **Animations**: Custom CSS animations in `app/styles/animations.css`

## 📱 Responsive Breakpoints

- Mobile: Default (< 768px)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

## 🔍 SEO

- Metadata configured in `app/layout.tsx`
- Open Graph tags included
- All content from centralized JSON
- Semantic HTML structure

## 📄 License

© 2025 Enseigner. All rights reserved.

## 🤝 Contributing

This is a private project. For updates, contact the development team.

---

**Last Updated**: February 2025
**Version**: 1.0.0

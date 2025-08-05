# gfm-donation
# Hope Foundation - Donation Platform

A modern, responsive donation platform built with Next.js 14, inspired by LaunchGood. This platform showcases various charitable programs and allows users to learn about and donate to different causes.

## Features

- **Modern Design**: Clean, responsive design that works on all devices
- **Program Showcase**: Grid layout displaying donation programs with images and descriptions  
- **Dynamic Detail Pages**: Individual pages for each program with full descriptions and progress tracking
- **Progress Tracking**: Visual progress bars showing fundraising goals and current amounts
- **About Page**: Comprehensive information about the organization, vision, and goals
- **Social Media Integration**: Links to social media platforms
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Static Generation**: Uses Next.js static generation for optimal performance

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: CSS Modules with responsive design
- **Images**: Next.js optimized images with Unsplash integration
- **Data**: Hardcoded data structure (easily replaceable with CMS)
- **Deployment**: Ready for Vercel deployment

## Quick Start

1. **Clone and Install**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
├── components/
│   └── Layout.js          # Shared layout component
├── data/
│   └── programs.js        # Donation programs data
├── pages/
│   ├── _app.js           # App configuration
│   ├── index.js          # Homepage
│   ├── about.js          # About page
│   ├── 404.js            # Custom 404 page
│   └── donate/
│       └── [slug].js     # Dynamic program detail pages
├── styles/
│   └── globals.css       # Global styles
└── package.json
```

## Customization

### Adding New Programs
Edit `data/programs.js` to add new donation programs:

```javascript
{
  id: 7,
  slug: 'your-program-slug',
  title: 'Your Program Title',
  shortDescription: 'Brief description...',
  fullDescription: 'Detailed description...',
  image: 'https://images.unsplash.com/...',
  donationUrl: 'https://your-donation-link.com',
  targetAmount: 50000,
  raisedAmount: 30000
}
```

### Styling
All styles are in `styles/globals.css`. Key CSS custom properties:
- Primary color: `#2c5530` (forest green)
- Secondary color: `#4a7c59` (lighter green)
- Background: `#f8f9fa` (light gray)

### Content
- Update organization details in `components/Layout.js`
- Modify hero section content in `pages/index.js`
- Customize about page content in `pages/about.js`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
Works with any platform supporting Next.js:
- Netlify
- AWS Amplify  
- Railway
- DigitalOcean App Platform

## Features in Detail

### Homepage
- Hero section with call-to-action
- Grid of donation programs
- Responsive card layout
- Direct donation links

### Program Detail Pages
- Static generation for all programs
- Full program descriptions
- Progress tracking visualization
- Social sharing ready

### About Page
- Organization mission and vision
- Impact statistics
- Social media links
- Fundraising goals

### Performance
- Next.js Image optimization
- Static generation
- CSS optimization
- Mobile-first responsive design

## Browser Support
- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License
MIT License
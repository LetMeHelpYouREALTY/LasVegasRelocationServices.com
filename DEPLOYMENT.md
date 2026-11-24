# Deployment Guide

## 🚀 Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

## 🌐 Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to your project settings
   - Navigate to "Domains"
   - Add your custom domain (e.g., `lasvegasrelocationservices.com`)

2. **Configure DNS**
   - Add these records to your domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.19.76
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## 📧 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=https://www.lasvegasrelocationservices.com
NEXT_PUBLIC_CONTACT_EMAIL=DrJan@LasVegasRelocationServices.com
NEXT_PUBLIC_PHONE_NUMBER=(702) 707-7273
```

## 🔧 Production Build

```bash
# Build the project
npm run build

# Test the production build locally
npm run start

# Deploy
npm run deploy
```

## 📊 Performance Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Core Web Vitals**: Track loading performance
- **Bundle Analysis**: Run `npm run analyze` to check bundle size

## 🔒 Security Headers

The website includes security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interface
- Optimized images for mobile devices
- Fast loading on slow connections

## 🔍 SEO Setup

1. **Update Metadata**
   - Edit `src/app/layout.tsx` with your business information
   - Add your Google Analytics code
   - Update Open Graph images

2. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools
   - Submit sitemap

## 📈 Analytics Setup

1. **Google Analytics 4**
   ```typescript
   // Add to layout.tsx
   export const metadata: Metadata = {
     // ... other metadata
     verification: {
       google: 'your-google-verification-code',
     },
   }
   ```

2. **Google Tag Manager**
   - Add GTM script to layout.tsx
   - Configure events for form submissions

## 🚨 Troubleshooting

### Build Errors
- Check Node.js version (18.17+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall

### Performance Issues
- Run `npm run analyze` to check bundle size
- Optimize images with Next.js Image component
- Enable compression in hosting settings

### SEO Issues
- Verify meta tags are correct
- Check robots.txt and sitemap
- Test with Google's Rich Results Test

## 📞 Support

For deployment issues:
- Check Vercel documentation
- Review Next.js deployment guide
- Contact your hosting provider

---

**Ready to go live?** Your Las Vegas Relocation Services website is optimized for production and ready to help clients find their new home in Las Vegas!

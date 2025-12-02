# Deployment Guide for Drishu's Website 💕

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the easiest deployment experience.

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Website for Drishu"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"
   - Your site will be live in minutes! 🎉

3. **Custom Domain (Optional):**
   - In your Vercel project settings, go to "Domains"
   - Add your custom domain (e.g., drishu.yourname.com)

---

## Option 2: Deploy to Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

---

## Option 3: Deploy to GitHub Pages (Static Export)

If you want to use GitHub Pages, you'll need to configure Next.js for static export:

1. **Update next.config.js:**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   ```

2. **Add to package.json:**
   ```json
   "scripts": {
     "export": "next build"
   }
   ```

3. **Deploy:**
   - Build: `npm run build`
   - Push the `out` folder to GitHub Pages

---

## Quick Deploy Commands

### Test Build Locally First:
```bash
npm run build
npm start
```

This will test if everything builds correctly before deploying.

---

## Environment Variables

If you need to add environment variables later:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Deployment: https://nextjs.org/docs/deployment

---

**Recommended: Use Vercel for the easiest deployment experience!** 🚀


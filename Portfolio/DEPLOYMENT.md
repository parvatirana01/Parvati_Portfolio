# Deployment Guide

## Option 1: Deploy to Vercel (Recommended for Next.js)

Vercel is the easiest and most optimized platform for Next.js applications.

### Steps:
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Add your environment variables (if any):
   - Go to Project Settings → Environment Variables
   - Add your EmailJS credentials or other secrets
7. Click "Deploy"

**No Dockerfile needed!** Vercel handles everything automatically.

---

## Option 2: Deploy with Docker

Use this option for platforms like Railway, Render, DigitalOcean, AWS, or self-hosted servers.

### Prerequisites:
- Docker installed on your system
- Docker Compose (optional, for easier management)

### Build and Run Locally:

#### Using Docker:
```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

#### Using Docker Compose:
```bash
# Build and run
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop the container
docker-compose down
```

### Deploy to Cloud Platforms:

#### Railway:
1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Deploy: `railway up`

#### Render:
1. Connect your GitHub repository
2. Select "Docker" as the environment
3. Render will automatically detect the Dockerfile
4. Add environment variables in the dashboard
5. Deploy

#### DigitalOcean App Platform:
1. Connect your repository
2. Select "Dockerfile" as the build method
3. Configure environment variables
4. Deploy

---

## Environment Variables

If you're using EmailJS or other services, make sure to set these environment variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### For Vercel:
Add them in Project Settings → Environment Variables

### For Docker:
Create a `.env.local` file or pass them in docker-compose.yml:
```yaml
environment:
  - NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
  - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
  - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Testing the Build Locally

Before deploying, test the production build:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

Visit `http://localhost:3000` to verify everything works.

---

## Troubleshooting

### Docker build fails:
- Ensure you have enough disk space
- Try clearing Docker cache: `docker system prune -a`
- Check that all dependencies are in package.json

### Application doesn't start:
- Check the logs: `docker logs <container-id>`
- Verify environment variables are set correctly
- Ensure port 3000 is not already in use

### Vercel deployment fails:
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Ensure package.json has correct build scripts

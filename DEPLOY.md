# Deploying Macintosh 1984 Ghost to Render.com

This guide walks you through deploying your Ghost CMS with the Macintosh 1984 theme to Render.com.

## Prerequisites

1. **GitHub Account**: Your code must be in a GitHub repository
2. **Render Account**: Sign up at [render.com](https://render.com)
3. **Domain (Optional)**: For custom domain setup

## Method 1: Using render.yaml (Recommended)

### Step 1: Push to GitHub

```bash
cd /Users/korrio/Desktop/system.css
git init
git add .
git commit -m "Initial commit: Macintosh 1984 Ghost theme"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/macintosh-1984-ghost.git
git push -u origin main
```

### Step 2: Create Render Service

1. Go to [render.com](https://render.com) and log in
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Review the configuration and click "Apply"

### Step 3: Configure Environment Variables

The following variables will be automatically set from the database:
- `database__client`: mysql
- `database__connection__*`: Auto-populated from MySQL service
- `url`: Your app URL
- `NODE_ENV`: production

## Method 2: Manual Setup

### Step 1: Create MySQL Database

1. In Render Dashboard → "New" → "PostgreSQL" or "MySQL"
2. Name: `ghost-db`
3. Database Name: `ghost`
4. User: `ghost`
5. Note the connection details

### Step 2: Create Web Service

1. "New" → "Web Service"
2. Connect GitHub repository
3. Configure:
   - **Name**: `macintosh-1984-ghost`
   - **Environment**: `Node`
   - **Region**: `Oregon` (or nearest)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

### Step 3: Environment Variables

Add these in the Render dashboard:

```
NODE_ENV=production
url=https://your-service-name.onrender.com
server__port=10000
server__host=0.0.0.0

# Database (get from your MySQL service)
database__client=mysql
database__connection__host=YOUR_DB_HOST
database__connection__user=YOUR_DB_USER
database__connection__password=YOUR_DB_PASSWORD
database__connection__database=YOUR_DB_NAME
database__connection__port=YOUR_DB_PORT
```

## Method 3: Docker Deployment

### Step 1: Build Docker Image

```bash
# Build locally (optional)
docker build -t macintosh-1984-ghost .

# Or let Render build it
```

### Step 2: Create Docker Service

1. "New" → "Web Service"
2. "Deploy an existing image from a registry"
3. Use the Dockerfile in your repository

## Post-Deployment Setup

### 1. Initial Ghost Setup

1. Visit `https://your-app.onrender.com/ghost/`
2. Create admin account
3. Complete Ghost setup wizard

### 2. Activate Theme

1. Go to Ghost Admin → Design
2. Activate "Journal" theme (with Macintosh 1984 styling)
3. Or upload the custom `macintosh-1984-clean` theme

### 3. Configure Site Settings

1. **General Settings**:
   - Site title: "Macintosh 1984"
   - Description: Your preferred description
   - Site icon: Upload a Mac icon
   - Accent color: `#000000` (black)

2. **Design Settings**:
   - Upload brand colors
   - Set navigation menu
   - Configure footer

## Important Notes

### Database Persistence
- Render's free tier databases may have limitations
- Consider upgrading to paid plans for production use
- Backup your database regularly

### File Storage
- Render's ephemeral filesystem means uploaded images won't persist
- Consider using:
  - Cloudinary for image storage
  - AWS S3 for file storage
  - Ghost's built-in Unsplash integration

### Performance Optimization

1. **Enable Caching**:
   ```json
   {
     "caching": {
       "frontend": {
         "maxAge": 604800
       }
     }
   }
   ```

2. **CDN Setup**: Use Render's global CDN or Cloudflare

### Custom Domain

1. In Render Dashboard → Your Service → Settings
2. Add custom domain
3. Update `url` in config and environment variables
4. Configure DNS records

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Verify package.json dependencies
   - Review build logs

2. **Database Connection**:
   - Verify environment variables
   - Check database service status
   - Ensure correct connection format

3. **Theme Issues**:
   - Verify theme files are included
   - Check theme validation
   - Review Ghost logs

### Debugging

View logs in Render Dashboard:
```bash
# Or locally with Ghost CLI
ghost log
```

### Health Checks

Render automatically monitors:
- HTTP response codes
- Response times  
- Custom health check endpoint

## Cost Estimates

### Free Tier Limitations:
- Web Service: 750 hours/month
- Database: Limited storage
- Automatic sleep after 15min inactivity

### Paid Plans:
- **Starter ($7/month)**: No sleep, custom domains
- **Standard ($25/month)**: More resources, better performance
- **Pro ($85/month)**: High performance, priority support

## Security Considerations

1. **Environment Variables**: Never commit secrets to git
2. **Database Security**: Use strong passwords
3. **HTTPS**: Enabled by default on Render
4. **Ghost Updates**: Keep Ghost updated for security

## Backup Strategy

1. **Database Backups**:
   ```bash
   # Export from Ghost admin
   # Or use mysqldump
   ```

2. **Theme Backups**: Keep in git repository

3. **Content Backups**: Regular exports from Ghost admin

## Support Resources

- [Render Documentation](https://render.com/docs)
- [Ghost Documentation](https://ghost.org/docs/)
- [Ghost Render Guide](https://ghost.org/docs/install/render/)

---

Need help? Check the Render logs and Ghost documentation for specific error messages.
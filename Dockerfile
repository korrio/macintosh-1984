# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /var/www/ghost

# Create ghost user
RUN addgroup -g 1000 node && \
    adduser -u 1000 -G node -s /bin/sh -D node

# Install Ghost CLI globally
RUN npm install ghost-cli@latest -g

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy Ghost installation and themes
COPY ghost/ ./
COPY macintosh-1984-clean/ ./content/themes/macintosh-1984-clean/

# Set permissions
RUN chown -R node:node /var/www/ghost

# Switch to ghost user
USER node

# Expose port
EXPOSE 2368

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node current/index.js || exit 1

# Start Ghost
CMD ["node", "current/index.js"]
# Use a lightweight base image
FROM nginx:alpine

# Copy the entire website directory to the container's /usr/share/nginx/html directory
COPY . /usr/share/nginx/html/

# Expose port 80 for web traffic
EXPOSE 80

# Use the default Nginx configuration
CMD ["nginx", "-g", "daemon off;"]

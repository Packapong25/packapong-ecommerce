FROM nginxinc/nginx-unprivileged:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website files
COPY index.html /usr/share/nginx/html/
COPY product.html /usr/share/nginx/html/
COPY cart.html /usr/share/nginx/html/
COPY checkout.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY data.js /usr/share/nginx/html/
COPY cart.js /usr/share/nginx/html/

# OpenShift runs containers as non-root, must use port 8080
EXPOSE 8080

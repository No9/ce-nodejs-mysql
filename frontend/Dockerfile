FROM nginx

COPY site.conf /etc/nginx/nginx.conf
WORKDIR /app/static
COPY index.html ./
CMD ["nginx", "-g", "daemon off;"]
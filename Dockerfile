FROM nginx:alpine
COPY v1/ /usr/share/nginx/html/v1/
COPY v2/ /usr/share/nginx/html/v2/
COPY v3/ /usr/share/nginx/html/v3/
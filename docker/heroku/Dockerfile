FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html
COPY nginx_default.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
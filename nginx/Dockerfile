FROM nginx:latest

# Copy the modified Nginx conf
COPY html /usr/share/nginx/html

# Entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]

# CMD to start Nginx
CMD [ "nginx", "-g", "daemon off;"]



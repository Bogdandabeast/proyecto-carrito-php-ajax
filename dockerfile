# Usamos la imagen oficial de PHP con Apache
FROM php:8.2-apache-buster
# Instalamos extensiones necesarias (por ejemplo, MySQL)
RUN apt-get update && apt-get install -y libpng-dev && docker-php-ext-install pdo pdo_mysql mysqli
# Exponer el puerto 80 para Apache
EXPOSE 80

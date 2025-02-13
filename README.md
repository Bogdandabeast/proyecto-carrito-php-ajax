
# Proyecto Carrito José PHP + AJAX

¡Bienvenido al **Proyecto de la 2 Evaluación de Cliente PHP + AJAX**!

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Bogdandabeast/proyecto-carrito-php-ajax.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd proyecto-carrito-php-ajax
   ```
3. Construye y levanta los contenedores Docker:
   ```bash
   docker-compose up --build -d
   ```

## Uso

Para acceder a la aplicación, abre tu navegador y dirígete a [http://localhost:8080](http://localhost:8080).

Para acceder a phpMyAdmin, dirígete a [http://localhost:8081](http://localhost:8081).

## Estructura del Proyecto

```plaintext
├── Enunciado_Proyecto_Integracion.pdf
├── README.md
├── app
│   ├── carrito.php
│   ├── index.php
│   ├── invitado.php
│   ├── login.php
│   ├── registro.php
│   └── usuario.php
├── db
├── docker-compose.yml
└── Dockerfile
```

- **docker-compose.yml**: Archivo de configuración de Docker Compose.
- **app/**: Directorio de archivos web.
- **db/**: Directorio de volúmenes de la base de datos.
- **README.md**: Este archivo.

## Contribuciones

¡Las contribuciones son bienvenidas! Para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commits (`git commit -m 'Añadir nueva feature'`).
4. Envía tus cambios (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.

```




 

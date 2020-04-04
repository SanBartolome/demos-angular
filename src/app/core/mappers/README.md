# Core mappers

En esta carpeta colocaremos nuestras clases de mapeo desde y hacia backend contra nuestro dominio frontend (modelos).

Por conveción, deberemos de tener en cada mapper dos métodos estáticos

1. mapToBackend: mapeo de nuestro modelo hacia el modelo backend
2. mapFromBackend: mapeo de un modelo backend hacia nuestro modelo frontend

> No necesariamente la respuesta de backend tiene q coincidir con nuestro objeto frontend. Un claro ejemplo es la respuesta de una imagen almacenada en Strapi. Strapi responde un objeto completo con la propieda src dentro de él. En nuestro modelo nosotros solo queremos la url así que solamentem mapearíamos 
> miModelo.imageUrl = entidadBackend.imagen.url
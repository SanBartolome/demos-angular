# Core Api

En esta carpeta nosotros colocaremos la implementación de toda interación con servicios backend de nuestra aplicación (strapi) o terceros (google places, firebase) con el objetivo de abstraer los servicios superior (core/services y page.service.ts) de la forma cómo son persistidos los elementos de nuestro dominio.

Esta carpeta también cuenta con una subcarpeta _base la cuál cuenta con una clase RestApi (rest.api.ts) la cuál cuenta con la implementación de un api rest con autenticación.

> Toda api que requiera conexión con un api rest deberá pasar a través de esta clase (extends)  por reusabilidad.

> Si se desea cambiar la url del backend a invocar para un rest api, se deberá cambiar esta url en environment.[project-name].backend.url

> Si se desea usar más de 1 api rest, se deberá sobreescribr la propiedad backendUrl en el método onCreate (este es invocado por RestApi al final de constructor).

Finalmente, por buenas prácticas, toda invocación a un api deberá pasar por los métodos mapToBackend(para mapear nuestro dominio hacia el backend) y mapFromBackend (para mapear el backend hacia nuestro dominio)
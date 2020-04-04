# Core services

En esta carpeta el desarrollador ha de colocar aquellos servicios injectables reutilizables a lo largo de toda la aplicación. Por lo general son servicios CRUD de nuestro domninio.

Por ejemplo:
- TodosService (todos.service.ts): colocaríamos este método en esta carpeta porque queremos tener la capacidad de crear, leer, eliminar y actualizar TODOs en nuestra aplicación, además de interactuar con sus respectivos stores.

El objetivo principal de esta carpeta es abstraer a los consumidores de los servicios de la forma en la cual los elementos persisten, ya sea interacción contra backend y posterior guardado en store y persistencia en localstorage para evitar evitar innecesarias invocaciones duplicadas de backend (por ejm. volver a traer los distritos de lima cuando previamente ya los invoqué). 

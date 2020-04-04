# Core stores

Esta carpeta deberá contene subcarpetas con lo nombres de los stores a usar en nuestra aplicación.

> Un store es una sección del estado de nuestra aplicación. Por ejemplo podemos tener un store de la sesión del usuario, un store de usuarios, un store perfiles, un store de todos, un store de chats, un store de mensajes de chats. En fin, todo aquello en lo que podemos pensar como una tabla en una base de datos o una colección de registros: ES UN STORE.

Cada carpeta store deberá contener 3 archivos esenciales:

- **nombre-store.state.ts**: este archivo comprende la interfaz de un store. Si es un store simple (ie. sesión del usuario donde guardamos el id del usuario logeado) entonces tendrá q representar esa propiedad en su interfaz. Por otro lado si nuestro store es una colección de registros, esta interfaz deberá extender a EntityState< Modelo >. Podremos almacenar estados del store como: datos de paginación, de filtro, elementos seleccionados o una lista de elementos especialmente para una página a través de la propiedad ui de esta interfaz.

- **nombre-store.store.ts**: este archivo contendrá la implementación de nuestro store. Requiere de un decoradore @storeConfig y un constructor vacío.

- **nombre-store.query.ts**: este archivo contiene ne la forma cómo nosotros obtenemos datos de nuestro store. Tiene un constructor que debe contar con un parámetro, el cuál será el store definido previamente. En este archivo colocaremos solo aquellos selectors que sea muy reutilizables a lo largo de nuestra aplicación; esto para evitar sobrecarga al momento de carga inicial o de módulos lazy.

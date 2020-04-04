# Shared

Carpeta que contiene módulos compartidos de funcionales muy reutilizables a lo largo de toda la aplicación. Ejemplo: botones, pipes de formato, directives de color de contenidos.

> Cada componente, pipe o directive definida en sus respectivas carpeta deberá definirse además su propio módulo. Esto con el objetivo de cuando se vayan a usar en alguna página, solamente importar ese componente compartir a través del array _imports_ en el módulo de la página y colocando el módulo del elemento _shared_.

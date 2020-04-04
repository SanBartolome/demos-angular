# Lib helpers

En esta carpeta se colocarán las funciones y clases que funcionen a manera de utilitarios globales que no dependen de una lógica de negocio.

Ejemplo

- **rxjs.helper.ts**: contiene la función _takeUntilDestroy_ la cuál se utiliza para en una suscripción realizada en un componente, desuscribirse cuando el componente es destruido; de esta manera se evitan los _memory leaks_ con observables.
- **url.helper.ts**: contiene la función prependBackendUrl, que sirve para anteponer la ruta de backend a una un relative url. Útil en strapi imágenes ya que este en su respuesta solo envía una url relativa. ie. /uploads/dinjo.png.
- **formatters.helper.ts**: contiene funciones para aplicar formatos y limitar inputs en formularios reactivos. Estas se colocan en el array de validadores al momento de construcción de los _formControls_.

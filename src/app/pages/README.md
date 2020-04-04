# Pages

Páginas de la aplicaciónes cada página deberá ser generada a través del comando:

>ng generate module page-name --routing

Luego:

>ng generate component pages/page-name --changeDetection=OnPush

Estos pasos pueden realizar también a través del IDE Visual Studio Code si se tiene instalado el plugin Angular Schematics.

----------

## Nomenclatura

El nombre de la página tiene la siguiente nomenclatura dependiendo del alcance de la aplicación:
- Si la aplicación es para solo 1 tipo de usuario:
  - page-name
- Si la aplicación es para más de 1 tipo de usuario:
  - [tipo-usuario]-page-name: si la página solo le pertenece a un tipo de usuario
  - common-page-name: si la página puede ser usada en más de 1 tipo de usuario

----------

## Estructura

Cada página, luego de su creación, deberá contar con la siguiente estructura como mínimo:
- page-name-routing.module.ts
- page-name.module.ts
- page-name.component.ts

> El routing nos asegura que la página será cargada a demanda (lazy load).

## Sevices y query

Si la página requiere de selectors (akita query) complejos y lógica en servicios complejas o muy largas (más de 20 líneas), se deberá crear en la página sus respectivos archivos siguiente la nomenclatura de la página:
- **page-name.query.ts**: clase injectable (servicio) que tendría injectado las clases query necesarias para armar el selector complejo.
- **page-name.service.ts**: clase servicio con la lógica compleja a usar en la página. 
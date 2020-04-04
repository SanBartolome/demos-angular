<p align="center">
<br>
  <a href="" rel="noopener">
 <img width=200px src="https://www.cerezaconsulting.com/wp-content/uploads/2020/01/cropped-Cereza@3x-300x65.png" alt="Project logo"></a>
</p>

<h2 align="center">angular-boilerplate</h2>

<div align="center">

</div>

---

<p align="center"> Boilerplate para proyectos Angular en Cereza Consulting.
    <br> 
</p>

## Contenidos

- [Contenidos](#contenidos)
- [Visual Studio Code Extensions <a name = "vscode"></a>](#visual-studio-code-extensions)
- [Librerías](#librer%c3%adas)
- [Consideraciones](#consideraciones)

## Visual Studio Code Extensions <a name = "vscode"></a>

Instalar las siguientes extensiones en el IDE Visual Studio Code

- **Angular Language Service**: autocompletado en HTML
- **Angular Schematis**: Generador de módulos, componentes y demás elementos de Angular desde la interfaz del IDE.
- **Angular Snippets**: Generador de código reutilizable (componentes, directivas, etc)
- **Import cost**: Muestra al desarrollador el costo en KB de utilizar una librería.
- **Prettier - Code formatter**: Da formato al código del desarrollador según las reglas establecidas en el archivo .prettierrc
- **SCSS IntelliSense**: Autocompletado de variables, mixins, funciones scss. Útil para mixins creados para soporte multi navegadores.
- **TSLint**: Indica "warnings" y errores de código según las reglas definidas en el archivo tslint.jsons

## Librerías

Las siguientes librerías son utilizadas en la aplicación

- [Akita Store](<[https://link](https://netbasal.gitbook.io/akita/)>): Manejo de state de la aplicación
- [RxJS](<[https://link](https://rxjs-dev.firebaseapp.com/)>): manejo de asincronía

## Consideraciones

- **Usar siempre ChangeDetectionStrategy.OnPush en los componentes**
- **En lo posible usar pipes para cálculos en templates**
- **En los posible, usar observables en los templates y mostrar el valor actual a través del pipe async**
- **Siempre analizar la posibilidad de realizar lazy loading, tanto de módulos como de componentes**
- **Valores que cambien entre entorno de desarrollo y entorno de producción, se deben colocar en los archivos environment correspondientes**
- **Validar siempre el build de la aplización a través de los comandos _npm run build:stats_ y _npm run analyze_**

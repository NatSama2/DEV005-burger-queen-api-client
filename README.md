<h1>
  <img src="src/assets/logo.png" alt="Logo" width="100" height="100" align="left">
  Burger Queen (API Client)
</h1>
<br>
<br>

# Biendenid@s al repositorio de Irazu y Giselle!

## Índice

* [1. Introducción](#1-introducción)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Diseño](#3-diseño)
* [4. Despliegue](#4-despliegue)
* [5. Historias de usuario](#5-historias-de-usuario)
* [6. Objetivos de aprendizaje](#6-objetivos-de-aprendizaje)

***

## 1. Introducción

El proyecto **"Burguer Queen"** es una aplicación web desarrollada con **React**, que tiene como objetivo facilitar la toma de pedidos en un restaurante de hamburguesas. La aplicación se integra con una API existente para enviar los pedidos a la cocina de manera eficiente.


## 2. Resumen del proyecto

El proyecto consiste en desarrollar la interfaz de un pequeño restaurante de hamburguesas en crecimiento. La aplicación debe permitir a los clientes realizar pedidos a través de una tablet y enviarlos a la cocina para su preparación. El enfoque se divide en dos áreas: la interfaz de usuario (cliente) y la API (servidor). El cliente solicita el desarrollo de la interfaz que se integre con la API existente.

La interfaz debe mostrar dos menús: uno para el desayuno y otro para el resto del día. Cada menú contiene una lista de productos con sus respectivos precios. La aplicación debe permitir a los clientes seleccionar los productos que desean agregar al pedido y mostrar un resumen del pedido en tiempo real, incluyendo el costo total.

El proyecto se centra en aprender a construir una interfaz web utilizando React. Se espera familiarizarse con el concepto de estado de pantalla y cómo cada cambio en el estado se refleja en la interfaz. Además, se abordan diversos objetivos de aprendizaje relacionados con HTML, CSS, JavaScript, control de versiones y centrado en el usuario.


## 3. Diseño

En esta sección se presentan los elementos de diseño utilizados en el proyecto, incluyendo la paleta de colores y los prototipos de alta fidelidad echos en Figma.

### Paleta de colores
<img src="src/assets/Color-Palette.png" alt="Colores" width="300" height="300">

### Proitopo de alta fidelidad

- #### Login:
![Protitopo1](src/assets/prototipo1.png)

- #### Vista principal Mesero:
![Protitopo2](src/assets/prototipo2.png)

- #### Vista principal Chef:
![Protitopo3](src/assets/prototipo3.png)

- #### Vista principal Administrador:
![Protitopo4](src/assets/prototipo4.png)

Para ver todas las vistas de diseños mas detallados, consulta el [enlace](https://www.figma.com/file/quDom3Ke8O8h7obshj9wfW/BurgerClient?type=design&node-id=0-1&mode=design&t=DyfQMHUD65OSPXxk-0)


## 4. Despliegue

El proyecto fue desplegado utilizando Vercel, una plataforma de despliegue que ofrece alojamiento para aplicaciones web estáticas y aplicaciones web que se ejecutan en el servidor. Vercel nos brinda características como escalabilidad automática, rendimiento optimizado y una interfaz intuitiva para facilitar la configuración y administración de los proyectos desplegados. Gracias al uso de Vercel, el despliegue del proyecto se realizó de manera eficiente y confiable.

Para ver el proyecto desplegado, haz clic [aquí](https://burger-queen-client.vercel.app/).

Para ingresar a la aplicación web, utilizarla y verificar su funcionalidad, ingrese con los siguientes datos:

| Rol           | Correo                    | Contraseña |
|---------------|---------------------------|------------|
| Administrador | anita.borg@systers.xyz    | 123456     |
| Administrador | grace.hopper@systers.xyz  | 123456     |
| Mesero        | bestmesero@systers.xyz    | 123456     |
| Chef          | mrchefsin@systers.xyz     | 123456     |

Para ver la Api desplegada clic [aquí](https://burger-queen-api-mock-production-b29d.up.railway.app/).


## 5. Historias de usuario

Durante el desarrollo del proyecto, se trabajarán las siguientes historias de usuario:

- #### Historia de usuario 1: Autenticación de meseros/as
Como meserx, quiero poder ingresar al sistema de pedidos, siempre y cuando se me hayan asignado las credenciales correspondientes. Los criterios de aceptación incluyen acceder a una pantalla de login, ingresar el email y la contraseña, recibir mensajes de error comprensibles en caso de ingresar información incorrecta y poder ingresar al sistema de pedidos si las credenciales son correctas.

- #### Historia de usuario 2: Toma de pedidos por parte de meseros/as
Como meserx, quiero poder tomar el pedido de unx clientx para evitar errores, tener un registro claro de los productos seleccionados y su total, y enviar el pedido a la cocina para su preparación. Los criterios de aceptación incluyen la capacidad de anotar el nombre del clientx, agregar y eliminar productos del pedido, ver un resumen y el total de la compra, enviar el pedido a la cocina y que la aplicación sea funcional y visualmente atractiva en una tablet.

- #### Historia de usuario 3: Visualización de pedidos por parte del jefe de cocina
Como jefx de cocina, quiero poder ver los pedidos de lxs clientxs en orden y marcar aquellos que están listos para ser preparados y servidos. Además, quiero poder ver el tiempo que tomó preparar cada pedido desde que llegó hasta que se completó. Los criterios de aceptación incluyen la visualización ordenada de los pedidos, la capacidad de marcar los pedidos preparados y el registro del tiempo de preparación.

- #### Historia de usuario 4: Visualización de pedidos listos para servir por parte de meseros/as
Como meserx, quiero poder ver los pedidos que están preparados y listos para ser servidos, para poder entregarlos rápidamente a lxs clientxs correspondientes. Los criterios de aceptación incluyen la visualización de un listado de pedidos listos para servir y la capacidad de marcar los pedidos que han sido entregados.

- #### Historia de usuario 5: Administración de trabajadorxs por parte del administrador/a de tienda
Como administrador(a) de tienda, quiero poder gestionar a lxs trabajadorxs de la plataforma para mantener actualizada la información de cada unx. Los criterios de aceptación incluyen la visualización de un listado de trabajadorxs, la capacidad de agregar, eliminar y actualizar datos de lxs trabajadorxs.

- #### Historia de usuario 6: Administración de productos por parte del administrador/a de tienda
Como administrador(a) de tienda, quiero poder gestionar los productos del menú para mantenerlo actualizado. Los criterios de aceptación incluyen la visualización de un listado de productos, la capacidad de agregar, eliminar y actualizar datos de los productos.
<br>
<br>
<br>
Cada historia de usuario tiene su propio conjunto de criterios de aceptación y definición de terminado, los cuales deben cumplirse para considerar la historia completada. A lo largo del desarrollo del proyecto, se realizarán revisiones de código, pruebas unitarias, pruebas de usabilidad y despliegue de la aplicación en cada iteración, asegurando la calidad y el cumplimiento de los objetivos.


## 6. Objetivos de aprendizaje

Durante el desarrollo de este proyecto, se trabajarán y aplicarán los siguientes objetivos de aprendizaje:

### HTML

- Uso de HTML semántico.

### CSS

- Uso de selectores de CSS.
- Modelo de caja (box model): borde, margen, padding.
- Uso de flexbox en CSS.
- Uso de CSS Grid Layout.
- Uso de media queries.

### JavaScript

- Pruebas unitarias (unit tests).
- Pruebas asíncronas.
- Uso de mocks y espías.
- Módulos de ECMAScript (ES Modules).
- Uso de linter (ESLINT).
- Uso de identificadores descriptivos (Nomenclatura y Semántica).

### Control de Versiones (Git y GitHub)

- Instalación y configuración de Git.
- Control de versiones con Git (init, clone, add, commit, status, push, pull, remote).
- Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag).
- Creación de cuenta y repositorios en GitHub, configuración de llaves SSH.
- Despliegue con GitHub Pages.
- Colaboración en GitHub (branches, forks, pull requests, code review, tags).
- Organización en GitHub (projects, issues, labels, milestones, releases).

### HTTP

- Consulta o petición (request) y respuesta (response).
- Cabeceras (headers).
- Cuerpo (body).
- Verbos HTTP.
- Códigos de status de HTTP.
- Encodings y JSON.
- CORS (Cross-Origin Resource Sharing).

### React

- JSX.
- Componentes y propiedades (props).
- Manejo de eventos.
- Listas y keys.
- Renderizado condicional.
- Elevación de estado.
- Hooks.
- CSS modules.
- React Router.

### Bases de datos

- Modelado de datos.

### Centrado en el usuario

- Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro.

### Diseño de producto

- Creación de prototipos de alta fidelidad que incluyan interacciones.
- Seguimiento de los principios básicos de diseño visual.

### Investigación

- Planificación y ejecución de pruebas de usabilidad en distintos niveles de fidelidad de los prototipos.

<br>
Estos objetivos de aprendizaje proporcionarán una sólida base de conocimientos y habilidades en áreas clave como HTML, CSS, JavaScript, control de versiones, HTTP, React y manejo de datos de la API. Además, se fomentará el enfoque en el diseño de producto y la investigación para mejorar la experiencia del usuario y desarrollar prototipos efectivos. Al aplicar estos conocimientos en la construcción de la aplicación web "Burguer Queen", se logrará una combinación de teoría y práctica que fortalecerá la comprensión y las habilidades en el desarrollo de interfaces web.



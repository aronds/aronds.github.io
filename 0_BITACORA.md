## Services
- Data Science
- Data Analysis
- Data Engineering 
- 
- 

## Projects:
- (RDBMS) & Analytics for Tax Services Business 
- Data Viz / Data Storytelling / Dashboard / tableau
- Cyber Attack Predictor
- Gym Analytics
- Taxes fraud predictions
- Machine Learning Predictive model 2

## Blog:
- R Alchemy
- Supercharged EDA: Exploratory Data Analysis on Steroids
- Advanced Data Science
- Cutting-Edge Relational Database Management System for Taxes
- Algoritmos de busqueda y ordenamiento 

---
## Tasks 
- Conjugar y organizar documentos de stylos, principalmete agency.css bootstrap.min.css y styles.css
- Revisar duracion del video de portada. ya que se detiene en sierto punto. generar bucle. 
- Reparar formulario de conacto
- Contador de visitas
- Aceptar cookies, recopilacion de datos de usuarios
- Charbot assistent
-
-
---
# Bitacora
## 8/21/2024:
Realizo un primer push del proyecto para verificar que aun este conectado el git con la rama del proyecto.
la unica complicacion que hubo se genero tras haber modificado el documento README.md directo desde github.
"El error que estás viendo ocurre porque el repositorio remoto tiene cambios que no están en tu repositorio local, y Git no puede combinar los cambios automáticamente durante el push".
Esto se soluciono realizando un "git pull origin main", en donde se abre un documento que de haber errores o enfrentamientos entre archos 
deberian aparecer en este archivo de tipo vim.
Para salir del archivo:
1. presionamos "Esc" para asegurarnos de salir de "i" el modo de insertar.
2. digitamos ":wq" para guardar cambios y salir.
Ya el resto fue todo un exito en la subida de los archivos modificados, los cuales son:
3. Barra de navegacion corregida: la interaccion estava fallando en el "scrolling"  <!-- Dropdown for Other Sites -->
    Origen del error: jQuery y Bootstrap duplicados
    Solucion: 
    <!-- Elimina los duplicados -->
    <!-- <script src="assets/js/jquery.min.js"></script> --> <!-- Eliminado, ya incluimos jQuery -->
    <!-- <script src="assets/js/bootstrap.bundle.min.js"></script> --> <!-- Eliminado, ya incluimos Bootstrap -->
2. Anadimos un vodeo al fondo de la pagina y agregamos el estilo .video-background

3. Por otra parte se avanzo en la idea de Data Hunter's Den y se crea la primera version del logo de la marca.

## 8/22/2024

Seguimos aprendiendo cada dia de la solucion de los infitinos errores que aparecen cada dia.
La configuracion del video de fondo junto al container del titulo en el documento styles.css 
```css
.video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* El video se adapta al tamaño de la pantalla */
    z-index: -1; /* Envía el video al fondo */
}

.container {
    position: relative;
    z-index: 1; /* Asegura que el contenido esté encima del video */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Asegura que el contenido esté centrado verticalmente */
    text-align: center;
    color: #fff;
}
```
en la propiedad "z-index" el valor -1 para el video indica que este pasara a segundo plano,y el valor 1 para el container significa que el container vendra al frente. Ayer por la tarde pase varias horas intentanto colocar el container sobre el video pero por mas que modificada el codifo nada funcionaba. 
- origen del error: multiple documentos css con codigo reduntante. y el enlace del documento index.html estava haciendo referencia al documento agency.css"
```html
    <!-- Custom styles for this theme -->
    <link href="assets/css/agency.css" rel="stylesheet" />
    <!--estilo del link hacia github, desde el modal-->
    <link rel="stylesheet" href="assets/css/custom.css">
</head>
```
- solucion : Definir styles.css como documento principal y pulirlo.
```html   
    <link href="assets/css/style.css" rel="stylesheet" />
```
Como ultimo progreso del dia avanzamos en organizar y limpiar la Jerarquía de los Archivos CSS ya que existen varios archivos .css gestionando el estilo de mismos elementos. Existe redundancia entre lo archivos apuntando a mismos elementos.
* 		# agency.css
		# agency.css.map
		# all.min.css
		# bootstrap.min.css
		# bootstrap.min.css.map
		# custom.css
		# styles.css
Y definimos el archivo principal que se llama en el documento principal. index.html. En este caso:

```html
<!-- Custom styles for this theme -->
<link href="assets/css/agency.css" rel="stylesheet" />  
```
Posteriormente le cambiaremos el nombre al alchivo a "styles.css"
por ahora solo migramos bloques de codigo como body, header.masthead h1, h2, h3, h4, h5, h6, entre otros.

Tambien estructuramos los bloques de texto de bienvenida dentro de "header" en index.html y sus respectivos estilos en los archivos agency.css
```html
    <div class="container-intro-tex">
        <div class="intro-text">
            <div class="intro-lead-in ">
              <p>Welcome to my Studio!</p>
            </div>
            <div class="intro-heading text-uppercase">
                <p>TURNING YOUR DATA INTO INSIGHTS</p>
            </div>
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
    </div>
```
Aun no se finaliza esta parte porque configurando intro-lead-in p, .intro-text e intro-heading en el archivo agency.css no logro darle el espacio o margen deceado.
Incluso incrementando parametros como "border-bottom: 80px;". Quizas existe otros elemento hacoendo interferencia producto de la desorganizacion de mis archivos de stilos.

## 8/24/2021

1. Ahora me percato que las paginas de los servicios (datas_cience.html, data_analysis.html, etc) presentan error en la lectura de los estilos, por ende las paginas estan desconfiguradas.
- origen error: Aun no solucionamos las incongruencias en los archivos css
- solucion : estandarizar archivos css

2. Eliminamos el antiguo archivo styles.css, sin antes migrar con exito todas los metodos.

3. Logramos darle el espacio deceado a los textos de la introduccion, solo agregando y definiendo un numero alto de pixeles para ver el cambio:
```css
header.masthead .intro-text .intro-heading p {
    margin: 280px; /*Ajustar para ajustarla distancia entre los textos de la introduccion*/
}
```

## 8/25/2024
Solucion de reduncancia en codigo:
header.masthead .container-intro-tex 
.container-intro-tex 
header.masthead .intro-text
header.masthead .intro-heading p 
header.masthead .intro-lead-in p 




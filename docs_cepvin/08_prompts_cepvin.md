# Bitácora de Prompts y Uso de IA

## promt 1 

> "necesito que redactes un promt para usarlo en copilot de vscode.
> lo que necesito que haga esta ia es que me construya una aplicacion web en react vite, estilizado con tailwind css y con una carpeta con documentos que serán renderizados mediante un componente react ubicado en "src/components/", los documentos deberan estar vacios porque yo me encargare de eso mas tarde.
> para redactar el promt alinéate con las instrucciones de las fuentes y quiero que el promt este enfocado únicamente a lo que te he detallado con respecto a lo es react"

use notebooklm y le adjunte como fuentes las instrucciones y la rubrica de la evaluación 

lo use para que copilot me generara la aplicación en react directamente en vscode y asi evitar errores e incongruencias mas adelante 

acepte completamente la respuesta que me dio, lo que buscaba era un promt inicial que abarcara todo lo necesario para que la aplicación funcionara sin dejar afuera detalles importantes


## promt 2 

> "Actúa como un experto en React y Vite. Necesito que estructures la base de mi aplicación web llamada informe_cepvin siguiendo estos requerimientos técnicos y de nomenclatura:
> Configuración de Estilos y Recursos: Configura el proyecto para utilizar Tailwind CSS y la librería Lucide React para la iconografía.
> Carpeta de Documentos: Crea una carpeta en la raíz del proyecto llamada docs_cepvin/. Dentro de ella, genera los siguientes 8 archivos Markdown (.md) completamente vacíos:
> 01_resumen_cepvin.md
> 02_marco_cepvin.md
> 03_delitos_cepvin.md
> 04_comparacion_cepvin.md
> 05_responsabilidades_cepvin.md
> 06_datos_cepvin.md
> 07_conclusiones_cepvin.md
> 08_prompts_cepvin.md
> Componentes React: En la ruta src/components/, crea un componente .jsx para cada uno de los archivos anteriores. Estos componentes deben estar preparados para renderizar el contenido de sus respectivos archivos Markdown. Los nombres de los archivos deben ser: Resumen.jsx, Marco.jsx, Delitos.jsx, Comparacion.jsx, Responsabilidades.jsx, Datos.jsx, Conclusiones.jsx y Prompts.jsx.
> Componente Principal: Configura el archivo src/App.jsx para importar estos 8 componentes y organizar una interfaz de navegación fluida y profesional utilizando las clases de Tailwind CSS."

use en github copilot la respuesta del promt 1

para generar la aplicación en react configurado para usar tailwind , la capeta de los documentos y los componentes para cada documento 

todo se genero bien a excepción de la carpeta donde deben estar ubicados los documentos .md, asi que lo genere por mi cuenta 


## promt 3 

> "tengo un problema, resulta que subi todo el trabajo a mi repositorio en github, luego cree un proyecto en versel al cual importe mi repositorio, oero al desplegarlo me dio el siguiente error:
> Command "npm run build" exited with 126"

copilot elimino la carpeta node_modules del repositorio y creo .gitignore para que la aplicación pudiera desplegarse correctamente en versel mantuve todos los cambios ya que lo la solución fue efectiva 


## promt 4

> "bien en base a todas las fuentes actuales quiero que me redactes un resumen ejecutivo del caso que hable de qué pasó, cuándo, quiénes y el impacto que tuvo este caso, nada mas de lo que te he detallado basándote en las instrucciones.
> IMPORTANTE necesito que de aquí en adelante todo el contenido que te pida redactar lo hagas en lenguaje markdown a menos que yo te especifique lo contrario, además al momento de generar el contenido solicitado omite colocar las fuentes enumeradas (los corchetes al final de cada linea) no es necesario y además no tiene sentido en mi informe final, también quiero que me entregues todo en un bloque de código para asi yo copiar y pegarlos en los archivos que tengo preparado para cada parte de este informe."

dentro del chat del promt 1 en notebooklm agregue 5 fuentes adicionales:
"Internet Estaba A Semanas Del Desastre y Nadie Lo Sabía", un video de Verisatium un canal de divulgación científica que trataba sobre el caso de xz utils y jia tan
XZ Utils backdoor - Wikipedia, la información en Wikipedia sobre el caso 
¿Quién es Jia Tan, el misterioso hacker de XZ Utils?, un articulo en wired.com un foro de ciencias 
y loa artículos de las leyes 19628 y 21459 publicados en la pagina de la Biblioteca del Congreso Nacional

acepte todo el contenido que genero y con el resto de archivos simplemente le pedi que continuara con las indicaciones que le había dado a excepción del séptimo y octavo archivo


## promt 5

> "ok consideremos el séptimo archivo como el ultimo que generaras ya que para el octavo no es necesario que redactes nada, este ultimo archivo tratara sobre recomendaciones de seguridad y reflexión final del análisis, pero quiero que únicamente por el momento me entregues recomendaciones ya que quiero dar mi propia reflexión, cuando te entregue mi reflexión lo juntaras todo para redactarlo con el formato markdown."

acepte completamente las recomendaciones ya que estas se alinearon con parte de la reflexión que ya tenia pensada, luego le escribí mi reflexión final sobre el caso y junto ambas partes en un mismo bloque, la respuesta final cambio ligeramente la redacción de mi reflexión pero mantuvo intacta las ideas que entregue, dejo abajo la reflexión que entregue a notebooklm:

> "hay 2 cosas que me llaman bastante la atención sobre este caso:
> primero el como fue presionado Lasse Collin para ceder el desarrollo y mantención de xz utils, me pongo en el lugar de el y me imagino lo estresante que debe haber sido para el haber dedicado tanto tiempo a un proyecto sin ningún tipo de remuneración y además recibir constantemente mensajes presionándolo para entregar actualizaciones, es comprensible el porque cedió con tanta facilidad el mando del proyecto a "Jia Tan" entendiendo además que detrás de esto había todo un plan perfectamente estructurado, creo que esto es una muestra clara de debemos darle mas importancia a las personas que trabajan arduamente en desarrollar herramientas que de una u otra manera nos facilitan el uso de la tecnologia y debemos buscar maneras de recompensarlos para que no pierdan interés y evitar la frustración.
> Lo segundo que me llama la atención es como un plan tan sofisticado que se ejecuto sigilosamente fue detectado solo porque a un programador de Microsoft que estaba haciendo pruebas en postgresql le pareció raro una ralentización de tan solo 0.5 segundos y no se quedo tranquilo hasta averiguar de que se trataba, me causa gracia que un ataque tan meticuloso se vio frustrado por alguien igual de meticuloso y comprometido con su trabajo y de no ser por esa persona la toda la red mundial se hubiera vulnerada gravemente."
 

# Tipificación de Delitos: Análisis bajo la Ley 21.459

El incidente de XZ Utils representa una ejecución delictiva premeditada y de alta sofisticación. Aplicando la legislación chilena (Ley 21.459 sobre Delitos Informáticos), las acciones del actor "Jia Tan" se encuadran en los siguientes tipos penales:

## 1. Ataque a la Integridad de un Sistema (Artículo 1°)
**Artículo:** "El que obstaculice o impida el normal funcionamiento, total o parcial, de un sistema informático, a través de la introducción, alteración o supresión de datos informáticos".

**Mapeo de la acción:**
Jia Tan obstaculizó el funcionamiento normal del cifrado RSA en OpenSSH. Al utilizar "IFUNC resolvers" para secuestrar la función `RSA_public_decrypt`, alteró el proceso de autenticación legítimo del sistema. Esta manipulación técnica desvió el flujo operativo hacia una subrutina maliciosa, impidiendo que el protocolo SSH operara bajo los parámetros de seguridad configurados por el administrador.

## 2. Acceso Ilícito (Artículo 2°)
**Artículo:** "El que, sin autorización o excediendo la autorización que posea y superando barreras técnicas o medidas tecnológicas de seguridad, acceda a un sistema informático".

**Mapeo de la acción:**
La implementación del *backdoor* tenía como fin último facilitar un acceso no autorizado. La creación de una "llave maestra" (basada en la clave privada Ed448) permitía la ejecución remota de código (RCE). Esta acción demuestra el ánimo de superar las medidas tecnológicas de seguridad (autenticación RSA) para obtener privilegios de administrador y apoderarse de la información contenida en los servidores afectados.

## 3. Falsificación Informática (Artículo 5°)
**Artículo:** "El que indebidamente introduzca, altere, dañe o suprima datos informáticos con la intención de que sean tomados como auténticos o utilizados para generar documentos auténticos".

**Mapeo de la acción:**
Este delito se perfeccionó mediante dos maniobras clave:
*   **Manipulación de archivos de prueba:** La inserción de código malicioso oculto dentro de "blobs" binarios de prueba, diseñados para parecer datos basura inofensivos ante la revisión humana.
*   **Alteración del proceso de compilación:** La modificación del archivo `build-to-host.m4` (incluido en las distribuciones comprimidas o *tarballs* pero no en el repositorio Git). 
Ambas acciones buscaban que datos maliciosos fueran tomados como auténticos por los sistemas de gestión de paquetes y los desarrolladores, eludiendo deliberadamente los controles de versiones.

## 4. Abuso de los Dispositivos (Artículo 8°)
**Artículo:** "El que para la perpetración de los delitos previstos en los artículos 1° a 4°... entregare, difundiera o realizare otra forma de puesta a disposición de programas computacionales creados o adaptados principalmente para la perpetración de dichos delitos".

**Mapeo de la acción:**
Jia Tan no solo vulneró un sistema, sino que adaptó y difundió una biblioteca fundamental (XZ Utils versiones 5.6.0 y 5.6.1) convirtiéndola en un dispositivo lógico de ataque masivo. Al distribuir este software comprometido (CVE-2024-3094) con un puntaje de criticidad CVSS 10.0, el atacante puso a disposición de su organización una herramienta diseñada principalmente para el sabotaje y el acceso ilícito a escala global.

## Resumen de Ejecución Criminal

| Acción Técnica | Hallazgo Legal | Artículo Ley 21.459 |
| :--- | :--- | :--- |
| Secuestro de la función RSA en OpenSSH | Obstaculización del sistema | Art. 1° |
| Creación de "llave maestra" Ed448 para RCE | Intento de acceso ilícito | Art. 2° |
| Inserción de *blobs* y *scripts* ocultos | Engaño y falsificación de datos | Art. 5° |
| Distribución de biblioteca infectada | Difusión de programas para delinquir | Art. 8° |

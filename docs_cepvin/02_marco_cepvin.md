# Marco Normativo: Leyes y Regulaciones Aplicables

El análisis legal del incidente de "XZ Utils" se fundamenta en un ecosistema normativo que abarca tanto la legislación nacional chilena como tratados y estándares internacionales. Dado que se trata de un ataque a la cadena de suministro de software con alcance transnacional, su persecución y tipificación requieren el uso de las siguientes cuatro normas:

## 1. Marco Normativo Nacional (Chile)

### Ley 21.459: Normas sobre Delitos Informáticos
Esta ley, promulgada en 2022 para adecuar la legislación chilena al Convenio de Budapest, es la piedra angular para sancionar las acciones de "Jia Tan". Su aplicación es imperativa para castigar el sabotaje realizado al sistema de autenticación OpenSSH y la alteración maliciosa de la biblioteca *liblzma*. Esta norma permite perseguir conductas como el ataque a la integridad de sistemas y el acceso ilícito a infraestructuras críticas que operan bajo suelo nacional.

### Ley 19.628: Sobre Protección de la Vida Privada
Aunque el ataque tuvo una naturaleza técnica, su objetivo final permitía el acceso administrativo a servidores que procesan datos de carácter personal. La aplicación de esta ley se justifica por el riesgo inminente de tratamiento ilícito de datos sensibles en organismos públicos y estratégicos. La vulneración del deber de secreto y la seguridad de la información establecida en esta norma fundamenta la responsabilidad civil y administrativa de quienes no resguardaron adecuadamente la integridad de las bases de datos afectadas.

## 2. Marco Normativo Internacional

### Convenio de Budapest (Convenio sobre la Ciberdelincuencia)
Como tratado internacional ratificado por Chile, el Convenio de Budapest es esencial para abordar el carácter transfronterizo del caso XZ Utils. Su aplicación es fundamental para activar mecanismos de cooperación internacional y asistencia mutua (Artículos 28 y 29), permitiendo la recolección de evidencia electrónica y la persecución de un actor malicioso que opera desde zonas horarias remotas. Sin este marco, la atribución y sanción de un ataque originado fuera de las fronteras nacionales sería jurídicamente inalcanzable.

### Estándares CISA y NIST (Seguridad de la Cadena de Suministro)
Aunque no son leyes en sentido estricto, las guías de la Agencia de Seguridad de Infraestructura y Ciberseguridad (CISA) y el Instituto Nacional de Estándares y Tecnología (NIST) sirven como marco de referencia para determinar la **debida diligencia**. Estos estándares internacionales se utilizan en este análisis para evaluar si existió una gestión negligente por parte de las organizaciones al permitir una infiltración de dos años. Establecen el nivel de cuidado exigible en la auditoría de dependencias de software y la validación de contribuciones de terceros en proyectos de código abierto.

## Resumen de Aplicabilidad

| Norma | Ámbito | Justificación Técnica |
| :--- | :--- | :--- |
| **Ley 21.459** | Nacional (Penal) | Sanción de delitos de sabotaje y acceso ilícito. |
| **Ley 19.628** | Nacional (Civil) | Protección de datos personales y derechos ARCO. |
| **Convenio de Budapest** | Internacional | Cooperación jurídica para delitos transnacionales. |
| **NIST / CISA** | Internacional (Estándar) | Evaluación de negligencia en cadena de suministro. |

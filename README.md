# Corhuan - Automatización de Formato Operacional en Google Sheets

##  Descripción del proyecto

Este proyecto contiene un conjunto de scripts desarrollados en **Google Apps Script** para automatizar el llenado de un formato de control operacional utilizado por la empresa **Corhuan**.  
El sistema extrae datos de varias hojas dentro del mismo libro de cálculo (`BASE`, `HS`, `AYER`, `HOY`) y los consolida en una hoja llamada `FORMATO`, calculando automáticamente:

- Nombres del personal a partir del DNI.
- Horas de sueño.
- Hora de inicio y fin de jornada (con fechas).
- Total de horas trabajadas.
- Generación de PDF del formato listo para imprimir.

##  Funcionalidades principales

- **Actualización automática** al editar una celda en la columna A (DNI) dentro de los rangos definidos.
- **Menú personalizado** `Corhuan Tools` que permite:
  - Actualizar todos los datos manualmente.
  - Imprimir cada uno de los tres bloques del formato en PDF.
- **Manejo de excepciones** para evitar errores cuando faltan datos o las hojas no existen.
- **Código modular** y refactorizado aplicando principios de código limpio.

##  Tecnologías utilizadas

- Google Apps Script (JavaScript)
- Google Sheets API (integrada)
- HTML para la ventana de impresión

##  Estructura de archivos

| Archivo | Descripción |
|---------|-------------|
| `Config.gs` | Configuración global (nombres de hojas, rangos, bloques) |
| `Utils.gs` | Funciones auxiliares (formateo de tiempo, validaciones) |
| `DataLoader.gs` | Carga y procesamiento de datos desde las hojas BASE, HS, AYER, HOY |
| `Formatter.gs` | Lógica principal de llenado del formato |
| `OnEdit.gs` | Trigger que ejecuta la actualización automática al editar |
| `Print.gs` | Generación de PDF mediante URL de exportación |
| `Menu.gs` | Creación del menú personalizado en la interfaz de Sheets |

##  Requisitos previos

- Tener una cuenta de Google.
- Poseer un libro de Google Sheets con las siguientes hojas exactamente nombradas:
  - `FORMATO`
  - `BASE`
  - `HS`
  - `AYER`
  - `HOY`
- Las hojas deben tener la estructura de datos esperada (ver notas de uso).

##  Instalación y uso

1. Abre tu libro de Google Sheets.
2. Ve a **Extensiones → Apps Script**.
3. Crea un nuevo proyecto y copia cada uno de los archivos `.gs` en el editor (puedes copiar y pegar el contenido de este repositorio).
4. Guarda el proyecto y actualiza la hoja de cálculo.
5. Recarga la página y aparecerá el menú **Corhuan Tools**.
6. Usa el menú para:
   - **Actualizar todos los datos**: llena el formato completo.
   - **Imprimir bloque 1 / 2 / 3**: genera el PDF del bloque correspondiente.

##  Notas sobre la estructura de datos

- **Hoja BASE**: columnas B = DNI, C = Nombre completo.
- **Hoja HS**: columna C = DNI, columna O = minutos de sueño (número o texto).
- **Hoja AYER y HOY**: columnas C = DNI, E = fecha (AAAA-MM-DD), F = hora (HH:MM).
- **Hoja FORMATO**: columna A = DNI (desde fila 21 hasta 40, 77 hasta 97, 135 hasta 154).

##  Uso de Inteligencia Artificial Generativa

Este proyecto fue desarrollado con asistencia de **ChatGPT (OpenAI)** para:
- Refactorizar el código original (monolítico) en módulos reutilizables.
- Implementar manejo de excepciones con `try...catch`.
- Generar la documentación y este README.
- Sugerir buenas prácticas de código limpio.

El uso de IA permitió acelerar el desarrollo, mejorar la mantenibilidad y reducir errores.

##  Autor

**Diego Lauciata**  
Proyecto académico para el curso *Construcción de Software*.

##  Licencia

Este proyecto es de uso educativo y no tiene una licencia específica.

##  Enlaces

- [Repositorio en GitHub](https://github.com/diegolauciata-dot/corhuan-sheets-automation)
- [Video explicativo (YouTube)]() 

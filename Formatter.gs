{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red21\green98\blue39;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red24\green25\blue27;\red186\green6\blue115;\red77\green80\blue85;\red162\green0\blue16;
\red191\green28\blue37;\red18\green115\blue126;}
{\*\expandedcolortbl;;\cssrgb\c7451\c45098\c20000;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c12549\c12941\c14118;\cssrgb\c78824\c15294\c52549;\cssrgb\c37255\c38824\c40784;\cssrgb\c70196\c7843\c7059;
\cssrgb\c80392\c19216\c19216;\cssrgb\c3529\c52157\c56863;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 /**\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * Actualiza una fila en la hoja FORMATO con los datos correspondientes.\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 actualizarFilaFormato\cf4 \strokec4 (\cf6 \strokec6 fila\cf4 \strokec4 , \cf6 \strokec6 dni\cf4 \strokec4 , \cf6 \strokec6 mapaBase\cf4 \strokec4 , \cf6 \strokec6 mapaHS\cf4 \strokec4 , \cf6 \strokec6 mapaAyer\cf4 \strokec4 , \cf6 \strokec6 mapaHoy\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 hojaFormato\cf4 \strokec4  = \cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 HOJAS\cf4 \strokec4 .\cf7 \strokec7 FORMATO\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf8 \strokec8 // Nombre\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 hojaFormato\cf4 \strokec4 .\cf6 \strokec6 getRange\cf4 \strokec4 (\cf6 \strokec6 fila\cf4 \strokec4 , \cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 COLUMNAS\cf4 \strokec4 .\cf7 \strokec7 NOMBRE\cf4 \strokec4 ).\cf6 \strokec6 setValue\cf4 \strokec4 (\cf6 \strokec6 mapaBase\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ] || \cf9 \strokec9 ""\cf4 \strokec4 );\cb1 \
\
\cb3     \cf8 \strokec8 // Sue\'f1o\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 celdaSue\cf10 \strokec10 \'f1\cf6 \strokec6 o\cf4 \strokec4  = \cf6 \strokec6 hojaFormato\cf4 \strokec4 .\cf6 \strokec6 getRange\cf4 \strokec4 (\cf6 \strokec6 fila\cf4 \strokec4 , \cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 COLUMNAS\cf4 \strokec4 .\cf7 \strokec7 SUE\cf10 \strokec10 \'d1\cf7 \strokec7 O\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 mapaHS\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ]) \{\cb1 \
\cb3       \cf6 \strokec6 celdaSue\cf10 \strokec10 \'f1\cf6 \strokec6 o\cf4 \strokec4 .\cf6 \strokec6 setValue\cf4 \strokec4 (\cf6 \strokec6 minutosAFormatoHora\cf4 \strokec4 (\cf6 \strokec6 mapaHS\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ]));\cb1 \
\cb3     \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3       \cf6 \strokec6 celdaSue\cf10 \strokec10 \'f1\cf6 \strokec6 o\cf4 \strokec4 .\cf6 \strokec6 setValue\cf4 \strokec4 (\cf9 \strokec9 "0:00"\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf8 \strokec8 // Inicio\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 celdaInicio\cf4 \strokec4  = \cf6 \strokec6 hojaFormato\cf4 \strokec4 .\cf6 \strokec6 getRange\cf4 \strokec4 (\cf6 \strokec6 fila\cf4 \strokec4 , \cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 COLUMNAS\cf4 \strokec4 .\cf7 \strokec7 INICIO\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 mapaAyer\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ]) \{\cb1 \
\cb3       \cf6 \strokec6 celdaInicio\cf4 \strokec4 .\cf6 \strokec6 setValue\cf4 \strokec4 (\cf9 \strokec9 `\cf4 \strokec4 $\{\cf6 \strokec6 mapaAyer\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ].\cf6 \strokec6 fecha\cf4 \strokec4 \}\cf9 \strokec9  \cf4 \strokec4 $\{\cf6 \strokec6 mapaAyer\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ].\cf6 \strokec6 hora\cf4 \strokec4 \}\cf9 \strokec9 `\cf4 \strokec4 );\cb1 \
\cb3     \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3       \cf6 \strokec6 celdaInicio\cf4 \strokec4 .\cf6 \strokec6 setValue\cf4 \strokec4 (\cf9 \strokec9 ""\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf8 \strokec8 // Fin\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 celdaFin\cf4 \strokec4  = \cf6 \strokec6 hojaFormato\cf4 \strokec4 .\cf6 \strokec6 getRange\cf4 \strokec4 (\cf6 \strokec6 fila\cf4 \strokec4 , \cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 COLUMNAS\cf4 \strokec4 .\cf7 \strokec7 FIN\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 mapaHoy\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ]) \{\cb1 \
\cb3       \cf6 \strokec6 celdaFin\cf4 \strokec4 .\cf6 \strokec6 setValue\cf4 \strokec4 (\cf9 \strokec9 `\cf4 \strokec4 $\{\cf6 \strokec6 mapaHoy\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ].\cf6 \strokec6 fecha\cf4 \strokec4 \}\cf9 \strokec9  \cf4 \strokec4 $\{\cf6 \strokec6 mapaHoy\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ].\cf6 \strokec6 hora\cf4 \strokec4 \}\cf9 \strokec9 `\cf4 \strokec4 );\cb1 \
\cb3     \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3       \cf6 \strokec6 celdaFin\cf4 \strokec4 .\cf6 \strokec6 setValue\cf4 \strokec4 (\cf9 \strokec9 ""\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf8 \strokec8 // Total (diferencia entre fin e inicio)\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 celdaTotal\cf4 \strokec4  = \cf6 \strokec6 hojaFormato\cf4 \strokec4 .\cf6 \strokec6 getRange\cf4 \strokec4 (\cf6 \strokec6 fila\cf4 \strokec4 , \cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 COLUMNAS\cf4 \strokec4 .\cf7 \strokec7 TOTAL\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 mapaHoy\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ] && \cf6 \strokec6 mapaAyer\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ]) \{\cb1 \
\cb3       \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 tInicio\cf4 \strokec4  = \cf6 \strokec6 fechaHoraAMinutos\cf4 \strokec4 (\cf9 \strokec9 `\cf4 \strokec4 $\{\cf6 \strokec6 mapaAyer\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ].\cf6 \strokec6 fecha\cf4 \strokec4 \}\cf9 \strokec9  \cf4 \strokec4 $\{\cf6 \strokec6 mapaAyer\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ].\cf6 \strokec6 hora\cf4 \strokec4 \}\cf9 \strokec9 `\cf4 \strokec4 );\cb1 \
\cb3       \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 tFin\cf4 \strokec4  = \cf6 \strokec6 fechaHoraAMinutos\cf4 \strokec4 (\cf9 \strokec9 `\cf4 \strokec4 $\{\cf6 \strokec6 mapaHoy\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ].\cf6 \strokec6 fecha\cf4 \strokec4 \}\cf9 \strokec9  \cf4 \strokec4 $\{\cf6 \strokec6 mapaHoy\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ].\cf6 \strokec6 hora\cf4 \strokec4 \}\cf9 \strokec9 `\cf4 \strokec4 );\cb1 \
\cb3       \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 diferencia\cf4 \strokec4  = \cf6 \strokec6 tFin\cf4 \strokec4  - \cf6 \strokec6 tInicio\cf4 \strokec4 ;\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 diferencia\cf4 \strokec4  >= \cf11 \strokec11 0\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf6 \strokec6 celdaTotal\cf4 \strokec4 .\cf6 \strokec6 setValue\cf4 \strokec4 (\cf6 \strokec6 minutosAFormatoHora\cf4 \strokec4 (\cf6 \strokec6 diferencia\cf4 \strokec4 ));\cb1 \
\cb3       \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3         \cf6 \strokec6 celdaTotal\cf4 \strokec4 .\cf6 \strokec6 setValue\cf4 \strokec4 (\cf9 \strokec9 "0:00"\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3       \cf6 \strokec6 celdaTotal\cf4 \strokec4 .\cf6 \strokec6 setValue\cf4 \strokec4 (\cf9 \strokec9 ""\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \} \cf5 \strokec5 catch\cf4 \strokec4  (\cf6 \strokec6 error\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf6 \strokec6 console\cf4 \strokec4 .\cf6 \strokec6 error\cf4 \strokec4 (\cf9 \strokec9 `Error actualizando fila \cf4 \strokec4 $\{\cf6 \strokec6 fila\cf4 \strokec4 \}\cf9 \strokec9  para DNI \cf4 \strokec4 $\{\cf6 \strokec6 dni\cf4 \strokec4 \}\cf9 \strokec9 : \cf4 \strokec4 $\{\cf6 \strokec6 error\cf4 \strokec4 .\cf6 \strokec6 message\cf4 \strokec4 \}\cf9 \strokec9 `\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 throw\cf4 \strokec4  \cf6 \strokec6 error\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 /**\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * Procesa todos los bloques de la hoja FORMATO.\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 procesarTodosLosBloques\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 hojaFormato\cf4 \strokec4  = \cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 HOJAS\cf4 \strokec4 .\cf7 \strokec7 FORMATO\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 mapaBase\cf4 \strokec4  = \cf6 \strokec6 cargarMapaBase\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 mapaHS\cf4 \strokec4  = \cf6 \strokec6 cargarMapaHS\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 mapaAyer\cf4 \strokec4  = \cf6 \strokec6 cargarMapaFechaHora\cf4 \strokec4 (\cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 HOJAS\cf4 \strokec4 .\cf7 \strokec7 AYER\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 mapaHoy\cf4 \strokec4  = \cf6 \strokec6 cargarMapaFechaHora\cf4 \strokec4 (\cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 HOJAS\cf4 \strokec4 .\cf7 \strokec7 HOY\cf4 \strokec4 );\cb1 \
\
\cb3   \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 bloque\cf4 \strokec4  \cf5 \strokec5 of\cf4 \strokec4  \cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 BLOQUES\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 rangoDNI\cf4 \strokec4  = \cf6 \strokec6 hojaFormato\cf4 \strokec4 .\cf6 \strokec6 getRange\cf4 \strokec4 (\cf9 \strokec9 `A\cf4 \strokec4 $\{\cf6 \strokec6 bloque\cf4 \strokec4 .\cf6 \strokec6 inicio\cf4 \strokec4 \}\cf9 \strokec9 :A\cf4 \strokec4 $\{\cf6 \strokec6 bloque\cf4 \strokec4 .\cf6 \strokec6 fin\cf4 \strokec4 \}\cf9 \strokec9 `\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 dnis\cf4 \strokec4  = \cf6 \strokec6 rangoDNI\cf4 \strokec4 .\cf6 \strokec6 getValues\cf4 \strokec4 ().\cf6 \strokec6 map\cf4 \strokec4 (\cf6 \strokec6 row\cf4 \strokec4  => \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 row\cf4 \strokec4 [\cf11 \strokec11 0\cf4 \strokec4 ]).\cf6 \strokec6 trim\cf4 \strokec4 ());\cb1 \
\cb3     \cb1 \
\cb3     \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 let\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf11 \strokec11 0\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 dnis\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 dni\cf4 \strokec4  = \cf6 \strokec6 dnis\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ];\cb1 \
\cb3       \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 fila\cf4 \strokec4  = \cf6 \strokec6 bloque\cf4 \strokec4 .\cf6 \strokec6 inicio\cf4 \strokec4  + \cf6 \strokec6 i\cf4 \strokec4 ;\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 dni\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf8 \strokec8 // Limpiar todas las columnas de datos (C a J)\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 limpiarRango\cf4 \strokec4 (\cf6 \strokec6 hojaFormato\cf4 \strokec4 , \cf6 \strokec6 fila\cf4 \strokec4 , \cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 COLUMNAS\cf4 \strokec4 .\cf7 \strokec7 NOMBRE\cf4 \strokec4 , \cf11 \strokec11 1\cf4 \strokec4 , \cf11 \strokec11 8\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 continue\cf4 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\cb3       \cf6 \strokec6 actualizarFilaFormato\cf4 \strokec4 (\cf6 \strokec6 fila\cf4 \strokec4 , \cf6 \strokec6 dni\cf4 \strokec4 , \cf6 \strokec6 mapaBase\cf4 \strokec4 , \cf6 \strokec6 mapaHS\cf4 \strokec4 , \cf6 \strokec6 mapaAyer\cf4 \strokec4 , \cf6 \strokec6 mapaHoy\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
}
{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red21\green98\blue39;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red24\green25\blue27;\red186\green6\blue115;\red162\green0\blue16;\red18\green115\blue126;
}
{\*\expandedcolortbl;;\cssrgb\c7451\c45098\c20000;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c12549\c12941\c14118;\cssrgb\c78824\c15294\c52549;\cssrgb\c70196\c7843\c7059;\cssrgb\c3529\c52157\c56863;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww29200\viewh15080\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 /**\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * Carga el mapa de DNI -> nombre desde BASE.\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 cargarMapaBase\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 hojaBase\cf4 \strokec4  = \cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 HOJAS\cf4 \strokec4 .\cf7 \strokec7 BASE\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 datos\cf4 \strokec4  = \cf6 \strokec6 hojaBase\cf4 \strokec4 .\cf6 \strokec6 getRange\cf4 \strokec4 (\cf8 \strokec8 "B2:C"\cf4 \strokec4 ).\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 mapa\cf4 \strokec4  = \{\};\cb1 \
\cb3   \cf6 \strokec6 datos\cf4 \strokec4 .\cf6 \strokec6 forEach\cf4 \strokec4 (\cf6 \strokec6 row\cf4 \strokec4  => \{\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 dni\cf4 \strokec4  = \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 0\cf4 \strokec4 ]).\cf6 \strokec6 trim\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 nombre\cf4 \strokec4  = \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 1\cf4 \strokec4 ]).\cf6 \strokec6 trim\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 dni\cf4 \strokec4 ) \cf6 \strokec6 mapa\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ] = \cf6 \strokec6 nombre\cf4 \strokec4 ;\cb1 \
\cb3   \});\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 mapa\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 /**\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * Carga el mapa de DNI -> minutos de sue\'f1o desde HS.\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 cargarMapaHS\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 hojaHS\cf4 \strokec4  = \cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf7 \strokec7 CONFIG\cf4 \strokec4 .\cf7 \strokec7 HOJAS\cf4 \strokec4 .\cf7 \strokec7 HS\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 datos\cf4 \strokec4  = \cf6 \strokec6 hojaHS\cf4 \strokec4 .\cf6 \strokec6 getDataRange\cf4 \strokec4 ().\cf6 \strokec6 getValues\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 mapa\cf4 \strokec4  = \{\};\cb1 \
\cb3   \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 let\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 datos\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 fila\cf4 \strokec4  = \cf6 \strokec6 datos\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ];\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 dni\cf4 \strokec4  = \cf7 \strokec7 String\cf4 \strokec4 (\cf6 \strokec6 fila\cf4 \strokec4 [\cf9 \strokec9 2\cf4 \strokec4 ]).\cf6 \strokec6 trim\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 rawMin\cf4 \strokec4  = \cf6 \strokec6 fila\cf4 \strokec4 [\cf9 \strokec9 14\cf4 \strokec4 ];\cb1 \
\cb3     \cf5 \strokec5 let\cf4 \strokec4  \cf6 \strokec6 minutos\cf4 \strokec4  = \cf9 \strokec9 0\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 rawMin\cf4 \strokec4  === \cf8 \strokec8 "number"\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 minutos\cf4 \strokec4  = \cf6 \strokec6 rawMin\cf4 \strokec4 ;\cb1 \
\cb3     \} \cf5 \strokec5 else\cf4 \strokec4  \cf5 \strokec5 if\cf4 \strokec4  (\cf5 \strokec5 typeof\cf4 \strokec4  \cf6 \strokec6 rawMin\cf4 \strokec4  === \cf8 \strokec8 "string"\cf4 \strokec4  && \cf6 \strokec6 rawMin\cf4 \strokec4 .\cf6 \strokec6 trim\cf4 \strokec4 () !== \cf8 \strokec8 ""\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 minutos\cf4 \strokec4  = \cf6 \strokec6 parseFloat\cf4 \strokec4 (\cf6 \strokec6 rawMin\cf4 \strokec4 .\cf6 \strokec6 replace\cf4 \strokec4 (\cf8 \strokec8 ","\cf4 \strokec4 , \cf8 \strokec8 "."\cf4 \strokec4 ));\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (!\cf6 \strokec6 dni\cf4 \strokec4  || \cf6 \strokec6 isNaN\cf4 \strokec4 (\cf6 \strokec6 minutos\cf4 \strokec4 ) || \cf6 \strokec6 minutos\cf4 \strokec4  <= \cf9 \strokec9 0\cf4 \strokec4 ) \cf5 \strokec5 continue\cf4 \strokec4 ;\cb1 \
\cb3     \cf6 \strokec6 mapa\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ] = \cf6 \strokec6 minutos\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 mapa\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 /**\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * Carga el mapa de DNI -> \{fecha, hora\} desde la hoja especificada.\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  * Se asume que los datos comienzan en C6:F (\'edndices 0: DNI, 2: fecha, 3: hora).\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  */\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 cargarMapaFechaHora\cf4 \strokec4 (\cf6 \strokec6 hojaNombre\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 hoja\cf4 \strokec4  = \cf6 \strokec6 getSheetByName\cf4 \strokec4 (\cf6 \strokec6 hojaNombre\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 datos\cf4 \strokec4  = \cf6 \strokec6 hoja\cf4 \strokec4 .\cf6 \strokec6 getRange\cf4 \strokec4 (\cf8 \strokec8 "C6:F"\cf4 \strokec4 ).\cf6 \strokec6 getDisplayValues\cf4 \strokec4 ();\cb1 \
\cb3   \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 mapa\cf4 \strokec4  = \{\};\cb1 \
\cb3   \cf6 \strokec6 datos\cf4 \strokec4 .\cf6 \strokec6 forEach\cf4 \strokec4 (\cf6 \strokec6 row\cf4 \strokec4  => \{\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 dni\cf4 \strokec4  = \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 0\cf4 \strokec4 ].\cf6 \strokec6 trim\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 fecha\cf4 \strokec4  = \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 2\cf4 \strokec4 ].\cf6 \strokec6 trim\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 const\cf4 \strokec4  \cf6 \strokec6 hora\cf4 \strokec4  = \cf6 \strokec6 row\cf4 \strokec4 [\cf9 \strokec9 3\cf4 \strokec4 ].\cf6 \strokec6 trim\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 dni\cf4 \strokec4  && \cf6 \strokec6 fecha\cf4 \strokec4  && \cf6 \strokec6 hora\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf6 \strokec6 mapa\cf4 \strokec4 [\cf6 \strokec6 dni\cf4 \strokec4 ] = \{ \cf6 \strokec6 fecha\cf4 \strokec4 , \cf6 \strokec6 hora\cf4 \strokec4  \};\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 mapa\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
}
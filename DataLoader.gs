function cargarMapaBase() {
  try {
    const hoja = getHoja(CONFIG.HOJAS.BASE);
    const datos = hoja.getRange("B2:C").getValues();
    const mapa = {};
    datos.forEach(row => {
      const dni = String(row[0]).trim();
      const nombre = String(row[1]).trim();
      if (dni) mapa[dni] = nombre;
    });
    return mapa;
  } catch (error) {
    console.error("Error en cargarMapaBase: " + error.message);
    return {};
  }
}

function cargarHorasSueño() {
  try {
    const hoja = getHoja(CONFIG.HOJAS.HS);
    const datos = hoja.getDataRange().getValues();
    const mapa = {};
    for (let i = 1; i < datos.length; i++) {
      const fila = datos[i];
      const dni = String(fila[2]).trim();
      let minutos = fila[14];
      if (typeof minutos === "string") minutos = parseFloat(minutos.replace(",", "."));
      if (dni && !isNaN(minutos) && minutos > 0) {
        mapa[dni] = minutos;
      }
    }
    return mapa;
  } catch (error) {
    console.error("Error en cargarHorasSueño: " + error.message);
    return {};
  }
}

function cargarHorarios(hojaNombre, columnaFecha = 4, columnaHora = 5) {
  try {
    const hoja = getHoja(hojaNombre);
    const datos = hoja.getRange("C6:F").getDisplayValues();
    const mapa = {};
    datos.forEach(row => {
      const dni = row[0].trim();
      const fecha = row[2].trim();
      const hora = row[3].trim();
      if (dni && fecha && hora) {
        mapa[dni] = { fecha, hora };
      }
    });
    return mapa;
  } catch (error) {
    console.error(`Error en cargarHorarios (${hojaNombre}): ` + error.message);
    return {};
  }
}

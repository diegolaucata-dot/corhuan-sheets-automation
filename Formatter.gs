function actualizarFormatoCompleto() {
  const hojaFormato = getHoja(CONFIG.HOJAS.FORMATO);
  const mapaBase = cargarMapaBase();
  const mapaHS = cargarHorasSueno();
  const mapaAyer = cargarHorarios(CONFIG.HOJAS.AYER);
  const mapaHoy = cargarHorarios(CONFIG.HOJAS.HOY);

  for (const bloque of CONFIG.BLOQUES) {
    const dnis = hojaFormato.getRange(`A${bloque.inicio}:A${bloque.fin}`).getValues().map(r => String(r[0]).trim());
    for (let i = 0; i < dnis.length; i++) {
      const dni = dnis[i];
      const fila = bloque.inicio + i;
      if (!dni) {
        hojaFormato.getRange(fila, 3, 1, 8).clearContent();
        continue;
      }
      hojaFormato.getRange(fila, 3).setValue(mapaBase[dni] || "");
      const celdaSueno = hojaFormato.getRange(fila, 10);
      if (mapaHS[dni]) {
        celdaSueno.setFormula(`="${minutosAHHMM(mapaHS[dni])}"`);
      } else {
        celdaSueno.setValue("0:00");
      }
      const celdaInicio = hojaFormato.getRange(fila, 7);
      if (mapaAyer[dni]) {
        celdaInicio.setFormula(`="${mapaAyer[dni].fecha} ${mapaAyer[dni].hora}"`);
      } else {
        celdaInicio.setValue("");
      }
      const celdaFin = hojaFormato.getRange(fila, 8);
      if (mapaHoy[dni]) {
        celdaFin.setFormula(`="${mapaHoy[dni].fecha} ${mapaHoy[dni].hora}"`);
      } else {
        celdaFin.setValue("");
      }
      const celdaTotal = hojaFormato.getRange(fila, 9);
      if (mapaAyer[dni] && mapaHoy[dni]) {
        const textoInicio = `${mapaAyer[dni].fecha} ${mapaAyer[dni].hora}`;
        const textoFin = `${mapaHoy[dni].fecha} ${mapaHoy[dni].hora}`;
        const diff = calcularDiferenciaMinutos(textoInicio, textoFin);
        if (diff >= 0) {
          celdaTotal.setFormula(`="${minutosAHHMM(diff)}"`);
        } else {
          celdaTotal.setValue("0:00");
        }
      } else {
        celdaTotal.setValue("");
      }
    }
  }
}

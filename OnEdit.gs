function onEdit(e) {
  const hoja = e.source.getActiveSheet();
  const fila = e.range.getRow();
  const columna = e.range.getColumn();

  const esFormato = hoja.getName() === CONFIG.HOJAS.FORMATO;
  const filaValida = CONFIG.BLOQUES.some(b => fila >= b.inicio && fila <= b.fin);
  if (esFormato && columna === 1 && filaValida) {
    actualizarFormatoCompleto();
  }
}

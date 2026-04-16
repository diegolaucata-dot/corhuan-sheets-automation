function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("Corhuan Tools");
  menu.addItem("Actualizar todos los datos", "actualizarFormatoCompleto");
  menu.addSeparator();
  menu.addItem("Imprimir bloque 1", "imprimirFormato1");
  menu.addItem("Imprimir bloque 2", "imprimirFormato2");
  menu.addItem("Imprimir bloque 3", "imprimirFormato3");
  menu.addToUi();
}

function imprimirRango(nombreHoja, rangoA1) {
  try {
    const hoja = getHoja(nombreHoja);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const id = ss.getId();
    const gid = hoja.getSheetId();

    const exportUrl = `https://docs.google.com/spreadsheets/d/${id}/export?format=pdf&size=A4&portrait=false&fitw=true` +
      `&sheetnames=false&printtitle=false&pagenum=UNDEFINED&gridlines=false&fzr=false` +
      `&gid=${gid}&range=${rangoA1}&horizontal_alignment=LEFT&vertical_alignment=TOP&top_margin=0.50&bottom_margin=0.50&left_margin=0.50&right_margin=0.50&scale=4`;

    const html = `<html><script>window.open("${exportUrl}", "_blank");google.script.host.close();</script></html>`;
    const ui = HtmlService.createHtmlOutput(html).setWidth(100).setHeight(50);
    SpreadsheetApp.getUi().showModalDialog(ui, "Imprimir PDF");
  } catch (error) {
    console.error("Error al imprimir: " + error.message);
    SpreadsheetApp.getUi().alert("No se pudo generar el PDF. Verifica que la hoja y el rango existan.");
  }
}

function imprimirFormato1() { imprimirRango("FORMATO", "B2:P55"); }
function imprimirFormato2() { imprimirRango("FORMATO", "B59:P112"); }
function imprimirFormato3() { imprimirRango("FORMATO", "B116:P168"); }

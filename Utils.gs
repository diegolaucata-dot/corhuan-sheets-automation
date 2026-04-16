function getHoja(nombre) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName(nombre);
  if (!hoja) throw new Error(`Hoja "${nombre}" no encontrada`);
  return hoja;
}

function minutosAHHMM(minutos) {
  if (isNaN(minutos) || minutos <= 0) return "0:00";
  const h = Math.floor(minutos / 60).toString().padStart(2, "0");
  const m = Math.round(minutos % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

function calcularDiferenciaMinutos(fechaHoraInicio, fechaHoraFin) {
  const [fecha1, hora1] = fechaHoraInicio.split(" ");
  const [fecha2, hora2] = fechaHoraFin.split(" ");
  const [a1, m1, d1] = fecha1.split("-").map(Number);
  const [hh1, mm1] = hora1.split(":").map(Number);
  const [a2, m2, d2] = fecha2.split("-").map(Number);
  const [hh2, mm2] = hora2.split(":").map(Number);
  const inicio = new Date(a1, m1-1, d1, hh1, mm1);
  const fin = new Date(a2, m2-1, d2, hh2, mm2);
  return (fin - inicio) / (1000 * 60);
}

function validarDNI(dni) {
  if (!dni || typeof dni !== 'string') return false;
  return /^\d{8}$/.test(dni.trim());
}

function registrarError(mensaje) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let logHoja = ss.getSheetByName("LOG");
    if (!logHoja) {
      logHoja = ss.insertSheet("LOG");
      logHoja.getRange("A1:C1").setValues([["Timestamp", "Funcion", "Mensaje"]]);
    }
    const ahora = new Date();
    const funcion = registrarError.caller ? registrarError.caller.name : "desconocida";
    logHoja.appendRow([ahora, funcion, mensaje]);
  } catch (e) {
    console.error("No se pudo registrar error en hoja LOG: " + e.message);
  }
}

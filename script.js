function calcularAmoniaco() {
    let amonTotal = parseFloat(document.getElementById("amonTotal").value);
    let ph = parseFloat(document.getElementById("ph").value);
    let temp = parseFloat(document.getElementById("temp").value);

    if (isNaN(amonTotal) || isNaN(ph) || isNaN(temp)) {
        document.getElementById("resultado").innerHTML = "⚠️ Ingresa valores válidos en todos los campos.";
        return;
    }

    let pKa = 0.09018 + (2729.92 / (temp + 273.15));
    let fraccionNoIonizada = 1 / (1 + Math.pow(10, (pKa - ph)));
    let amoniacoNoIonizado = amonTotal * fraccionNoIonizada;

    let mensaje = "";
    if (amoniacoNoIonizado < 0.02) {
        mensaje = "🟢 Seguro – No representa riesgo para los peces";
    } else if (amoniacoNoIonizado >= 0.02 && amoniacoNoIonizado < 0.05) {
        mensaje = "🟡 Precaución – Monitorear con frecuencia y mejorar la calidad del agua";
    } else if (amoniacoNoIonizado >= 0.05 && amoniacoNoIonizado < 0.2) {
        mensaje = "🟠 Peligro Moderado – Puede generar estrés en los peces, tomar acciones correctivas";
    } else {
        mensaje = "🔴 Peligro Alto – Nivel tóxico, requiere intervención inmediata";
    }

    document.getElementById("resultado").innerHTML = `<b>Amoniaco No Ionizado:</b> ${amoniacoNoIonizado.toFixed(4)} mg/L<br>${mensaje}`;
}

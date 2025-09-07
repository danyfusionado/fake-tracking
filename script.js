document.getElementById('tracking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const trackingNumber = document.getElementById('tracking-number').value;
    const resultDiv = document.getElementById('tracking-result');

    // Simular una respuesta de seguimiento
    resultDiv.innerHTML = `
        <p>Número de seguimiento: <strong>${trackingNumber}</strong></p>
        <p>Estado del envío: <span style="color: green;">En camino</span></p>
        <p>Detalles: Su envío está siendo transportado y se espera que llegue en los próximos 2-3 días hábiles.</p>
    `;
});

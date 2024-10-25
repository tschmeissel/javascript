// Überprüfen, ob der Browser Web Worker unterstützt
if (window.Worker) {
  // Den Web Worker initialisieren
  const worker = new Worker('worker.js');

  // Funktion zum Empfangen der Nachricht vom Worker
  worker.onmessage = function(event) {
    console.log('Die Summe ist:', event.data);
  };

  // Nachricht an den Worker senden (z. B. die Zahl 1000000)
  worker.postMessage(1000000);

  console.log("Web Worker gestartet");
} else {
  console.log("Web Worker wird in diesem Browser nicht unterstützt.");
}

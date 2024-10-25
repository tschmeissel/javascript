// Die Schleife berechnet die Summe der Zahlen von 0 bis zu einer gegebenen Zahl
self.onmessage = function(event) {
  const max = event.data;
  let sum = 0;
  for (let i = 0; i <= max; i++) {
    sum += i;
  }
  // Sendet das Ergebnis zurück zum Hauptthread
  postMessage(sum);
};

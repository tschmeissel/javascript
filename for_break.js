const TRESHOLD1= Math.ceil(Math.random() * 100);
const TRESHOLD2= Math.ceil(Math.random() * 100);
for (let i = 0; i < 100; i++) {
	//console.log("counter i", i);
    if (i == TRESHOLD1) {
		console.log("break i");
        break;
    }
	
	for (let j = 0; j < 100; j++) {
		//console.log("counter j", j);
		if (j == TRESHOLD1) {
			console.log("break j");
			break;
		}
	}
}
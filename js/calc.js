"use strict";

function inputClick(value) {
	var viewValue = document.getElementById("view").value; 						//pobieramy wartość danego pola
	if (value != "AC" && value != "=" && value != ".") { 						//sprawdzamy czy ta wartość jest różna od AC, =,.
		document.getElementById("view").value += value; 						// jeżeli tak, dodajemy wartość, w sensie ostatniego elementu stringa
	}
	else if (value == "AC") { 													//jeżeli to AC, ustawiamy warunek dla AC 
		document.getElementById("view").value = ""; 							// nadpisujemy string pustym stringiem
	}
	else if (value == ".") { 													//jeżeli to ., ustawiamy warunek dla .
		if (viewValue.slice(-1) != ".") { 										// jeżeli ostatni znak stringa jest różny od .
			document.getElementById("view").value += value; 					//dodajemy wartość na koniec stringa
		}
	}
	
	else { 																		//jeżeli znak równa się 
		if (isNaN(viewValue.slice(-1)) || viewValue.indexOf("/0") > -1) {		//jeżeli ostatni znak stringa nie jest liczbą (isNaN) albo jest 																		próbą dzielenia przez zero
			document.getElementById("view").value = "Error";					//wyświetl "Error"
		}
		
		else {																	//w przeciwnym razie
		document.getElementById("view").value = eval(viewValue);				//wartość pola jest wynikiem działania w nim wpisanego
			}
		}		
	}


//czy gdziekolwiek jest dzielenie przez zero

//		if (typeof viewValue.slice(-1) != "number"  ) {
//			document.getElementById("view").value = "Error";
let joueur = "X";

function desactiverBoutons() {
	const b1 = document.getElementById("1");
	const b2 = document.getElementById("2");
	const b3 = document.getElementById("3");
	const b4 = document.getElementById("4");
	const b5 = document.getElementById("5");
	const b6 = document.getElementById("6");
	const b7 = document.getElementById("7");
	const b8 = document.getElementById("8");
	const b9 = document.getElementById("9");
	
	b1.disabled = true;
	b2.disabled = true;
	b3.disabled = true;
	b4.disabled = true;
	b5.disabled = true;
	b6.disabled = true;
	b7.disabled = true;
	b8.disabled = true;
	b9.disabled = true;
}

function reinit() {
	const b1 = document.getElementById("1");
	const b2 = document.getElementById("2");
	const b3 = document.getElementById("3");
	const b4 = document.getElementById("4");
	const b5 = document.getElementById("5");
	const b6 = document.getElementById("6");
	const b7 = document.getElementById("7");
	const b8 = document.getElementById("8");
	const b9 = document.getElementById("9");
	
	b1.value = "";
	b2.value = "";
	b3.value = "";
	b4.value = "";
	b5.value = "";
	b6.value = "";
	b7.value = "";
	b8.value = "";
	b9.value = "";
	b1.disabled = false;
	b2.disabled = false;
	b3.disabled = false;
	b4.disabled = false;
	b5.disabled = false;
	b6.disabled = false;
	b7.disabled = false;
	b8.disabled = false;
	b9.disabled = false;
}

function montrerGagnant(gagnant) {
	desactiverBoutons();
	
  alert(`Le ${gagnant} est vicorieux`);
}
/*
function montrerMatchNul() {
	desactiverBoutons();
	
	alert("C'est un match nul");
}
*/
function verifierStatut() {
	const b1 = document.getElementById("1").value;
	const b2 = document.getElementById("2").value;
	const b3 = document.getElementById("3").value;
	const b4 = document.getElementById("4").value;
	const b5 = document.getElementById("5").value;
	const b6 = document.getElementById("6").value;
	const b7 = document.getElementById("7").value;
	const b8 = document.getElementById("8").value;
	const b9 = document.getElementById("9").value;
	
	if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
		//1er rangeé 
        montrerGagnant(b1);
    } else if (((b1=="X") || (b1 == "O")) && ((b1 == b4) && (b4 == b7))) {
        //1er colonne
		montrerGagnant(b1);
    } else if (((b9=="X") || (b9 == "O")) && ((b9 == b8) && (b8 == b7))) {
        //3éme rangeé
		montrerGagnant(b9);
    } else if (((b9=="X") || (b9 == "O")) && ((b9 == b6) && (b6 == b3))) {
		//3emé colonne
		montrerGagnant(b9);
    } else if (((b4=="X") || (b4 == "O")) && ((b4 == b5) && (b5 == b6))) {
		//2emé rangeé
		montrerGagnant(b4);
    } else if (((b2=="X") || (b2 == "O")) && ((b2 == b5) && (b5 == b8))) {
		//2emé colonne
		montrerGagnant(b2);
    } else if (((b1=="X") || (b1 == "O")) && ((b1 == b5) && (b5 == b9))) {
		//Diagonale gauche
		montrerGagnant(b1);
    } else if (((b7=="X") || (b7 == "O")) && ((b7 == b5) && (b5 == b3))) {
		//Diagonale droite
		montrerGagnant(b7);
    }
}

function insererJoueur(b, joueur) {
	switch (b) {
		case 1: {
			const bouton = document.getElementById("1");
			bouton.value = joueur;
			bouton.disabled = true;
			break;
    }
		case 2: {
			const bouton = document.getElementById("2");
			bouton.value = joueur;
			bouton.disabled = true;
			break;
    }
		case 3: {
			const bouton = document.getElementById("3");
			bouton.value = joueur;
			bouton.disabled = true;
			break;
    }
		case 4: {
			const bouton = document.getElementById("4");
			bouton.value = joueur;
			bouton.disabled = true;
			break;
    }
		case 5: {
			const bouton = document.getElementById("5");
			bouton.value = joueur;
			bouton.disabled = true;
			break;
    }
		case 6: {
			const bouton = document.getElementById("6");
			bouton.value = joueur;
			bouton.disabled = true;
			break;
    }
		case 7: {
			const bouton = document.getElementById("7");
			bouton.value = joueur;
			bouton.disabled = true;
			break;
    }
		case 8: {
			const bouton = document.getElementById("8");
			bouton.value = joueur;
			bouton.disabled = true;
			break;
    }
		case 9: {
			const bouton = document.getElementById("9");
			bouton.value = joueur;
			bouton.disabled = true;
			break;
    }
	}
	verifierStatut();
}

function principal(bouton) {
	if (joueur === "X") {
		joueur = "O";
		insererJoueur(bouton, joueur);
		
	} else if (joueur === "O") {
		joueur = "X";
		insererJoueur(bouton, joueur);
	}
}

document.getElementById("submit").addEventListener('click',function math(e) {

    e.preventDefault(); // Sert a empecher le refresh

    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);
    
    if ( isNaN(firstNumber) ) {
        document.getElementById("errorFirstNumber").innerHTML ="Erreur dans la saisie du premier nombre";
    } else if (isNaN(secondNumber)) {
        document.getElementById("errorSecondNumber").innerHTML="Erreur dans la saisie du second nombre";
    }
    else {
        let result = firstNumber % secondNumber;
        document.getElementById("errorFirstNumber").innerHTML="";
        document.getElementById("errorSecondNumber").innerHTML="";        
        document.getElementById("resultBox").innerHTML = "Le reste de la division des deux nombres est " + result;
    }




})


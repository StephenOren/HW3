origArray = [2,3,4];


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("cube").addEventListener("click", function () {
        let Cube = origArray.map(Cubed)
        let x = document.getElementById("box1").value = Cube[0];
        let y = document.getElementById("box2").value = Cube[1];
        let z = document.getElementById("box3").value = Cube[2];

    });
    document.getElementById("ToTheFourth").addEventListener("click", function () {
        myFourth();
    });
});



function Square () {
    let squared = origArray.map(Squared)
    document.getElementById("box1").value = squared[0];
    document.getElementById("box2").value = squared[1];
    document.getElementById("box3").value = squared[2];
    
}

function Squared (number) {
    return number * number;
}

function Cubed (number1) {
    return number1 * number1 * number1;
}

function myFourth () {
    let fourth = origArray.map(fourthPower)
    document.getElementById("box1").value = fourth[0];
    document.getElementById("box2").value = fourth[1];
    document.getElementById("box3").value = fourth[2];
}
function fourthPower (number2) {
    return number2 * number2 * number2 * number2;
}
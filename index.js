





function bmiCalci() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const output = document.getElementById("result");

    let bmi = (weight / ((height*height) / 10000)).toFixed(1)

if (bmi < 18.5) {
    output.innerText = bmi + ":You are underweight"
}else if (bmi > 18.6 && bmi < 24.9){
    output.innerText = bmi + ":You are of healthy weight"

}else {
    output.innerText = bmi + ":You are overweight"
}


if (height == "" || weight == "") {
    output.innerText = "Invalid Height or weight"
}
}

function refresh() {
    window.location.reload();
}
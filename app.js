//when submit btn is clicked
document.getElementById("degree-form").addEventListener("submit", function (e) {
    //hide results
    document.getElementById("results").style.display = "none";
    //show loader
    document.getElementById("loading").style.display = "block";
    setTimeout(calculateResults, 1500);
    e.preventDefault();

});

function calculateResults() {

    //getting all the fields
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitField = document.getElementById("fahrenheit");
    const kelvinField = document.getElementById("kelvin");

    const celsius = parseFloat(celsiusInput.value);
    fahrenheitField.value = celsius * 1.8 + 32;
    kelvinField.value = celsius + 273.15;

    //show results
    document.getElementById("results").style.display = "block";
    //hide loader
    document.getElementById("loading").style.display = "none";

}
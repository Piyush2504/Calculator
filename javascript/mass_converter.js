var mass_input = document.getElementById("mass_in") ;
var mass_output= document.getElementById("mass_out");
var mass_inputval = document.getElementById("mass_confrom");
var mass_outputval = document.getElementById("mass_conto");
var mass_inputTypeValue,mass_outputTypeValue;
mass_inputval.onclick("change",mass_eval);
mass_outputval.onclick("change",mass_eval);
function mass_eval(){

    mass_inputTypeValue=mass_inputval.value;
    mass_outputTypeValue=mass_outputval.value;
    var x =math.evaluate(mass_input.value + mass_inputTypeValue + " to " + mass_outputTypeValue);
    mass_output.value=parseFloat(x).toFixed(8);
}
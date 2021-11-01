var curr_input = document.getElementById("curr_in");
var curr_output = document.getElementById("curr_out");
var curr_inputval = document.getElementById("curr_confrom");
var curr_outputval = document.getElementById("curr_conto");
var curr_inputTypeValue, curr_outputTypeValue;
curr_inputval.onclick("change", curr_eval);
curr_outputval.onclick("change", curr_eval);

function curr_eval() {

    curr_inputTypeValue = curr_inputval.value;
    curr_outputTypeValue = curr_outputval.value;
    var z = fx(curr_input.value).from(curr_inputTypeValue).to(curr_outputTypeValue);
    curr_output.value = parseFloat(z).toFixed(8);
}
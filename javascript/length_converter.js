var length_input = document.getElementById("length_in") ;
var length_output= document.getElementById("length_out");
var length_inputval = document.getElementById("length_confrom");
var length_outputval = document.getElementById("length_conto");
var length_inputTypeValue,length_outputTypeValue;
length_inputval.onclick("change",length_eval);
length_outputval.onclick("change",length_eval);
function length_eval(){

    length_inputTypeValue=length_inputval.value;
    length_outputTypeValue=length_outputval.value;
    var y=math.evaluate(length_input.value + length_inputTypeValue + " to " + length_outputTypeValue);
    length_output.value=parseFloat(y).toFixed(8);
}
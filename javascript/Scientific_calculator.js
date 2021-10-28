function sinsert(snum){
    document.formscalh.historyval.value+=snum;
}
function seql(){
    document.formscalo.outputval.value=math.evaluate(document.formscalh.historyval.value);
}

function sac() {
    document.formscalh.historyval.value = "";
    document.formscalo.outputval.value="";

}

function sdel() {
    var sub =  document.formscalh.historyval.value;
    document.formscalh.historyval.value = sub.substring(0, sub.length - 1);
}
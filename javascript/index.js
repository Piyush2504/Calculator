var md = document.getElementById("mass_div")
var ld = document.getElementById("length_div")
var cd = document.getElementById("curr_div")
var cal = document.getElementById("div_cal")
var scal = document.getElementById("div_scal")

function mass_form() {
    md.style.visibility = "visible";
    ld.style.visibility = "hidden";
    cd.style.visibility = "hidden";

}

function length_form() {
    md.style.visibility = "hidden";
    ld.style.visibility = "visible";
    cd.style.visibility = "hidden";

}

function curr_form() {
    md.style.visibility = "hidden";
    ld.style.visibility = "hidden";
    cd.style.visibility = "visible";

}

function insert(num) {
    document.form_cal.output_cal.value += num;
}

function ac() {
    document.form_cal.output_cal.value = "";
}

function del() {
    var sub = document.form_cal.output_cal.value;
    document.form_cal.output_cal.value = sub.substring(0, sub.length - 1);
}

function eql() {
    var sub = document.form_cal.output_cal.value;
    document.form_cal.output_cal.value = eval(sub);
}

function caltoscal() {
    cal.style.visibility = "hidden";
    scal.style.visibility = "visible";
}

function scaltocal() {
    cal.style.visibility = "visible";
    scal.style.visibility = "hidden";
}
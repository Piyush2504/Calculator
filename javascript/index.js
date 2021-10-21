var md = document.getElementById("mass_div")
var ld = document.getElementById("length_div")
var cd = document.getElementById("curr_div")

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
    document.form.output_cal.value += num;
}

function ac() {
    document.form.output_cal.value = "";
}

function del() {
    var sub = document.form.output_cal.value;
    document.form.output_cal.value = sub.substring(0, sub.length - 1);
}

function eql() {
    var sub = document.form.output_cal.value;
    document.form.output_cal.value = eval(sub);
}
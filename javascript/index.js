var m=document.getElementById("mass_form");
var l=document.getElementById("length_form");
var c=document.getElementById("curr_form");
function mass_form()
{
    m.style.transform="translatex(660px)";
    l.style.transform="translatex(-660px)";
    c.style.transform="translatex(0px)";

}
function length_form()
{
    m.style.transform="translatex(0px)";
    l.style.transform="translatex(0px)";
    c.style.transform="translatex(0px)";

}
function curr_form()
{
    m.style.transform="translatex(0px)";
    l.style.transform="translatex(-330px)";
    c.style.transform="translatex(330px)";

}
function insert(num) {
    document.form.textbox.value += num;
}

function ac() {
    document.form.textbox.value = "";
}

function del() {
    var sub = document.form.textbox.value;
    document.form.textbox.value = sub.substring(0, sub.length - 1);
}

function eql() {
    var sub = document.form.textbox.value;
    document.form.textbox.value = eval(sub);
}

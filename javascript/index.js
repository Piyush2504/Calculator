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
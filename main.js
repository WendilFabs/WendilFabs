function dis(val) {
    document.getElementById('input').value += val;
    document.getElementById('input').focus();
}

function equal() {
    let input = document.getElementById('input').value;
    let output = eval(input);
    document.getElementById('output').value = output;

}

function none() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
}

function numbers(evt) {
    //var ch = String.fromCharCode(evt.which);
    var ch = evt.key;

    if ((/[a-z]/.test(ch))) {
        evt.preventDefault();
    }
}
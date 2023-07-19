function copyFunc() {
    var copyText = document.getElementById("firstPromt");
    copyText.select();
    document.execCommand("copy");
}

function copyFunc2() {
    var copyText = document.getElementById("secondPromt");
    copyText.select();
    document.execCommand("copy");
}
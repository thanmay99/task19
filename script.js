function concat(x, y, result) {
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var a = x + y;
    result(a);
    function result(r) {
        console.log(r);
    }
}

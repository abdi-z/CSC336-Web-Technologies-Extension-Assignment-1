$(document).ready(function(){
    let d = new Date();
 
    function datefunc() {
    document.getElementById("date").innerHTML = `${d.getDate()} / ${
    d.getMonth() + 1
    }/${d.getFullYear()}`;


    }
    $("button").click(function () {datefunc()});
});
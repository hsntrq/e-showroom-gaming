var user = "HasanNaseem";
var pwd = "123456789";
var loggedin = 0;
var rem = 0;
var rem_u;
var rem_p;

function sort(query){
    var curr_query = window.location.href;
    if (curr_query.search("&sort") == -1){
        new_query = curr_query + "&sort="+query;
    }else{
        new_query = curr_query.replace(/(#|)&sort=(name|date|priceh|pricel)/, "&sort="+query);
    }
    window.location.href = new_query;
}

function price(){
    var price_min = document.getElementById("min-price").value;
    var price_max = document.getElementById("max-price").value;
    if (!price_min) price_min=0;
    if (!price_max) price_max=1000000000;
    var curr_query = window.location.href;
    if (curr_query.search("&price") == -1){
        new_query = curr_query + "&price="+price_min+"+"+price_max;
    }else{
        new_query = curr_query.replace(/(#|)price=\d*\+\d*/, "price="+price_min+"+"+price_max);
    }
    window.location.href = new_query;
}
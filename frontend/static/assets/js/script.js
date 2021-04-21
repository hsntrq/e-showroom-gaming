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
    console.log('hello');
    var price_min = document.getElementById("min-price").value;
    var price_max = document.getElementById("max-price").value;
    if (!price_min) price_min=0;
    if (!price_max) price_max=1000000000;
    var curr_query = window.location.href;
    if (curr_query.search("price") == -1){
        new_query = curr_query + "&price="+price_min+"+"+price_max;
    }else{
        new_query = curr_query.replace(/(#|)price=\d*\+\d*/, "price="+price_min+"+"+price_max);
    }
    window.location.href = new_query;
}

$("#login-b").click(function () {
    $("#LoginModal").modal("show");
});
$("#register-m").click(function () {
    $("#LoginModal").modal("hide");
    $("#RegisterModal").modal("show");
});
$("#login-m").click(function () {
    $("#RegisterModal").modal("hide");
    $("#LoginModal").modal("show");
});
$("#post-ad").click(function () {
    window.location.href = "/post";
});
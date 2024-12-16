var productContainer = document.getElementById("product_container");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();
    console.log(enteredValue);

    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("h1").textContent.toUpperCase();
        if (productName.indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});

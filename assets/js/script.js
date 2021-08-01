const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuLinks = document.getElementsByClassName("menu")[0];

toggleButton.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});

$(document).ready(function () {
  $("button[name='submitOrder']").click(function (e) {
    //Prevent buttons default behavior
    e.preventDefault();

    //Display order summary
    $("#order_Summary").removeClass("d-none").slideDown("slow");

    //Declare a few variables
    let size = $("select[name='size'] option:selected");
    let topping = $("select[name='topping'] option:selected");
    let crust = $("select[name='crust'] option:selected");
    let quantity = $("input[name='quantity']").val();
    let od_Size = $("p[name='Size']");
    let od_Topping = $("p[name='Topping']");
    let od_Crust = $("p[name='Crust']");
    let od_Quantity = $("p[name='Quantity']");
    let od_Price = $("p[name='Price']");

    //Map variable values to HTML elements
    od_Size.html("<b> Size: </b>" + size.val());
    od_Topping.html("<b> Topping: </b>" + topping.val());
    od_Crust.html("<b>Crust: </b>" + crust.val());
    od_Quantity.html("<b>Quantity: </b>" + quantity);

    //Generate price totals
    od_Price.html(
      "<b>Total Price </b>" +
        (Number(topping.attr("data-item-price")) +
          Number(crust.attr("data-item-price"))) *
          Number(quantity) +
        " KSh"
    );
  });
  $("button[name='orderBtn']").click(function (e) {
    e.preventDefault();
    $("div[name='checkout']").removeClass("d-none");
  });
  $("button[name='checkout-btn']").click(function (e) {
    e.preventDefault();
    $("div[name='checkout']").hide("fast");
    $("#order_Summary").hide("fast");
    $(".alert").removeClass("d-none");
    $("span[name='customer_name']").html($("input[name='txtName']").val());
  });
});

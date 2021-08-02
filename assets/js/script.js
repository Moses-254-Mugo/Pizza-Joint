const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menuLinks = document.getElementsByClassName("menu")[0];

toggleButton.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});

class Order{
  constructor(size, topping, crust, quantity){
      this.size = size;
      this.topping = topping;
      this.crust = crust;
      this.quantity = quantity;
      this.price = function(){
        return   (Number(this.topping.attr("data-item-price")) +
        Number(this.crust.attr("data-item-price"))) *
        Number(this.quantity.val())
      }
  }
  renderToHTML(order_size, order_topping, order_crust, order_quantity, total_price){
      order_size.html("<b> Size: </b>" + this.size.val());
      order_topping.html("<b> Topping: </b>" + this.topping.val());
      order_crust.html("<b> Crust: </b>" + this.crust.val());
      order_quantity.html("<b> Quantity: </b>" + this.quantity.val());
      total_price.html("<b> Price </b>" + this.price());
  }
}

$(document).ready(function () {
  $("button[name='submitOrder']").click(function (e) {
    //Prevent buttons default behavior
    e.preventDefault();

    //Declare a few variables
    let size = $("select[name='size'] option:selected");
    let topping = $("select[name='topping'] option:selected");
    let crust = $("select[name='crust'] option:selected");
    let quantity = $("input[name='quantity']");

    //Mapping variables
    let od_Size = $("p[name='Size']");
    let od_Topping = $("p[name='Topping']");
    let od_Crust = $("p[name='Crust']");
    let od_Quantity = $("p[name='Quantity']");
    let od_Price = $("p[name='Price']");

    if(quantity.val() == ""){
        alert("Please select the number of pizza that you want")
    }else{
    //Initialize object
    const order = new Order(size, topping, crust, quantity);
      
    //Render order summary to html
    order.renderToHTML(od_Size, od_Topping, od_Crust, od_Quantity, od_Price);

     //Display order summary
     $("#order_Summary").removeClass("d-none").slideDown("slow");
    }
  });
  $("button[name='orderBtn']").click(function (e) {
    e.preventDefault();
    $("div[name='checkout']").removeClass("d-none");
  });
  $("button[name='checkout-btn']").click(function (e) {
    e.preventDefault();
    let name = $("#txtName").val();
    let number = $("#txtNumber").val();
    let location = $("#txtLocation").val();
    if(name == ""){
      alert("Please fill out your name");
    }else{
      if(number == ""){
        alert("Please fill out your phone number");
      }
      if(location == ""){
        alert ("Please fill out your location");
      }
      else{
        $("div[name='checkout']").hide("fast");
        $("#order_Summary").hide("fast");
        $(".alert").removeClass("d-none");
        $("span[name='customer_name']").html($("#txtName").val());
      }
    }
  });

   // function to show when form is submitted
   $("#form-contact").submit(function(){
    alert("Submitted the form");
})
});

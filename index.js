 
var prices = new Array();
prices["FireEngineRed"]=10;
prices["FlamingPink"]=15;
prices["YouCantSeeMeNeutral"]=14;
prices["GrungePlum"]=18;

console.log(prices);

function getTotal()
{
   
    var cartPrice = document.getElementById("lipstickDropDown").value;
 
    document.getElementById("demo").innerHTML =
                                      "Total Price For Lipstick $"+cartPrice;
 
}


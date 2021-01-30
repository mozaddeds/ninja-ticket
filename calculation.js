var firstClassPlus = document.getElementById("firstclassplus").addEventListener("click", function(){

    var firstClassTickets = parseFloat(document.getElementById("firstclassinput").value);
    firstClassTickets += 1;
    document.getElementById("firstclassinput").value = firstClassTickets;

    calculationPlus("subtotal", "vat", "firstclassticketprice", "total");
})



var economyClassPlus = document.getElementById("economyclassplus").addEventListener("click", function(){

    var economyClassTickets = parseFloat(document.getElementById("economyclassinput").value);
    economyClassTickets += 1;
    document.getElementById("economyclassinput").value = economyClassTickets;

    calculationPlus("subtotal", "vat", "economyclassticketprice", "total");
})


var firstClassMinus = document.getElementById("firstclassminus").addEventListener("click", function(){

    var firstClassTickets = parseFloat(document.getElementById("firstclassinput").value);
    
    if (firstClassTickets<=0) {
        firstClassTickets = 0;
    }

    else {
        firstClassTickets -= 1; 
    }

    document.getElementById("firstclassinput").value = firstClassTickets;

    calculationMinus("firstclassticketprice", "subtotal", "vat", "total");

})


var economyClassMinus = document.getElementById("economyclassminus").addEventListener("click", function(){

    var economyClassTickets = parseFloat(document.getElementById("economyclassinput").value);
    
    if (economyClassTickets<=0) {
        
        economyClassTickets = 0;
    }

    else {
        economyClassTickets -= 1; 
    }

    document.getElementById("economyclassinput").value = economyClassTickets;

    calculationMinus("economyclassticketprice", "subtotal", "vat", "total");

})

function calculationPlus(id1, id2, id3, id4) {
    var subTotal = parseFloat(document.getElementById(id1).innerText);

    var firstClassTicketPrice = parseFloat(document.getElementById(id3).innerText);

    subTotal = subTotal + firstClassTicketPrice;

    var vat = subTotal*0.1;

    var total = subTotal+vat;

    document.getElementById(id1).innerText = subTotal;

    document.getElementById(id2).innerText = vat;

    document.getElementById(id4).innerText = total;
}

function calculationMinus(id1, id2, id3, id4) {

    var firstClassTicketPrice = parseFloat(document.getElementById(id1).innerText);

    var subTotal = parseFloat(document.getElementById(id2).innerText);

    if (subTotal>0) {
        subTotal = subTotal - firstClassTicketPrice;
    }

    else {
        subTotal = 0;
    }


    var vat = subTotal*0.1;

    var total = subTotal+vat;

    document.getElementById(id2).innerText = subTotal;

    document.getElementById(id3).innerText = vat;

    document.getElementById(id4).innerText = total;
}

var checkout = document.getElementById("bookbutton").addEventListener("click", function(){

    var checkoutArea = document.getElementById("checkoutarea");
    checkoutArea.style.display = "block";

    var firstClassTicketQuantity = parseFloat(document.getElementById("firstclassinput").value);

    var firstClassTicketTotal = firstClassTicketQuantity*150;

    var economyClassTicketQuantity = parseFloat(document.getElementById("economyclassinput").value);

    var economyClassTicketTotal = economyClassTicketQuantity*100;

    var totalPrice = firstClassTicketTotal + economyClassTicketTotal;

    var totalVat = totalPrice*0.1;

    var totalTicketCost = totalPrice + totalVat;

    document.getElementById("firstclassticketquantity").innerText = firstClassTicketQuantity;

    document.getElementById("firstclasstickettotalvalue").innerText = firstClassTicketTotal;

    document.getElementById("economyclassticketquantity").innerText = economyClassTicketQuantity;

    document.getElementById("economyclasstickettotalvalue").innerText = economyClassTicketTotal;

    document.getElementById("totalvalue").innerText = totalPrice;

    document.getElementById("totalvatvalue").innerText = totalVat;

    document.getElementById("totalticketvalue").innerText = totalTicketCost;
})


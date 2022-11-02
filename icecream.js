let numOfScoop = document.getElementById("scoops");
let coneRadioObj = document.getElementById("cone");
let cupRadioObj = document.getElementById("cup");
let sprinkleCheckObj = document.getElementById("sprinkles");
let whippedCreamCheckObj = document.getElementById("whippedCream");
let hotFudgeCheckObj = document.getElementById("hotFudge");
let cherryCheckObj = document.getElementById("cherry");
let subOrderObj = document.getElementById("subOrder");
subOrderObj.addEventListener("click", calTotalAmt);


let firstIcPrice = 2.25;
let addScoopPrice = 1.25;
let sprinklePrice = 0.5;
let whippedCreamPrice = 0.25;
let hotFudgePrice = 1.25;
let cherryCheckPrice = 0.25;


function calTotalAmt() {
    let totAmtDue = (getTotIceCupPrice()) || (getTotIceConePrice());
    console.log(totAmtDue);
}

function getTotIceConePrice() {
  if (document.getElementById("cone").checked) {
    if (numOfScoop.value <= 0) {
      return;
    } else{
      let addScoopTotPrice = (numOfScoop.value - 1) * addScoopPrice;
      let totIcPrice = firstIcPrice + addScoopTotPrice;
      return totIcPrice;
    }
  }
}


function getTotIceCupPrice() {
  if (numOfScoop.value <= 0) {
    return;
  } else {
    if (document.getElementById("cup").checked) {
      let totAddCupPrice = 0;
      if (document.getElementById("sprinkles").checked) {
        totAddCupPrice += sprinklePrice;
      }
      if (document.getElementById("whippedCream").checked) {
        totAddCupPrice += whippedCreamPrice;
      }
      if (document.getElementById("hotFudge").checked) {
        totAddCupPrice += hotFudgePrice;
      }
      if (document.getElementById("cherry").checked) {
        totAddCupPrice += cherryCheckPrice;
      }
      let addScoopTotPrice = (numOfScoop.value - 1) * addScoopPrice;
      let totIcPrice = firstIcPrice + addScoopTotPrice + totAddCupPrice;
      return totIcPrice;
    } 
  }
}

document.querySelector('basePrice')
document.querySelector('tax') 
document.querySelector('totalDue')
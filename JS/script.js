
console.log("Jaki kod wariacie?");

let formElement = document.querySelector(".js-form");

let amountElement = document.querySelector(".js-user__amount");
let currencyElement = document.querySelector(".js-user__ownedCurrency");
let wantedElement = document.querySelector(".js-user__wantedCurrency");

let finalElement = document.querySelector(".js-user__finalExchange");

let zloty = 1.00;
let dollars = 4.97;
let euro = 4.84;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let currency = currencyElement.value;
    let wanted = wantedElement.value;
    let amount = amountElement.value;


    switch (currency) {
        case "zloty":
            if (wanted === "zloty") result = (amount * 1)
            else if (wanted === "dollars") result = (amount / dollars)
            else if (wanted === "euro") result = (amount / euro)
            break;

        case "dollars":
            if (wanted === "dollars") result = (amount * 1)
            else if (wanted === "zloty") result = (amount * dollars)
            else if (wanted === "euro") result = (amount * dollars / euro)
            break;

        case "euro":
            if (wanted === "euro") result = (amount * 1)
            else if (wanted === "zloty") result = (amount * euro)
            else if (wanted === "dollars") result = (amount * euro / dollars)
            break;
    }
    
    finalElement.innerHTML = result.toFixed(2);
})


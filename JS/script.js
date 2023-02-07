{

    console.log("Jaki kod wariacie?");


    const calucatedResult = (amount, currency) => {
        const rateFunt = 5.2727;
        const rateDollars = 4.9797;
        const rateEuro = 4.8484;

        switch (currency) {
            case "funt":
                return amount / rateFunt;


            case "dollars":
                return amount / rateDollars;


            case "euro":
                return amount / rateEuro;


        }
    }

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;

    }

    const onFormSubmit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-user__amount");
        const currencyElement = document.querySelector(".js-user__currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calucatedResult(amount, currency);

        updateResultText(amount, result, currency);

    }



    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}
var phone = document.querySelector("#phone");
var verifyTel = document.querySelector("#verify");
var code = document.querySelector("#code");
var validateCode = document.querySelector("#verify2");
let notify = document.getElementById("code-sent");
let result = document.getElementById("code-verified");
let loadingPage = document.getElementById("loading");
let codePage = document.querySelector(".verify-container");
let phonePage = document.querySelector(".send-container");
let loginPage = document.querySelector("body");
const loginSign = document.getElementById("login");
const captionz = document.querySelector(".heading");
var timing = document.getElementById("time");

let cI = setInterval(() => {
    let S = new Date('June 10, 2050 23:27:60').getTime();
    let N = new Date().getTime();
    let T = S - N;
    let timer = Math.floor((T % (1000 * 60)) / 1000);
    timing.textContent = `Time: ${timer}s`;
    if (timer === 0) {
        code.value = "";
        validateCode.value = "Reload the page!"

        clearTimeout(cI);//stop timer and return value of code to empty @ timer equals zero

    }
    else {
        return false;
    }

}, 1000);

window.addEventListener("load", () => {

    setInterval(cI);//Reset timer at every window loading/reloading.

    verifyTel.addEventListener("click", (e) => {
        e.preventDefault();
        if (phone.value != "" && phone.value.length > 9 && phone.value.length < 12) {
            notify.style.color = "green";
            loadingPage.textContent = "Code Page loading . . .";
            loadingPage.style.color = "blue";
            phone.style.border = "1px solid green";
            verifyTel.value = "Verifying phone . . .";
            setTimeout(() => {
                notify.textContent = `SMS sent to ${phone.value} for validation.`;
                verifyTel.value = " Verified.";
            }, 2500);
            setTimeout(() => {
                phonePage.style.display = "none";
                codePage.style.display = "grid";
                code.value = `${40}${phone.value.slice(-4)}${5}`;
            }, 6000);
        }
        else {
            phonePage.style.display = "grid";
            codePage.style.display = "none";
            phone.style.border = "1px solid red";
        }

    })
    validateCode.addEventListener("click", (e) => {

        e.preventDefault();

        if (code.value === `${40}${phone.value.slice(-4)}${5}`) {
            result.style.color = "green";
            loginSign.textContent = "Login Page loading . . .";
            loginSign.style.color = "blue";
            validateCode.value = "Validating code - - -";

            clearInterval(cI);// stop timer at the instance of clicking ValidateCode button
            //if and only if timer isnt zero and code value is displayed.

            setTimeout(() => {
                result.textContent = "Code validated";
                validateCode.value = "Validated.";
            }, 2500);

            //After code validation login form opens.

            setTimeout(() => {
                loginPage.style.display = "grid";
                loginPage.style.backgroundColor = "whitesmoke";
                codePage.style.display = "none";
                phonePage.style.display = "none";
                captionz.textContent = "LOGIN FORM"
                let form = document.createElement("form");
                var userId = document.createElement("span");
                var textId = document.createTextNode(`UserId: 000${phone.value.slice(-4)}LA`);
                const userInput = document.createElement("input");
                var headin = document.createElement("h2");
                var textHead = document.createTextNode("LOGIN DETAILS")
                let inputField = document.createElement("input");
                let inputField2 = document.createElement("input");
                let button = document.createElement("button");
                let textBtn = document.createTextNode("Submit");
                userId.appendChild(textId);
                headin.appendChild(textHead);
                button.appendChild(textBtn);
                userInput.setAttribute('type', 'text');
                inputField.setAttribute('type', 'text');
                inputField2.setAttribute('type', 'email');
                button.setAttribute('type', 'submit');
                userInput.setAttribute('placeholder', 'Enter UserId here');
                inputField.setAttribute('placeholder', ' Enter full name')
                inputField2.setAttribute('placeholder', 'Enter email address')
                form.append(headin, userId, userInput, inputField, inputField2, button);
                loginPage.appendChild(form);

                //click button and login if conditions are fulfilled else correct details.

                button.addEventListener("click", (e) => {
                    e.preventDefault();
                    button.textContent = "Processing Details - - -";
                    setTimeout(() => {
                        if (isNaN(inputField.value.trim()) != "" && isNaN(inputField2.value.trim())
                            != "" && inputField2.value.indexOf("@") != -1 && inputField2.value.indexOf(".") != -1 && userInput.value.trim() ===
                            userId.textContent.trim().slice(-9)) {
                            form.innerHTML = "Congratulations, You have successfully logged in!"
                            form.style.color = "green";
                            form.style.backgroundColor = "white";
                            captionz.textContent = "S U C C E S S !";
                        }
                        else {
                            alert("Check your entries!");
                            button.textContent = "SUBMIT";
                        }
                    }, 10000);

                })
            }, 6000);

        }
        else {
            loginPage.style.display = "none";
            codePage.style.display = "grid";
            phonePage.style.display = "none";
        }


    });

});
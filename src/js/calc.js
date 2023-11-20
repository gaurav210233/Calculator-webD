document.addEventListener('DOMContentLoaded', function () {

    let displayValue = document.getElementById('calc-input');
    // console.log(displayValue);

    const buttons = document.getElementsByClassName('btn');
    // console.log(buttons);

    let currentValue = "";

    for (let index = 0; index < buttons.length; index++) {

        const button = buttons[index];

        button.addEventListener('click', function () {

            // console.log('button clicked',button.innerHTML);
            const value = button.innerHTML;
            try {
                if (value == "AC") {
                    currentValue = "";
                    displayValue.value = currentValue;
                }
                else if (value == "=") {
                    convertedValue = currentValue
                        .replace("×", "*")
                        .replace("÷", "/")
                        .replace("%", "*0.01");
                    displayValue.value = String(eval(convertedValue));
                }
                else {
                    currentValue += value;
                    displayValue.value = currentValue;
                }
            } catch {
                displayValue.value = "ERROR"
            }
        });
        
    }
    console.log('Page is ready.');
});
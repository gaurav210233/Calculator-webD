document.addEventListener('DOMContentLoaded', function () {
    
    let displayValue = document.getElementById('calc-input');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    function evaluateExpression(expression) {
        try {
            const result = new Function('return ' + expression)();
            return result;
        } catch (error) {
            return 'ERROR';
        }
    }

    function handleButtonInput(value) {
        try {
            currentValue = displayValue.value;
            if (value === "AC") {
                currentValue = "";
                displayValue.value = currentValue;
            } else if (value === "=") {
                if (currentValue == "") {
                    displayValue.value = "";
                    return
                }
                convertedValue = currentValue
                    .replace("×", "*")
                    .replace("÷", "/")
                    .replace("%", "*0.01");
                displayValue.value = String(evaluateExpression(convertedValue));

            } else if (value === "⌫") {
                currentValue = currentValue.slice(0, -1);;
                displayValue.value = currentValue;
            } else {
                currentValue += value;
                displayValue.value = currentValue;
            }
        } catch {
            displayValue.value = "ERROR";
        }
    }

    function handleEnterKey() {
        currentValue = displayValue.value;
        console.log(currentValue);
        handleButtonInput("=");
    }

    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.addEventListener('click', function () {
            const value = button.innerHTML;
            handleButtonInput(value);
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            handleEnterKey();
        }
    });

    //console.log('Page is ready.');
});

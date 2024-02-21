const calculateTemp = () => {
    const inputTemp = document.getElementById('tempretur').value;

    const tempSelected = document.getElementById('temprut');
    const valueTemp = temprut.options[tempSelected.selectedIndex].value;

    const celtofa = (cel) => {
        let fahrenheit = ((cel* 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }


    const farntocel= (fah) => {
        let celsius = ((fah- 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("res").innerHTML = celtofa(inputTemp) + " Fahrenheit";
    }
    else {
        document.getElementById("res").innerHTML = farntocel(inputTemp) + " Celsius";
    }
}
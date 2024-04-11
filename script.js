const calculateTemp = () => {
    //The value entered will be stored in this variable
    const inputTemp = document.getElementById('tempreture').value;
    //The Option selected will be stored into this variable
    const tempSelectedFrom = document.getElementById('tempFrom');
    const tempSelectedTo = document.getElementById('tempTo');
    
    const valueTempFrom = tempSelectedFrom.options[tempSelectedFrom.selectedIndex].value;
    const valueTempTo = tempSelectedTo.options[tempSelectedTo.selectedIndex].value;


    const cal = (valueTempFrom) => {
        if(valueTempFrom == 'cel') return " Celcius";
        if(valueTempFrom == 'fah') return " Fahrenheit";
        if(valueTempFrom == 'kel') return " Kelvin";
    };

    //Converting Celcius into fahrenheit
    const celtofa = (cel) => {
        return ((cel* 9 / 5) + 32).toFixed(1);
    }

    //Converting Celcius into Kelvin
    const celtokel = (cel) => {
        return (273.15+parseInt(cel));
    }
    //Converting Kelvin into Celcius
    const keltocel = (kel) => {
        return (kel - 273.15).toFixed(1);
    }
    //Converting fahrenheit into Celcius
    const fatocel= (fah) => {
        return ((fah- 32) * 5 / 9).toFixed(1);
    }
    //Converting Kelvin into fahrenheit
    const keltofa = (kel) =>{
        return celtofa(keltocel(kel)); 
    }
    //Converting fahrenheit into Kelvin
    const fatokel = (fah) => {
        return celtokel(fatocel(fah));
    }

    //Converting Celcius into fahrenheit
    if(valueTempFrom == 'cel' && valueTempTo == 'fah') {
        document.getElementById("res1").innerHTML = celtofa(inputTemp) + " Fahrenheit";
    }
    //Converting Celcius into Kelvin
    else if(valueTempFrom == 'cel' && valueTempTo == 'kel'){
        document.getElementById("res1").innerHTML = celtokel(inputTemp) + " Kelvin";
    }
     //Converting fahrenheit into Celcius
    else if(valueTempFrom == 'fah' && valueTempTo == 'cel'){
        document.getElementById("res1").innerHTML = fatocel(inputTemp) + " Celsius";
    }
    //Converting fahrenheit into Kelvin
    else if(valueTempFrom == 'fah' && valueTempTo == 'kel'){
        document.getElementById("res1").innerHTML = fatokel(inputTemp) + " Kelvin";
    }
    //Converting Kelvin into Celcius
    else if(valueTempFrom == 'kel' && valueTempTo == 'cel'){
        document.getElementById("res1").innerHTML = keltocel(inputTemp) + " Celcius";
    }
    //Converting Kelvin into fahrenheit
    else if(valueTempFrom == 'kel' && valueTempTo == 'fah'){
        document.getElementById("res1").innerHTML = keltofa(inputTemp) + " Fahrenheit";
    }
    else{
        document.getElementById("res1").innerHTML = inputTemp + " " + cal(valueTempFrom);
    }



    //Array for pre-defined colors
    const temperatureColors = {
        hot: "#040106, #498cd9",
        cold: "faf7f7, #07afe8",
        normal: "#e2d7d7, #a9e6fb"
      };
    
    const btnClick = document.getElementById('submit1').addEventListener('click',function(){
          //Background color change for temperature ranges
          if((inputTemp <= 10 && tempSelectedFrom == 'cel') || (inputTemp <= celtofa(10) && tempSelectedFrom == 'fah') || inputTemp <= celtokel(10) && tempSelectedFrom == 'kel'){
              // document.body.style.backgroundColor = temperatureColors[1];
              alert('Hello');
          }
          else {
              document.getElementById("res1").innerHTML = "Invalid";
          }
    })
}

// document.getElementById('submit1').addEventListener('click', calculateTemp);

let MeasurmentKelvin = function(){
    const Measurment ={
        type :'temprature',
        unit :' celcious',
        value: prompt("enter the temprature")
    };
    console.log(MeasurmentKelvin)
    const kelvin = MeasurmentKelvin.value+273;
    return kelvin
}
console.log(MeasurmentKelvin(value))
const form = document.querySelector('form')
form.addEventListener("submit",function(evt){
    evt.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    results.innerHTML= `<p>${height}, ${weight}<p/>`

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = "<h5 style=color:Red>Please Enter Valid Height.<h5/>";
    } else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = "<h5 style=color:Red>Please Enter Valid Weight.<h5/>";
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if (bmi < 18.6){
            results.innerHTML = `<h5 style=color:Red>Your BMI is : ${bmi}.<br> You are Under Weight. <h5/>`;
        } else if (bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = `<h5 style=color:Red>Your BMI is : ${bmi}.<br> You are Normal Weighted. <h5/>`;
        } else if (bmi > 24.9){
            results.innerHTML = `<h5 style=color:Red>Your BMI is : ${bmi}.<br> You are Over Weighted. <h5/>`;
        }
    }
   
})
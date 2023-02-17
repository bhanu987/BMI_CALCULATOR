let weight = document.getElementById('weight');
let height = document.getElementById('height');

let weightinputkg = document.getElementById('weightinputkg');

let weightinputpound = document.getElementById('weightinputpound');

let heightinputmt = document.getElementById('heightinputmt');

let heightinputinc = document.getElementById('heightinputinc');

let heightinputcm = document.getElementById('heightinputcm');
let heightinputfeet = document.getElementById('heightinputfeet');

let result = document.querySelector('.result');
let form = document.querySelector('.form');


weight.addEventListener('change',()=>{
if(weight.value=='kg'){
    weightinputkg.style.display='block';
    weightinputpound.style.display='none';
}

else if(weight.value=='pound'){
weightinputkg.style.display='none';
    weightinputpound.style.display='block';
}
})

height.addEventListener('change',()=>{
    if(height.value=='metre'){
        heightinputmt.style.display='block';
        heightinputcm.style.display='none';
        heightinputinc.style.display='none';
        heightinputfeet.style.display='none';
    }

    else if(height.value=='centimetre'){
        heightinputcm.style.display='block';
        heightinputfeet.style.display='none';
        heightinputinc.style.display='none';
        heightinputmt.style.display='none';
    }

    else if(height.value=='feet'){
        heightinputfeet.style.display='block';
        heightinputinc.style.display='block';
        heightinputcm.style.display='none';
        heightinputmt.style.display='none';
        
    }
})


function calculate()
{
    let weightinkg = 0;
    let heightinmt = 0;

    if(weight.value=="kg")
    {
        weightinkg = weightinputkg.value;
    }
    else if(weight.value=="pound"){
        weightinkg = weightinputpound.value * 0.453592;
    }

    if(height.value=="metre"){
        heightinmt = heightinputmt.value;

    }

    else if(height.value =="centimetre"){
        heightinmt = heightinputcm.value * 0.01;
    }

    else{
        heightinmt = heightinputfeet.value * 0.3048 + heightinputinc.value * 0.0254;
    }

    let bmi  = weightinkg / (heightinmt * heightinmt);
    
    

    let status = '';
    if (bmi < 18.5){
        status = 'You need to gain weight.';
    }

    else if(bmi >= 18.5 && bmi <= 24.9){
        status = 'You are in normal weight.';

    }

    else if (bmi >= 25 && bmi <= 29.9){
        status = 'You are overweight.';
    }
    else{
        status = 'You are obese.';
    }
    result.style.display = 'flex';
    form.style.display = 'none';
  
    

    result.querySelector('h2').innerHTML=`Your BMI is : ${bmi.toFixed(2)}`;
    result.querySelector('.status').innerHTML  = status;
    

}
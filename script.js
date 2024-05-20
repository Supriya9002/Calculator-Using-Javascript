
const display = document.getElementById('display-input')
console.log(display)
const buttons = document.querySelectorAll('button')
console.log(buttons)

const buttonArray = Array.from(buttons);
console.log(buttonArray)

var string = '';

buttonArray.forEach((btn)=>{
    //console.log(btn);
    try{
        btn.addEventListener('click', (event)=>{

            let UserClick = event.target.innerHTML;
    
            if(UserClick == "DEL"){
                string = string.substring(0, string.length-1);
                display.value = string;
            }else if(UserClick == "AC"){
                string = ''
                display.value = string
            }else if(UserClick == '='){
                if(!isNaN(string)){
                    display.value = 'Invalid'
                    display.style.color = 'red'
                }else{
                    string = eval(string);
                    display.value = string;
                }
            }
            else{
                string += UserClick;
                display.value = string;
            }
        })
    }catch(err){
        display.value = " "
        console.log(err);
    }
})


// const r = "supriya Haldar";
// console.log(r.substring(0, 10))
// console.log(r);
// var s = eval('96-5');

// console.log(typeof(s))
// console.log(isNaN(96+5))
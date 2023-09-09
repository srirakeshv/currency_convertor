fetch('https://api.frankfurter.app/currencies')
.then((res)=>res.json())
.then(data=>displayDropDown(data))

let doll=document.querySelectorAll('.currency')
// console.log(doll)
function displayDropDown(data){
    let curr=Object.entries(data)
    for(let i=0;i<curr.length;i++)
    {
        let dummy=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
        doll[0].innerHTML+=dummy
        doll[1].innerHTML+=dummy
    }
}

let button=document.querySelector('#btn')
let input=document.querySelector('#input')
let error=document.getElementById('error')
error.style.display='none'
button.addEventListener('click', ()=> {
    let curr1=doll[0].value
    let curr2=doll[1].value
    let enterValue=input.value
    if(curr1===curr2)
    {
        error.innerHTML='choose different currencies'
        error.style.display='block'
    }
    else{
        error.style.display='none'
        convert(curr1,curr2,enterValue)
    }
})

function convert(curr1,curr2,enterValue){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${enterValue}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
    document.getElementById('result').value=Object.values(data.rates)[0]
  });
}
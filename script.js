console.log('working');

const btns=document.querySelectorAll('.num')
let input=document.querySelector('#exp')
let output=document.querySelector('#ans')
const clear=document.querySelector('#clear')
console.log(clear);
let exp=""

clear.addEventListener('click',()=>{
    input.value=""
    output.value=""
    exp=""
})

// console.log(btns);
console.log(input);

// input.value='hi'

btns.forEach((ele)=>{
    // console.log(ele);
    ele.addEventListener('click',()=>{
        console.log(ele.innerText);
        exp+=ele.innerText
        input.value=exp
        if(['+','-','*','%'].includes(ele.innerText)) return;
        let ans=eval(exp)
        output.value=ans
        

        
    })
    
})


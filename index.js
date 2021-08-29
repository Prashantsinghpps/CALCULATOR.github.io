let screen =document.getElementById('screen');
button =document.querySelectorAll('button')
screenValue='';
for(item of button)
{
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText)
        if(buttonText=='C')
        {
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
                }
                else{
                    screenValue += buttonText;
                    screen.value=screenValue;
                }
    })
}
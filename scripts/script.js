document.addEventListener("DOMContentLoaded",()=>{

    const btn1 = document.getElementById("btn1")
    const btn2 = document.getElementById("btn2")
    const btn3 = document.getElementById("btn3")

    btn1.addEventListener("click",()=>{
        const h1 = document.getElementById("h1");
        h1.innerHTML = `Buenos dias`;
       
    });

    btn2.addEventListener("click",()=>{
        const h1 = document.getElementById("h1");
        h1.innerHTML=`Доброе утро в размере`;
    });

    btn3.addEventListener("click",()=>{
        const h1 = document.getElementById("h1");
        h1.innerHTML=`Oi! Mate! Rise and shine sunshine!`;
    });

});
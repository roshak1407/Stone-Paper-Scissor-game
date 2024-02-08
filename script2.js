let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userchoicepara=document.querySelector("#userscore");
const compchoicepara=document.querySelector("#compscore");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame=()=>{
    msg.innerText="game drawn";
      msg.style.backgroundColor="black";
}

const show_winner=(userwin,userchoice,compchoice)=>{
    if(userwin===true){
        userscore++;
        userchoicepara.innerText=userscore;
        msg.innerText=`you win,your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compchoicepara.innerText=compscore;
        msg.innerText=`you loose,your ${userchoice} beaten by ${compchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
 
    const compchoice=gencompchoice();
    

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock" && compchoice==="paper"){
                userwin=false;
        }else if(userchoice==="rock" && compchoice==="scissors"){
               userwin=true;
        }else if(userchoice==="paper" && compchoice==="scissors"){
            userwin=false;
        }else if(userchoice==="paper" && compchoice==="rock"){
            userwin=true;
        }else if(userchoice==="scissors" && compchoice==="paper"){
            userwin=true;
        }else if(userchoice==="scissors" && compchoice==="rock"){
            userwin=false;
        }

        show_winner(userwin, userchoice,compchoice);
    }

    
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
      playgame(userchoice);
    });
});
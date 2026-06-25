let result={
    "computer_won_round":"Computer has won the round",
    "human_won_round":"You have won the round",
    "computer_won":"Computer has won the game",
    "human_won":"You have won the game",
    "tie":"Its a Draw"
}

export const computer_won_round=() =>{
    let para=document.querySelector(".who_won_round");
    para.textContent=result["computer_won_round"];
}

export const human_won_round=() =>{
    let para=document.querySelector(".who_won_round");
    para.textContent=result["human_won_round"];
}

export const computer_won=() =>{
    let para=document.querySelector(".final_score");
    para.textContent=result["computer_won"];
}
export const human_won=() =>{
    let para=document.querySelector(".final_score");
    para.textContent=result["human_won"];
}

export const tie_round=()=>{
    let para=document.querySelector(".who_won_round");
    para.textContent=result["tie"];
}

export const tie=() =>{
    let para=document.querySelector(".final_score");
    para.textContent=result["tie"];
}

export const user_choice_display=(user_choice)=>{
    let para=document.querySelector(".user_choice");
    para.textContent=`Your choice : ${user_choice}`;
}

export const computer_choice_display=(computer_choice)=>{
    let para=document.querySelector(".computer_choice");
    para.textContent=`Computer choice : ${computer_choice}`;
}

export const updateroundcounter=()=>{
    let para=document.querySelector(".round_counter");
    para.textContent=Number(para.textContent)+1;
}

export const update_player_score=()=>{
    let para=document.querySelector(".playerscore");
    para.textContent=Number(para.textContent)+1;
}

export const update_computer_score=()=>{
    let para=document.querySelector(".computerscore");
    para.textContent=Number(para.textContent)+1;
}

export const resetall=()=>{
    document.querySelector(".playerscore").textContent=0;
    document.querySelector(".computerscore").textContent=0;
    document.querySelector(".round_counter").textContent=0;
    document.querySelector(".user_choice").textContent="Your choice : ";
    document.querySelector(".computer_choice").textContent="Computer choice : ";
    document.querySelector(".final_score").textContent="";
    document.querySelector(".who_won_round").textContent="Round Winner is ...."
}


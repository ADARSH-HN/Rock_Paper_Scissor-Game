let computerchoices=["rock","paper","scissor"];


export const hascomputerwon=(human_value,computer_value) => {
    if(human_value=="rock" && computer_value=="paper" || human_value=="paper" && computer_value=="scissor" || human_value=="scissor" && computer_value=="rock")
        return 1;
    else if((human_value=="scissor" && computer_value=="paper" || human_value=="rock" && computer_value=="scissor" || human_value=="paper" && computer_value=="rock"))
        return 0;
    else
        return -1;
}

export const computerchoice=()=>{
    let random_choice=Math.floor(Math.random()*computerchoices.length);
    return computerchoices[random_choice] ;
}

export const check_round_finish=()=>{
    let para=document.querySelector(".round_counter");
    if(para.textContent<3){
        return true;
    }
    else return false;
}

export const winner=()=>{
    let player=Number(document.querySelector(".playerscore").textContent);
    let computer=Number(document.querySelector(".computerscore").textContent);
    console.log(player+computer);
    if(player===computer){
        return -1;
    }
    else if(player>computer){
        return 1;
    }
    else
        return 0;
    
}

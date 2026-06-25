import { computer_won_round,resetall,computer_won,human_won,human_won_round,tie_round,user_choice_display,computer_choice_display, updateroundcounter,update_player_score,update_computer_score,tie} from "./ui.js";
import {computerchoice,hascomputerwon,check_round_finish,winner} from "./logic.js";

let buttons=document.querySelectorAll(".btn");
let start_game=document.querySelector(".start_game");
let scoreboard=document.querySelector(".scoreboard");
let title=document.querySelector(".title");

let rules_btn=document.querySelector(".rules_btn");
let rules=document.querySelector(".rules");
let arrow=document.querySelector(".arrow")
let reset=document.querySelector(".reset_game");

start_game.addEventListener("click",()=>{
    setTimeout(()=>{
        buttons.forEach((btn)=>btn.disabled=false);
        scoreboard.classList.toggle("hidden");
        start_game.style.display="none";
        reset.classList.toggle("hidden");
        title.innerText="Chose any to start playing "
    },200)
    ;
});

reset.addEventListener("click",()=>{
    setTimeout(()=>{
        buttons.forEach((btn)=>btn.disabled=false);
        title.innerText="Start Playing Now !!";
        resetall();
    },200)
    ;
});

buttons.forEach((btn)=>btn.addEventListener("click",()=>{
    let user=btn.value;
    let computer=computerchoice();
    user_choice_display(user);
    computer_choice_display(computer);
    let result=hascomputerwon(user,computer);
    if(result===1){
        computer_won_round();
        update_computer_score();
    } 
    else if(result===0){
        human_won_round();
        update_player_score();
    }
    else{
        tie_round();
    }    
    updateroundcounter();
    if(!check_round_finish()){
        let final_result=winner()
        if(final_result===1){
            human_won();
        }
        else if(final_result==0){
            computer_won();
        }
        else{
            tie();
        }
        buttons.forEach((btn)=>btn.disabled=true);
    }
}));


rules_btn.addEventListener("click",()=>{
    rules.classList.toggle("max-h-0");
    rules.classList.toggle("max-h-120");
    arrow.classList.toggle("rotate-90");
})



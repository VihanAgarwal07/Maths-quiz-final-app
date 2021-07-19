function updateStorage(){
     Player_1=document.getElementById("textinput1").value;
     Player_2=document.getElementById("textinput2").value;
    
     localStorage.setItem("player_1",Player_1);
     localStorage.setItem("player_2",Player_2);

     window.location="game.html";
}
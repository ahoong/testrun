"use strict";
//Whenever the window/page loads, the function setup will run
window.onload=(event) =>{ 
    setup()
};
//This list is used to keep track of favorite classes so we do not duplicate
var favoriteclasses=[]
//Creating a function called setup
function setup() {
//Assign variable to collect all inputs
    var btns = document.querySelectorAll("input")
//looping through the list of buttons
    btns.forEach(btn=>{
//Adding an event listener to the button
        btn.addEventListener("click",event =>{
//When the button is clicked, the addClass function is triggered
            addClass(event);
        })
    })
}
//Adding a function that passes in variable e
function addClass(e) {
// If ID is not included in favorite classes
// The exclamation point stands for not 
    if (!(favoriteclasses.includes(e.target.id))){
//Adding the ID to the favorite classes
        favoriteclasses.push(e.target.id);
//Creating new tr element
        var tr= document.createElement("tr");
//Getting inner HTML of class to add
        var favoriteclass=document.getElementById("Class" + e.target.id).innerHTML;
//Getting current date and time to be added
        var currentdate=new Date().toLocaleString();
//Adding date and time to row
        favoriteclass+="<td> Date Added: "+currentdate+"</td>";
        tr.innerHTML=favoriteclass;
//Adding the HTML of the class to the inside of the favorite classes table by grabbing the ID of the elements
        document.getElementById("FavoriteClassesTable").appendChild(tr);
    }
}

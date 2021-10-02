console.log("i love migu sheepy");

var hunger = 3;
var hungerMin;
var feed;
var walk;
var walksNeeded = 3;
var hug;
var hugsNeeded =3;
var happy;
var bored;
var annoyed;
var walksNeededMin;
var hugsNeededMin;

var seconds = 0;

var numIntervals = 0;






window.onload=init;

function init() {

    //hunger = 3;
    hungerMin = 1;
    feed = 0;
    walk = 0;
    //walksNeeded = 3;
    //hugsNeeded = 3;
    hug = 0;  
    walksNeededMin = 1;
    hugsNeededMin = 1;

    //document.getElementById("walksNeeded").innerHTML = walksNeeded;
    //document.getElementById("hugsNeeded").innerHTML = hugsNeeded;
    document.getElementById("walk").value = 0;
    document.getElementById("hug").value = 0;
    document.getElementById("hunger").value = 3;
    document.getElementById("feed").value = 0;
     document.getElementById("imgDefault").style.visibility = "visible";
     document.getElementById("imgBored").style.visibility = "hidden";
     document.getElementById("imgHappy").style.visibility = "hidden";
     document.getElementById("imgAnnoyed").style.visibility = "hidden";
    // document.getElementById("thoughtsHug").innerHTML = "Hug me!";
    // document.getElementById("thoughtsWalk").innerHTML = "I want to go for a walk!";
    // document.getElementById("thoughtsHunger").innerHTML = "I'm hungry!";
    // document.getElementById("hunger").innerHTML = "3";
    // document.getElementById("walkNumber").innerHTML = "0";
    // document.getElementById("hugNumber").innerHTML = "0";

    updateStateHug();
    var walkInterval = setInterval (updateStateWalk, 10000);
    var feedInterval = setInterval (updateStateFeed, 5000);
    var hugInterval = setInterval (updateStateHug, 7500);
    

    updateParas();
    var myInterval = setInterval (updateParas, 1000);
}

function updateParas() {
    document.getElementById("score").innerHTML = numIntervals;
    numIntervals++;
    console.log(numIntervals);

}


function updateStateHug() {
    document.getElementById("hugsNeeded").innerHTML = hugsNeeded;
    hugsNeeded++;
    
    console.log("hugsNeeded: " + hugsNeeded);
    if (hugsNeeded >2) {
        defaultState();
        document.getElementById("thoughtsHug").innerHTML = "Hug me!";}
   //document.write("walksNeeded").value = walksNeeded;
   }

function updateStateWalk() {
    document.getElementById("walksNeeded").innerHTML = walksNeeded;
    walksNeeded++;
    
    console.log("walksNeeded: " + walksNeeded);

    if (walksNeeded > 2) {
        defaultState();
        document.getElementById("thoughtsWalk").innerHTML = "Take me on a walk!";
    }
   //document.write("walksNeeded").value = walksNeeded;
   }

function updateStateFeed() {
    document.getElementById("hunger").innerHTML = hunger;
    hunger++;
    
    console.log("hunger: "+ hunger);
    if (hunger>2) { 
        defaultState();
        document.getElementById("thoughtsHunger").innerHTML = "I'm hungry!" 
    }
   //document.write("walksNeeded").value = walksNeeded;
   }

function feedSheep() {

    document.getElementById("feed").value = --hunger;
    document.getElementById("feed").value = ++feed;
    document.getElementById("hunger").innerHTML = hunger;


    //do while loop
    //if (hunger<4) {
        stateChangeFeed();
        console.log("changing state from feed");
   // }
    if (hunger<hungerMin) {
        hunger = hungerMin;
    }
}

function walkSheep() {
    document.getElementById("walk").value = --walksNeeded;
    document.getElementById("walk").value = ++walk;
    document.getElementById("walksNeeded").innerHTML = walksNeeded;

    //if (walk>0) {
        stateChangeWalk();
        console.log("changing state from walk");
    //}
    if (walksNeeded<=walksNeededMin) {
        walksNeeded = walksNeededMin;  
    }
}

function hugSheep() {
    document.getElementById("hug").value = ++hug;
    document.getElementById("hug").value = --hugsNeeded;
    document.getElementById("hugsNeeded").innerHTML = hugsNeeded;

    //if (hug>0) {
        stateChangeHug();
        console.log("changing state from hug");
    //}
    if (hugsNeeded<=hugsNeededMin) {
        hugsNeeded = hugsNeededMin;
    }
}


function stateChangeWalk() {
    //updateStateWalk();
    if (walksNeeded <=0 ) {
        bored();
        console.log("Too many walks! I'm so tired!");
        document.getElementById("thoughtsWalk").innerHTML = "I'm so tired now I sleep!";
    } else if (walksNeeded ==1) {
        annoyed ();
        console.log("Walk me more!");
        document.getElementById("thoughtsWalk").innerHTML = "Okay I'm getting tired...";
    } else if (walksNeeded == 2) {
        happy();
        console.log("Yay! I love walks!");
        document.getElementById("thoughtsWalk").innerHTML = "I love walks! One more!";
    } else {
        defaultState();
        document.getElementById("thoughtsWalk").innerHTML = "Take me on a walk!";
    }
}



function stateChangeHug() {
    if (hugsNeeded <=0 ) {
        bored();
        console.log("Ok now I'm annoyed...");
        document.getElementById("thoughtsHug").innerHTML = "Okay now I'm annoyed = =";
    } else if (hugsNeeded ==1) {
        annoyed();
        console.log("Ok that's enough...");
        document.getElementById("thoughtsHug").innerHTML = "Mmm that's enough";
    } else if (hugsNeeded == 2) {
        happy();
        console.log("I love hugs");
        document.getElementById("thoughtsHug").innerHTML = "I love hugs!";
    } else {
        defaultState();
        document.getElementById("thoughtsHug").innerHTML = "Hug me!";
    }
}


function stateChangeFeed() {
    
    if (hunger <= 0) {
        bored();
        document.getElementById("thoughtsHunger").innerHTML = "Oh no I ate too much :(";

    } else if (hunger==1) {
        annoyed();
        document.getElementById("thoughtsHunger").innerHTML = "I'm full now!";
    } else if ( hunger == 2) {
        happy();
        document.getElementById("thoughtsHunger").innerHTML = "I'm still hungry!"
    } else { 
        defaultState();
        document.getElementById("thoughtsHunger").innerHTML = "I'm hungry!" 
    }

}



//3 STATES that can be represented by true/false: happiness state, boredom state, annoyance state



function happy() {
    console.log("I'm a happy sheep");
    //document.getElementById("thoughts").innerHTML = "I love walks!! More walks!";
    document.getElementById("imgDefault").style.visibility = "hidden";
    document.getElementById("imgBored").style.visibility = "hidden";
    document.getElementById("imgHappy").style.visibility = "visible";
    document.getElementById("imgAnnoyed").style.visibility = "hidden";
}

function bored() {
    //console.log("I'm so bored");
    //document.getElementById("thoughts").innerHTML = "I love walks!! More walks!";
    document.getElementById("imgDefault").style.visibility = "hidden";
    document.getElementById("imgBored").style.visibility = "visible";
    document.getElementById("imgHappy").style.visibility = "hidden";
    document.getElementById("imgAnnoyed").style.visibility = "hidden";
}

function annoyed() {
    //console.log("I'm so bored");
    //document.getElementById("thoughts").innerHTML = "I love walks!! More walks!";
    document.getElementById("imgDefault").style.visibility = "hidden";
    document.getElementById("imgBored").style.visibility = "hidden";
    document.getElementById("imgHappy").style.visibility = "hidden";
    document.getElementById("imgAnnoyed").style.visibility = "visible";
}

function defaultState() {
    //console.log("I'm so bored");
    //document.getElementById("thoughts").innerHTML = "I love walks!! More walks!";
    document.getElementById("imgDefault").style.visibility = "visible";
    document.getElementById("imgBored").style.visibility = "hidden";
    document.getElementById("imgHappy").style.visibility = "hidden";
    document.getElementById("imgAnnoyed").style.visibility = "hidden";
}

function reset () {
        location.reload();
}
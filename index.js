// document.querySelector("button").addEventListener("click", handleClick);

// code below - selects all the button objects from the DOM in a list fashion.
const behavior = document.querySelectorAll("button");

/* code below - adds an event listener to the website to keep an look for any keydowns, (e)saves the event data
 use, which in itself contains data like key that was pressed and how long it was pressed, etc. and the function
 specifies what to do when the event occurs.*/
document.addEventListener("keydown", function(e) {
    /* code below - for registering one click only */
    if (e.repeat) return;
    /* code below - saves this specific class object in a const */
    const buttonpressed = document.querySelector("." + e.key);
    if (buttonpressed) {
        /* code below - adds the css style if present in the .css file */
        buttonpressed.classList.add("pressed");
        /* code below - do a certain function after waiting for the amount specified as an int in ms */
        setTimeout(function() {buttonpressed.classList.remove("pressed");}, 100);
        playAudio(e.key);
        
    }

    else {console.log(e.key)};

    /* code below - added prevously to simulate the key press as a click to the specific object but the 
    program required mouse down, up and leave */
    
    // if (buttonpressed) {
    //     buttonpressed.click();
    // }
});

/* code below - to put the event listener in each of the objects from the list we got above */
for (var i = 0; i < behavior.length; i++){
    /* code below - adds a mousedown event listener and an anonymous function (callback fucntion) called handleClick */
    behavior[i].addEventListener("mousedown", handleClick);
    /* code below - to remove the added css */
    behavior[i].addEventListener("mouseup", function() {this.classList.remove("pressed");});
    behavior[i].addEventListener("mouseleave", function(){this.classList.remove("pressed");});
}

function handleClick()  {
    /* code below - select the innerHTML value of the object of the list, (this) is a feature of anonymous function
    to use the object again where the function was specified*/
    var selectedButton = this.innerHTML;
    playAudio(selectedButton);
    this.classList.add("pressed");
}

function playAudio(key) {
    /* code below - switch case is a specialized version of if else which runs the code when there is 
    a case that matches with the key here */
    switch (key) {

            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            
            case "a":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "s":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "d":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "j":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;


            default:
                console.log(selectedButton);
        }
}
const cList = document.getElementById("commentList"); //ul
const cInput = document.getElementById("commentInput"); //input
//create the button
const cBtn = document.getElementById("addCommentBtn"); //button

// add function that you want your button to perform
function addComment(event){
    console.log(event);
    console.log(this); // the button that triggerd the event
    //return if the input value is empty ; 
    // we don't want to execute the lines after; 
    // if it's not empty we execute the lines after
    if(cInput.value === "") return;

    // access and store the text from the input
    const text = cInput.value;

    // create a new li and 
    const li = document.createElement("li");

    // set the textContent to the text from the input
    li.textContent = text;

    //append it to the ul
    cList.appendChild(li);

    //clears the value in the input
    cInput.value = "";

    //focus or go back to the input field
    cInput.focus();
}




//attach function to the button using addEventListener
cBtn.addEventListener("click", addComment)
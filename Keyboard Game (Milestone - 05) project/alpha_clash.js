/*function play(){
 //hide the home screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    //console.log(homeSection.classList)
 
    //show the playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');


}
*/

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    console.log('Player pressed',playerPressed);

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, currentAlphabet);


    //check matched or not (right or wrong)
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        //update score
        //get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        //update the score by 1
        const newScore = currentScore + 1;
        //show the updated score
        currentScoreElement.innerText = newScore;
        //start a new round



        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('life lost');
         //get the current life
         const currentLifeElement = document.getElementById('current-life');
         const currentLifeText = currentLifeElement.innerText;
         const currentLife = parseInt(currentLifeText);

         //reduce the life count
         const newLife = currentLife - 1;

         //display the updated life count
         currentLifeElement.innerText  = newLife;
    }
}

//capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame(){
    //step - 1 : generate a random alphabet
    const alphabet = getARandomAlphabet();
    //console.log('Your Random Alphabet', alphabet);
    
    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}


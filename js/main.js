window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

// To Change Level
let currentLevel = levels.easy;



let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const level = document.querySelector('#level');



// Initialize Game
function init(){
    console.log('---','init');

    // Level initialization
    // let currentLevel = changeLevel();
    // let time = currentLevel;

    seconds.innerHTML = time;
    timeDisplay.innerHTML = time;
    showWord(tags);

    // Start matching on word input
    wordInput.addEventListener('input', startMatch);

    // Checking the level
    // level.addEventListener('change', changeLevel);

    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// Pick & show random word

function showWord(array){
    // Generate random array index
    const randIndex = Math.floor(Math.random() * array.length);

    // Output random word
    currentWord.innerHTML = array[randIndex];
}

// Countdown timer
function countdown(){
    // Make sure time is not run out
    if(time > 0){
        // Decrement
        time--;
        console.log('---',time);
    }else if(time === 0){
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!';
        score = -1;
    }
}

// Start match
function startMatch(){
    if(matchWords()){
        console.log('match!');
        isPlaying = true;
        time = currentLevel + 1;
        showWord(tags);
        wordInput.value = '';
        score++;
    }
    // If score is -1, display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;

    }else{
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

const tags = [
    '!DOCTYPE',
    'a',
    'label',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'img',
    'head',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'footer',
    'form',
    'header',
    'iframe',
    'input',
    'li',
    'nav',
    'link',
    'option',
    'script',
    'selection',
    'div',
    'span',
    'summary',
    'textarea'
];
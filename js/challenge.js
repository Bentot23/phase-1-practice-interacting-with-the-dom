const counterTimer = document.querySelector('#counter')
const minusElement = document.getElementById('minus')
const plusElement = document.getElementById('plus')
const pauseElement = document.getElementById('pause')
const heartElement = document.getElementById('heart')
const formElement = document.querySelector('form')
const submitElement = document.getElementById('submit')
let intervalId; 

document.addEventListener('DOMContentLoaded', () => {
    countDown()
    let btn = document.createElement('button');
    btn.innerText = 'reset'
    btn.addEventListener('click', () => {
        window.location.reload()
    });
    let body = document.querySelector('body')
    body.append(btn)
})
// function resetDoc() {
//     counterTimer.reset()
// }
function countDown() {
    let counter = 0
    setTimeout(function(){
        if(counter === 0) {
            // pause.innerText = 'Pause';
            intervalId = setInterval(
                // () => {counterTimer.innerText = ++counter}
                increment, 1000)
        } 
    }, 100);
}
pauseElement.addEventListener('click', pauseEverything);

function pauseEverything() {
    if(pauseElement.innerText == 'pause'){
        clearInterval(intervalId)
        minusElement.disabled = true;
        plusElement.disabled = true;
        heartElement.disabled = true;
        submitElement.disabled = true;
        pauseElement.innerText = 'resume'
    } else {
        // setTimeout(intervalId, 100)
        countDown()
        minusElement.disabled = false;
        plusElement.disabled = false;
        heartElement.disabled = false;
        submitElement.disabled = false;
        pauseElement.innerText = 'pause'
    }
}

// add some listener to that form element
function formSumbit(e) {
    e.preventDefault()
    const userText = e.target.comment.value

    if (userText.length > 0) {
        // grab the container element
        const commentContainer = document.getElementById('list')
        // make a new element to put in the container
        const newElement = document.createElement('li')
        // add the user's text to the new element
        newElement.innerText = userText
        // append the new element to the container
        commentContainer.append(newElement)
        e.target.reset()
    }
}

formElement.addEventListener('submit', formSumbit )

const decrement = () => {
    const number = counterTimer.innerText
    counterTimer.innerText = number - 1
}

// add event to button
minusElement.addEventListener('click', decrement)

function increment() {
    const number = counterTimer.innerText
    let newNumber = parseInt(number) + 1
    counterTimer.innerText = newNumber
}

plusElement.addEventListener('click', increment)

heartElement.addEventListener('click', () => {
    const likeContainer = document.querySelector('.likes')
    const currentNumber = counterTimer.innerText
    

    // const foundElement = document.getElementById(`likes-${currentNumber}`)
    const foundElement = document.getElementById(`likes-${currentNumber}`)
    console.log(foundElement)

    if (foundElement) {
        const fullText = foundElement.innerText
        const words = fullText.split(' ')
        const ourNewNumber = parseInt(words[4]) + 1
        words[4] = ourNewNumber
        foundElement.innerText = words.join(' ')
    } else {
         //make a new li
        const newLi = document.createElement('li')
        newLi.id = `likes-${currentNumber}`
        // console.log(newLi)
        //put string in li

        newLi.innerText = `${currentNumber} has been liked 1 times`

        //append li to dom
        likeContainer.append(newLi)
    }
})


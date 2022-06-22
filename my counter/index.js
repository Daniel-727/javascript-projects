/*-----TUTORIAL SOLUTION-----*/
/*---------------------------*/
let count = 0;

//select value and buttons
const countDisplay = document.querySelector('.count');
const btns = document.querySelectorAll('.btn'); //btns is an nodelist. You can perform some array methods on it. There are also other array methods that you can not use on a nodelist. (In the case that you need to use an array method, you can transform the nodelist into an array).

btns.forEach((btn) => { //adding event listeners to all of my buttons using forEach instead of my solution of adding an event listener one-by-one
    btn.addEventListener('click', (e) => { //passing in the event object 
        const styles = e.currentTarget.classList; //classlist allows us to see the classes of the element in a DOMTokenList (similar to array but isn't)
        if (styles.contains('decrease')){ //since styles is a variable that holds a DOMTokenList we need to use the contains method (not the javascript array includes() method.)
            count--;
        } else if (styles.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            countDisplay.style.color = 'green';
        }
        if (count < 0) {
            countDisplay.style.color = 'red';
        }
        if (count === 0) {
            countDisplay.style.color = 'black';
        }
        countDisplay.textContent = count;
    })
})




/*------MY SOLUTION------*/
/*-----------------------*/
/*const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const countDisplay = document.querySelector('.count');

let count = 0;


//this is to display the initial count
countDisplay.innerText = count;

/*-----DECREASE----*/
/*-----------------*/
/*decrease.addEventListener('click', () => {
    count -= 1;
    //we need to add this so the document updates whenever we click
    countDisplay.innerText = count;
    checkCount(count)
})


/*-----RESET-----*/
/*---------------*/
/*reset.addEventListener('click', () => {
    count = 0;
    countDisplay.innerText = count;
    checkCount(count)
})


/*-----INCREASE-----*/
/*------------------*/
/*increase.addEventListener('click', () => {
    count += 1;
    countDisplay.innerText = count;
    checkCount(count)
})


/*----function used to change count display color---*/
/*function checkCount(count) {
    if (count > 0) {
        countDisplay.style.color = 'green';
    } else if (count === 0) {
        countDisplay.style.color = 'black';
    } else {
        countDisplay.style.color = 'red';
    }
}*/
// ! Q2 answer
function alertmsg(){
    alert("Thanks for purchasing a phone from us")
}

// ! Q3 answer

function deleteRow(btn) {
    btn.closest('tr').remove();
}

// ! Q5 answer
var counterValue = 0;

function updateCounter() {
    document.getElementById('counter').innerText = counterValue;
}

function increaseCounter() {
    counterValue++;
    updateCounter();
}

function decreaseCounter() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
}

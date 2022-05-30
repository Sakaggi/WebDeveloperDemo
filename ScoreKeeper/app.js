const p1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button'),
}
const p2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button'),
}

const winningScoreDiv = document.querySelector('#playto');
let winningScore = parseInt(winningScoreDiv.value);

let color = p1.display.style.color;

const reset = () => {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.display.style.color = color;
        p.button.disabled = false;
    }
}

winningScoreDiv.addEventListener('change', e => {
    winningScore = parseInt(e.target.value);
    reset();
});


const updateScore = (player, opponent) => {
    player.score += 1;
    player.display.innerText = player.score;
    if (player.score === winningScore) {
        player.display.style.color = 'green';
        opponent.display.style.color = 'red';
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
}


p1.button.addEventListener('click', e => updateScore(p1, p2));
p2.button.addEventListener('click', e => updateScore(p2, p1));


document.querySelector('#reset').addEventListener('click', reset)

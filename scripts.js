let totalScore = 0;
const rollBtn = document.getElementById('roll-btn');

rollBtn.addEventListener('click', () => {
    // Generate two random numbers from 1 to 6
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    // Update the UI
    document.getElementById('die1').textContent = d1;
    document.getElementById('die2').textContent = d2;

    const message = document.getElementById('message');

    if (d1 === 1 && d2 === 1) {
        totalScore = 0; // Snake Eyes reset
        message.textContent = "SNAKE EYES! Score reset to zero.";
    } else {
        totalScore += (d1 + d2);
        message.textContent = `You rolled a ${d1 + d2}!`;
    }

    document.getElementById('score').textContent = totalScore;
});

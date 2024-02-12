document.getElementById('startButton').addEventListener('click', () => {
    const time = document.getElementById('timeInput').value;
    let timeLeft = time;
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = `${timeLeft} seconds remaining`;

    const interval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `${timeLeft} seconds remaining`;
        if (timeLeft <= 0) {
            clearInterval(interval);
            alert('Time is up!');
            timerDisplay.textContent = '';
        }
    }, 1000);
});

document.getElementById('startButton').addEventListener('click', () => {
    const timeInput = document.getElementById('timeInput').value;
    const errorMessage = document.getElementById('errorMessage');

    // 入力値が半角数字かどうかをチェック
    if (!timeInput || isNaN(timeInput) || timeInput <= 0) {
        errorMessage.style.display = 'block'; // エラーメッセージを表示
        return; // ここで処理を終了
    } else {
        errorMessage.style.display = 'none'; // エラーメッセージを非表示
    }

    let timeLeft = timeInput;
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = `${timeLeft} seconds remaining`;

    const interval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft} seconds remaining`;
    if (timeLeft <= 0) {
        clearInterval(interval);
        // バイブレーションAPIのサポートをチェック
        if ('vibrate' in navigator) {
            navigator.vibrate(1000); // 1秒間振動
        }
        // 音声通知
        var audio = new Audio('path/to/alarm.mp3');
        audio.play();

        timerDisplay.textContent = '';
    }
}, 1000);
});

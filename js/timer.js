function startTimer() {
    let seconds = 0;

    function updateTimer() {
        seconds++;
        document.querySelector('#timeText').setAttribute('text', 'value:Time: ' + seconds);
        setTimeout(updateTimer, 1000);
    }

    updateTimer();
}

export default startTimer;


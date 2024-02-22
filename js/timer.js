function startTimer() {
    let seconds = 0;
    let timerId;

    function updateTimer() {
        seconds++;
        document.querySelector('#timeText').setAttribute('text', 'value:Time: ' + seconds);
        timerId = setTimeout(updateTimer, 1000);
    }

    updateTimer();

    function stopTimer() {
        clearTimeout(timerId);
    }

    function resetTimer() {
        seconds = 0;
        document.querySelector('#timeText').setAttribute('text', 'value:Time: ' + seconds);
    }

    return { stopTimer, resetTimer };
}

export default startTimer;

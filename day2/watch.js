let startTime, updatedTime, difference, tInterval, savedTime = 0, paused = false;
        const display = document.getElementById('display');
        const startButton = document.getElementById('start');
        const stopButton = document.getElementById('stop');
        const resetButton = document.getElementById('reset');

        function startTimer() {
            if (!paused) {
                startTime = new Date().getTime();
            } else {
                startTime = new Date().getTime() - savedTime;
            }
            tInterval = setInterval(getShowTime, 1);
            paused = false;
            startButton.disabled = true;
            stopButton.disabled = false;
            resetButton.disabled = false;
        }

        function pauseTimer() {
            clearInterval(tInterval);
            savedTime = new Date().getTime() - startTime;
            paused = true;
            startButton.disabled = false;
            stopButton.disabled = true;
        }

        function resetTimer() {
            clearInterval(tInterval);
            savedTime = 0;
            paused = false;
            startButton.disabled = false;
            stopButton.disabled = true;
            resetButton.disabled = true;
            display.innerHTML = '0s';
        }

        function getShowTime() {
            updatedTime = new Date().getTime();
            difference = updatedTime - startTime;

            let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);
            let milliseconds = Math.floor((difference % 1000) / 10);

            let displayTime = '';
            if (hours > 0) {
                displayTime += hours + 'h ';
            }
            if (minutes > 0 || hours > 0) {
                displayTime += minutes + 'm ';
            }
            displayTime += seconds + 's ' + milliseconds;

            display.innerHTML = displayTime;
        }

        startButton.addEventListener('click', startTimer);
        stopButton.addEventListener('click', pauseTimer);
        resetButton.addEventListener('click', resetTimer);
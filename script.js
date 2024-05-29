let countDownDate = new Date('1 June, 2024 00:00:00').getTime();

let countDownUpdate = setInterval( () => {
    let now = new Date().getTime();

    let timeDistance = countDownDate - now;

    let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(timeDistance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(timeDistance % (1000 * 60) / 1000);

    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

    if(timeDistance < 0){
        clearInterval(countDownUpdate);
        document.querySelector('.countdown').innerHTML = 'Countdown is finished!';
    };

}, 1000);
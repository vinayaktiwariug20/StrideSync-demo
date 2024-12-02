var currentWatchTime = document.getElementById('watch-time');
var timeButton = document.getElementById('time-button');
var heartRateButton = document.getElementById('heart-rate-button');
var heartRateContainer = document.getElementById('heart-rate-container')
var heartRateText = document.getElementById('heart-rate-text')
var heartPhoto = document.getElementById('heart-photo');
var selected = 'time';
var oscillateHeart = 'small';
var colorBoxRed = document.getElementById('colorbox-red');
var colorBoxBlack = document.getElementById('colorbox-black');
var colorBoxPink = document.getElementById('colorbox-pink');
var colorBoxBlue = document.getElementById('colorbox-blue');
var colorBoxPurple = document.getElementById('colorbox-purple');
var watchPhoto = document.getElementById('watch-photo');
var buyButton = document.getElementById('buy-button');

colorBoxRed.addEventListener('click', function(){
    watchPhoto.src = 'assets/watch_colors/Red.png';
});

colorBoxBlue.addEventListener('click', function(){
    watchPhoto.src = 'assets/watch_colors/Blue.png';
});

colorBoxPink.addEventListener('click', function(){
    watchPhoto.src = 'assets/watch_colors/Pink.png';
});

colorBoxPurple.addEventListener('click', function(){
    watchPhoto.src = 'assets/watch_colors/Purple.png';
});

colorBoxBlack.addEventListener('click', function(){
    watchPhoto.src = 'assets/watch_colors/Black.png';
});


timeButton.addEventListener('click', function() {
    if(selected === 'time') {

    } else if (selected === 'heartRate') {
        currentWatchTime.classList = 'watch-time show';
        heartRateContainer.classList = 'heart-rate hide'
        heartRateText.classList = 'hide';
        selected = 'time';
    } else {
        console.log("error in feature selection")
    }
})

heartRateButton.addEventListener('click', function() {
    if(selected === 'heartRate') {
        
    } else if (selected === 'time') {
        currentWatchTime.classList = 'watch-time hide';
        heartRateContainer.classList = 'heart-rate show';
        heartRateText.classList = 'show';
        selected = 'heartRate';
    } else {
        console.log("error in feature selection")
    }
})

buyButton.addEventListener('click', function() {
    userAnswer = confirm('Do you wish to checkout?');
    if(userAnswer) {
        alert('Proceed to the payment page')
    } else {
        alert('Purchase canceled')
    }
})

function heartOscillator(e) {
    if(oscillateHeart === 'small') {
        oscillateHeart = 'big';
        heartPhoto.style.transform = 'scale(1.06)';
    } else if(oscillateHeart === 'big') {
        oscillateHeart = 'small';
        heartPhoto.style.transform = 'scale(0.85)';
    } else {
        console.log('error in heart size oscillation')
    }
}

function watchTimeUpdater(e) {
    var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var hours = String(today.getHours()).padStart(2, '0');
    var minutes = String(today.getMinutes()).padStart(2, '0');
    var seconds = String(today.getSeconds()).padStart(2, '0');
    var time = hours + ":" + minutes + ":" + seconds;
    currentWatchTime.textContent = time;
    
};

setInterval(heartOscillator, 833)
setInterval(watchTimeUpdater, 1000);
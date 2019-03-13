//Task  timer cahlana hy 5 sec main batana hy waarna show kar dy 




var allImgs = document.getElementsByTagName('img');
var msgBox = document.getElementById('message');
function guessthecard(imageNumber) {
    var blackHeartIndex = Math.floor(Math.random() * 4)
    // console.log(imageNumber, blackHeartIndex);
    if (imageNumber === blackHeartIndex) {
        for (var i = 0; i < allImgs.length; i++) {
            allImgs[i].src = 'images/king.png'
        }
        allImgs[imageNumber].src='images/1.png';
        msgBox.innerHTML = 'You Won!';
    }
    else {
        for (var i = 0; i < allImgs.length; i++) {
            allImgs[i].src = 'images/joker.jpg'
        }
        allImgs[blackHeartIndex].src='images/1.png';
        msgBox.innerHTML = 'Thaki Thiki Tha';
    }
}

// setTimeout(guessthecard , 5000 );
setInterval(guessthecard , 5000);





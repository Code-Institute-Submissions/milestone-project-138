const highScoreMenu = document.querySelector(".high-score-menu");

window.onload = () => {
    getLocalStorage(); 
    highScoreMenu.textContent = numberWithCommas(highScore.toString()); 
};

  

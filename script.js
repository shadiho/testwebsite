
function showPopup() {
    document.getElementById("popupContainer").style.display = "block";
  }
  
  function hidePopup() {
    document.getElementById("popupContainer").style.display = "none";
  }
  
  function onOptionSelected(option) {
    hidePopup();
    if (option === true) {
        questions[currentQuestion][1] = true;
        localStorage.setItem(UUID + "_questions",JSON.stringify(questions));
        if (currentQuestion < questions.length-1){
            currentQuestion+=1;
            console.log("Current Question ****** " + currentQuestion);
            localStorage.setItem(UUID+"_currentQuestion",currentQuestion);
        }
            
        players[0].play();
    } else {
        if (currentQuestion===0){
            players[0].seek(0);
        }else{
            players[0].seek(questions[currentQuestion-1][0]);
        }
        
    }
    intervalId = setInterval(myTimer, 300);
    console.log("set interval!!!!!");
  }
  

  function updateProgress(currentTime) {
    var val = Math.trunc((currentTime * 100)/ players[0].metadata.length_in_seconds) ;
    /*const slider = document.getElementById('progressSlider');*/
    const progressValue = document.getElementById('progressValue');
    const progressFill = document.getElementById('progressFill');

    const value = val;
    const percent = value + '%';
    progressValue.textContent = percent;
    progressFill.style.width = percent;
}
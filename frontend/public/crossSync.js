const CHANNEL_NAME = 'demo';
const CHECK_INTERVAL = 250;

let countR = 1;
let countS = 1;

document.addEventListener("DOMContentLoaded", () => {

  window.onload = function() {
    const submitSigalButton = document.querySelector('#submitSignal');
    submitSigalButton.addEventListener('click', updatePage);
  
  // Question: Why it can not recognize [NULL]
  //const deleteSigalButton = document.querySelector('#deleteSignal');
  //deleteSigalButton.addEventListener('click', updatePage);

  }
 
  let previousMessage;

  if (window.localStorage) {
    setInterval(() => {
      const message = window.localStorage.getItem(CHANNEL_NAME);
      if (message !== previousMessage){
        console.log("Recieved a message: " + countR);
        countR++;
        previousMessage = message;
        
        if(countR === 2) {
          console.log("Just updated!")
        } else {
          window.location.reload(false);
        }
        
      }
    }, CHECK_INTERVAL);

    window.localStorage.removeItem(CHANNEL_NAME);
  }

});

function updatePage() {
  const message = countS;
  window.localStorage.setItem(CHANNEL_NAME, message);
  console.log("Sent a message: " + countS);
  countS++;
}

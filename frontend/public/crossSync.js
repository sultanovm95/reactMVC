const CHANNEL_NAME = 'demo';
const CHECK_INTERVAL = 50;

let previousMessage = window.localStorage.getItem(CHANNEL_NAME);
document.addEventListener("DOMContentLoaded", () => {
 
  const submitSigalButton = document.querySelector('#submitSignal');
  submitSigalButton.addEventListener('click', sendMessage);

  if (window.localStorage) {
    setInterval(() => {
      const message = window.localStorage.getItem(CHANNEL_NAME);
      if (message !== previousMessage){
        previousMessage = message;
        window.location.reload(false);
      }
    }, CHECK_INTERVAL);

    window.localStorage.removeItem(CHANNEL_NAME);
  }

});

function sendMessage() {
  window.localStorage.removeItem(CHANNEL_NAME);
}

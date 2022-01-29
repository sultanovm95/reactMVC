const CHANNEL_NAME = 'LastUpdated';
const CHECK_INTERVAL = 50;

let previousMessage = window.localStorage.getItem(CHANNEL_NAME);

document.addEventListener("DOMContentLoaded", () => {
  const submitSigalButton = document.querySelector('#submitSignal');
  submitSigalButton.addEventListener('click', checkForUpadte());
});

function checkForUpadte() {
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
}

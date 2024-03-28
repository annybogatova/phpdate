function getUnixTime() {
  return Math.floor(Date.now() / 1000);
}

// upd time every second
setInterval(function () {
  document.querySelector('.unix').innerHTML = getUnixTime();
  // if (is_clicked) EpochToHuman();
}, 1000);

// display at page load
document.querySelector('.unix').innerHTML = getUnixTime();

// let is_clicked = false;

const container = document.querySelector('.normalize-time__container');

function EpochToHuman() {
  // is_clicked = true;

  if (document.querySelector('.normalize-time__result') == null) {
    container.insertAdjacentHTML('afterbegin', '<p class="normalize-time__result"></p>');
    container.insertAdjacentHTML('beforeend', '<input type="button" class="normalize-time__close" title="close normalize-time" value="close" onclick="hideHumanTime();">');
    document.querySelector('.normalize-time__button').setAttribute('value', 'reset');
  }

  let date = new Date(document.querySelector('.unix').textContent * 1000);
  document.querySelector('.normalize-time__result').innerHTML = "<b>GMT</b>: " + date.toGMTString() +
    "<br /><b>GMT" + (date.getTimezoneOffset() < 0 && '+') + (-1) * date.getTimezoneOffset() / 60 + '</b>: ' + date.toLocaleString();

}

function hideHumanTime() {
  document.querySelector('.normalize-time__result').remove();
  document.querySelector('.normalize-time__close').remove();
  document.querySelector('.normalize-time__button').setAttribute('value', 'convert');
}
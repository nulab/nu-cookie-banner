// require js-cookie
// https://github.com/js-cookie/js-cookie
const Cookies = require('js-cookie');
const lang = require ('./languages');

let agree;
let language = 'en';
const cookieAlertContainer = document.createElement('div');
cookieAlertContainer.className = 'nu-cookies-alert-container';

// Check cookie (T/F)
function cookieCheck() {
  getCookie();
  if (getCookie() == "agree") {
    return true;
  } else {
    return false;
  }
}

// Get CONSENT cookie if set
function getCookie() {
  agree = Cookies.get('cookiePolicy');
  return agree;
}  

// Set cookie
function setCookie() {
  Cookies.set('cookiePolicy', 'agree', { expires: 90 });
}

// Enable alert (display)
function enableAlert() {
  cookieAlertContainer.classList.toggle("-visible");
}

// Disable alert
function disableAlert() {
  cookieAlertContainer.remove();
}

// Alert show/hide
function toggleAlert() {
  if (!cookieCheck()) {
    enableAlert();
  } else {
    disableAlert();
  }
}

document.addEventListener('click', function (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.closest('.nu-cookies-alert-box__button')) return;

  // Don't follow the link
  event.preventDefault();

  // Log the clicked element in the console
  setCookie();
  toggleAlert();

}, false);

// export render function to display 'nu cookie banner'
module.exports.render = function(cookieLanguageKey) {
  
  // Get 'LANG' cookie if set (otherwise, default = 'en')
  if (Cookies.get(cookieLanguageKey)) {
    language = Cookies.get(cookieLanguageKey);
  }
 
  let markup = `
    <div class="nu-cookies-alert-box">
      <p class="nu-cookies-alert-box__text">${lang[language]}</p>
      <div class="nu-cookies-alert-box__button">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="14" fill="#CBCBCB"/><path d="M18.6667 10C18.8508 9.81591 18.8508 9.51743 18.6667 9.33333C18.4826 9.14924 18.1841 9.14924 18 9.33333L14 13.3333L10 9.33333C9.81591 9.14924 9.51743 9.14924 9.33333 9.33333C9.14924 9.51743 9.14924 9.8159 9.33333 10L13.3333 14L9.33333 18C9.14924 18.1841 9.14924 18.4826 9.33333 18.6667C9.51743 18.8508 9.8159 18.8508 10 18.6667L14 14.6667L18 18.6667C18.1841 18.8508 18.4826 18.8508 18.6667 18.6667C18.8508 18.4826 18.8508 18.1841 18.6667 18L14.6667 14L18.6667 10Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </div>
  `;

  cookieAlertContainer.innerHTML = markup;
  
  // add elements to page
  document.body.appendChild(cookieAlertContainer);

  toggleAlert();
}

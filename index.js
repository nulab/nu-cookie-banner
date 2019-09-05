console.log("...in index.js of nu-cookie-banner");

// require js-cookie
// https://github.com/js-cookie/js-cookie
const Cookies = require('js-cookie');

console.log(Cookies.get('lang'));
let cookieAlertContainer = document.createElement('div');
let cookieAlertBox = document.createElement('div');
let lang = {
  en: 'Nulab uses cookies to deliver our services. By visiting our website, you agree to the use of cookies as described in our <a href="https://nulab.com/privacy/cookie-policy/">Cookie Policy</a>.',
  ja: "japanese"
};
let agree;
let language = 'tr';

// Check cookie (T/F)
function cookieCheck() {
  getCookie();
  if (getCookie() == "agree") {
    return true;
  } else {
    return false;
  }
}

// Get LANG cookie if set
function getLanguageCookie(cookieLanguageKey) {
  if (!(Cookies.get('lang'))) {
    language = 'en';
  } else {
    language = Cookies.get(`${cookieLanguageKey}`);
  }
} 

// Get CONSENT cookie if set
function getCookie() {
  agree = Cookies.get('cookiePolicy');
  return agree;
}  

// Set cookie
function setCookie(testt) {
  console.log(testt);
  console.log("...setting cookie");
  Cookies.set('cookiePolicy', 'agree', { expires: 90 });
}

// Enable alert (display)
function enableAlert() {
  console.log("in pls show");
  cookieAlertContainer.style.display='flex';
}

// Disable alert
function disableAlert() {
  console.log("in NO show");
  cookieAlertContainer.style.display='none';
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
  console.log(event.target);
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.closest('.nu-cookies-alert-box__button')) return;

  // Don't follow the link
  event.preventDefault();

  // Log the clicked element in the console
  console.log(event.target);
  //let testt = "here";
  setCookie();
  toggleAlert();

}, false);

module.exports.render = function(cookieLanguageKey) {
  console.log("...in module.exports.render");

  // get site cookie key for language if set
  getLanguageCookie(cookieLanguageKey);

  // create elements
  let cookieAlertParagraph = document.createElement('p');
  let cookieAlertParagraphText = lang[language];
  let cookieAlertClose = document.createElement('div');
  let cookieAlertCloseImg = '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="14" fill="#CBCBCB"/><path d="M18.6667 10C18.8508 9.81591 18.8508 9.51743 18.6667 9.33333C18.4826 9.14924 18.1841 9.14924 18 9.33333L14 13.3333L10 9.33333C9.81591 9.14924 9.51743 9.14924 9.33333 9.33333C9.14924 9.51743 9.14924 9.8159 9.33333 10L13.3333 14L9.33333 18C9.14924 18.1841 9.14924 18.4826 9.33333 18.6667C9.51743 18.8508 9.8159 18.8508 10 18.6667L14 14.6667L18 18.6667C18.1841 18.8508 18.4826 18.8508 18.6667 18.6667C18.8508 18.4826 18.8508 18.1841 18.6667 18L14.6667 14L18.6667 10Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // add classes for styling
  cookieAlertContainer.className = 'nu-cookies-alert-container';
  cookieAlertBox.className = 'nu-cookies-alert-box';
  cookieAlertParagraph.className = 'nu-cookies-alert-box__text';
  cookieAlertClose.className = 'nu-cookies-alert-box__button';
  cookieAlertParagraph.innerHTML = cookieAlertParagraphText;
  
  // configure elements
  cookieAlertClose.innerHTML = cookieAlertCloseImg;
  cookieAlertBox.appendChild(cookieAlertParagraph);
  cookieAlertBox.appendChild(cookieAlertClose);
  cookieAlertContainer.appendChild(cookieAlertBox);
  
  // add elements to page
  document.body.appendChild(cookieAlertContainer);

  toggleAlert();
}


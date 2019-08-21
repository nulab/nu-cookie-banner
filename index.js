const Cookies = require('js-cookie');

module.exports = function() {
    //this.str = str;
    this.lang = {
      en: 'Nulab uses cookies to deliver our services. By visiting our website, you agree to the use of cookies as described in our <a href="https://nulab.com/privacy/cookie-policy/">Cookie Policy</a>.',
      ja: "japanese"
    };
    let agree;
    let cookieAlert = document.createElement('div');
    this.render = function(language) {
      console.log("in RNEDER");
      // create elements

      let cookieAlertParagraph = document.createElement('p');
      let cookieAlertParagraphText = this.lang[language];
      let cookieAlertClose = document.createElement('div');
      let cookieAlertCloseImg = '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="14" fill="#CBCBCB"/><path d="M18.6667 10C18.8508 9.81591 18.8508 9.51743 18.6667 9.33333C18.4826 9.14924 18.1841 9.14924 18 9.33333L14 13.3333L10 9.33333C9.81591 9.14924 9.51743 9.14924 9.33333 9.33333C9.14924 9.51743 9.14924 9.8159 9.33333 10L13.3333 14L9.33333 18C9.14924 18.1841 9.14924 18.4826 9.33333 18.6667C9.51743 18.8508 9.8159 18.8508 10 18.6667L14 14.6667L18 18.6667C18.1841 18.8508 18.4826 18.8508 18.6667 18.6667C18.8508 18.4826 18.8508 18.1841 18.6667 18L14.6667 14L18.6667 10Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>';

      // add styling
      cookieAlert.setAttribute('style', 'max-width: 1140px; margin: 0 auto; margin-bottom: 25px; position: fixed; bottom: 0; border: 2px solid red; right: 0; left: 0; justify-content: center; z-index: 1000; background-color: white; border-radius: 34px; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); align-items: center;');
      cookieAlertParagraph.setAttribute('style', 'margin-bottom: 0; color: #4A4A4A; padding: 13px 30px 13px 98px;');
      cookieAlertClose.className = 'cookies-alert__button';
      cookieAlertClose.setAttribute('style', 'display: flex;')
      cookieAlertParagraph.innerHTML = cookieAlertParagraphText;
      
      // configure elements
      cookieAlertClose.innerHTML = cookieAlertCloseImg;
      cookieAlert.appendChild(cookieAlertParagraph);
      cookieAlert.appendChild(cookieAlertClose);
      
      // add elements to page
      document.body.appendChild(cookieAlert);
      toggleAlert();
    }

    // Check cookie (T/F)
    function cookieCheck() {
      getCookie();
      if (getCookie() == "agree") {
        return true;
      } else {
        return false;
      }
    }

    // Get cookie
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
      console.log("in pls show");
      cookieAlert.style.display='flex';
    }

    // Disable alert
    function disableAlert() {
      console.log("in NO show");
      cookieAlert.style.display='none';
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
        //console.log(event.target);
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.closest('.cookies-alert__button')) return;

      // Don't follow the link
      event.preventDefault();

      // Log the clicked element in the console
      console.log(event.target);
      setCookie();
      toggleAlert();

    }, false);
  }
  

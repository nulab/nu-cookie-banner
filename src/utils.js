import Cookies from 'js-cookie'

// Get CONSENT cookie if set
export function getCookie() {
  return Cookies.get('cookiePolicy')
}

// Set cookie `cookiePolicy`
export function setCookie() {
  Cookies.set('cookiePolicy', 'agree', { expires: 90, sameSite: 'none', secure: true })
}

// Check for a cookie called cookiePolicy (T/F)
export function userHasAgreed() {
  return getCookie() === 'agree'
}

// Returns the markup for a cookieAlertContainer filled with the `text` parameter
export function markup(company, text) {
  return `
    <div class="nu-cookies-alert-box">
      <p class="nu-cookies-alert-box__text">${company} ${text}</p>
      <div class="nu-cookies-alert-box__button">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="14" fill="#CBCBCB"/><path d="M18.6667 10C18.8508 9.81591 18.8508 9.51743 18.6667 9.33333C18.4826 9.14924 18.1841 9.14924 18 9.33333L14 13.3333L10 9.33333C9.81591 9.14924 9.51743 9.14924 9.33333 9.33333C9.14924 9.51743 9.14924 9.8159 9.33333 10L13.3333 14L9.33333 18C9.14924 18.1841 9.14924 18.4826 9.33333 18.6667C9.51743 18.8508 9.8159 18.8508 10 18.6667L14 14.6667L18 18.6667C18.1841 18.8508 18.4826 18.8508 18.6667 18.6667C18.8508 18.4826 18.8508 18.1841 18.6667 18L14.6667 14L18.6667 10Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </div>
  `
}
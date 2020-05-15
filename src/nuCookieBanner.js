import './nu-cookie-banner.scss'

// require js-cookie
// https://github.com/js-cookie/js-cookie
import Cookies from 'js-cookie'
import {
  userHasAgreed,
  setCookie,
  markup,
} from './utils'
import languageData from './languages'

let cookieAlertClass = 'nu-cookies-alert-container'

// Attach click event listener
document.addEventListener(
  'click',
  (event) => {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.closest('.nu-cookies-alert-box__button')) {
      return
    }

    // Don't follow the link
    event.preventDefault()

    // Add a cookie called "cookiePolicy" equal to "agree"
    setCookie()

    // Add event listener to disable
    document.querySelector(`.${cookieAlertClass}`).style.display = 'none'
  },
  false,
)

export function renderNuCookieBanner(company, cookieLanguage) {
  // If user already agreed, do nothing.
  if (userHasAgreed()) {
    return
  }

  // Otherwise, continue to render and create cookie alert banner

  // Set default language
  let language = cookieLanguage

  if (language === 'en-US') {
    language = 'en'
  }

  // Create element
  const cookieAlertContainer = document.createElement('div')
  cookieAlertContainer.className = cookieAlertClass
  cookieAlertContainer.innerHTML = markup(company, languageData[language])

  // Add element to page
  document.body.appendChild(cookieAlertContainer)
}
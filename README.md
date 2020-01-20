# Nu Cookie Banner

This package will add a fixed cookie consent banner (html box) at the bottom of the web site to meet GDPR law requirements. The purpose is to streamline the look/feel and behavior across all Nulab sites. The outcome if for the user to accept our site's cookie usage.

## Getting Started

Install this package and remove old/existing cookie prompts on the web site (if they exist)

### Installing
```
$ yarn add nu-cookie-banner
```

### Configuring

#### Include styling

Must have Webpack to build to css
```
@import '~nu-cookie-banner/src/nu-cookie-banner.scss';
```
OR 

use build css
```
nu-cookie-banner/dist/nu-cookie-banner.css';
```

#### Import the package in your .js file

```
import { renderNuCookieBanner } from 'nu-cookie-banner'
```
```
renderNuCookieBanner('company', 'lang');
```

OR 

#### Require the package in your .js file
```
let nuCookieBannerReq = require('nu-cookie-banner')
```
```
nuCookieBannerReq.renderNuCookieBanner('company', 'lang')
```

## If all else fails due to local incompatible environments/builds use the `dist/nuCookieBanner.js` and `dist/nu-cookie-banner.css` builds instead (for example: `dist/sample-script.html`).
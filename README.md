# Nu Cookie Banner

This package will add a fixed cookie consent banner (html box) at the bottom of the web site to meet GDPR law requirements. The purpose is to streamline the look/feel and behavior across all Nulab sites. The outcome if for the user to accept our site's cookie usage.

## DEPRECATED

Archiving project in lieu of OneTrust cookie banner.

## Getting Started

Remove old/existing hard-coded cookie prompts on the web site (if they exist)

### Installing
Two options:

#### Up-to-date environments
```
$ yarn add nu-cookie-banner
```

#### UMD for older incompatible environments
```
<link rel="stylesheet" href="http://unpkg.com/nu-cookie-banner@[version]/dist/nu-cookie-banner.css">
<script type="text/javascript" src="http://unpkg.com/nu-cookie-banner@[version]/dist/nuCookieBanner.js"></script>
```

---

### Configuring

#### Import the package in your .js file

```
import { renderNuCookieBanner } from 'nu-cookie-banner'

renderNuCookieBanner('company', 'lang');
```

OR 

#### Require the package in your .js file
```
let nuCookieBannerReq = require('nu-cookie-banner')

nuCookieBannerReq.renderNuCookieBanner('company', 'lang')
```

---

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

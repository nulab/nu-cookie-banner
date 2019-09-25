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

#### Import or require the package in your .js file

Using `nuCookie` as an example.
```
import nuCookie from 'nu-cookie-banner';
```

### Initializing

Initialization depends on a language cookie key set by the site. Defaults to English.
```
nuCookie.render('lang');
```

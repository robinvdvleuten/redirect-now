# redirect-now

Middleware especially for [𝚫 Now](https://zeit.co/now) deployments that redirects all requests to a configured hostname.

It respects the Now deployment URLs though. So when you access a non-aliased deployment URL directly (e.g. `https://redirect-now-otytioldup.now.sh`), incoming requests will not be redirected.

## Install

```
$ npm install redirect-now
```

## Usage

The middleware can be used as all other [Connect](https://github.com/senchalabs/connect) and [Express](https://expressjs.com/) middleware libraries out there;

```js
const express = require('express')
const redirect = require('redirect-now')

const app = express()
// Redirect all incoming requests to `www.example.com`.
app.use(redirect('www.example.com'))
```

## API

### redirect(hostname, [options])

Returns a middleware function that is compatible with Connect's API.

#### hostname

Type: `string` `RegExp`

The hostname to redirect to, or a `RegExp` to test the hostname against.

#### options

Type: `Object`

##### target

Type: `string`

By default, the redirect target is the passed hostname.

##### enabled

Type: `boolean`

By default, the middleware is enabled when running when `NODE_ENV=production`.

## License

MIT © [Robin van der Vleuten](https://www.robinvdvleuten.nl)

const { NODE_ENV, NOW_URL } = process.env

module.exports = function (hostname, opts = {}) {
  const equalsHostname = hostname instanceof RegExp ? h => hostname.test(h) : h => h === hostname

  const target = opts.target || hostname
  const enabled = opts.enabled || NODE_ENV === 'production'

  if (target instanceof RegExp) {
    throw new Error('Unable to use a regular expression as redirect target. Either pass a string as `hostname` or set the `target` option.')
  }

  return (req, res, next) => {
    if (!enabled || equalsHostname(req.hostname) || req.hostname === NOW_URL) {
      return next()
    }

    res.redirect(`https://${target}${req.originalUrl}`);
  }
}

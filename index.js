const { NODE_ENV, NOW_URL } = process.env

module.exports = function (hostname, opts = {}) {
  const equalsHostname = hostname instanceof RegExp ? h => hostname.test(h) : h => h === hostname
  const enabled = opts.enabled || NODE_ENV === 'production'

  return (req, res, next) => {
    if (!enabled || equalsHostname(req.hostname) || req.hostname === NOW_URL) {
      return next()
    }

    res.redirect(`https://${hostname}/${req.originalUrl}`);
  }
}

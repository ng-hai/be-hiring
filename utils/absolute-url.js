export default function absoluteUrl(req) {
  let protocol = process.env.NODE_ENV === 'production' ? 'https:' : 'http:'
  let host = req
    ? req.headers['x-forwarded-host'] || req.headers['host']
    : window.location.host
  if (host.match(/localhost/)) {
    protocol = 'http:'
  }

  return `${protocol}//${host}`
}

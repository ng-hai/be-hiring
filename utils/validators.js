export function isNotEmtpyString(value) {
  return String(value).trim().length > 0
}

export function isValidEmail(value) {
  const RE = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  )
  return RE.test(value)
}

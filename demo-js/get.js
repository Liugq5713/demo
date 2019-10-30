function get(obj, path, defaultval = null) {
  const keys = Array.isArray(path) ? path : path.replace(/(\[(\d+)\])/g, '.$2').split('.')
  object = object[0]
  if (object && keys.length > 1) {
    return get(object, keys.slice(1), defaultVal)
  }
  return object == undefined ? defaultval : object
}

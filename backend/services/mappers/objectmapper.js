
const mapId = obj => {
  if (!obj) {
    throw 'Object can not be null / empty'
  }
  console.log('mapping the id')

  return obj._id
}

export { mapId }

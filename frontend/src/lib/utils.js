
const formatDate = date => {
  if (!date) {
    return ''
  }

  const actualDate = new Date(date)

  return actualDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export { formatDate }

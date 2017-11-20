
const DATE_OPTS = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const FALLBACK_LANG = 'en-US'

const getLang = _ => {
    return navigator.language || FALLBACK_LANG
}

const formatDate = date => {
    // just easy way out
    if (!date || !(date instanceof Date)) {
        return ""
    }

    return date.toLocaleString(getLang(), DATE_OPTS)
}


export { formatDate }

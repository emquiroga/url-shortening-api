

export default function shortLinks ({myLink = 'https://clixs-dev.netlify.app/'} = {}) {
    const apiURL = `https://api.shrtco.de/v2/shorten?url=${myLink}`
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        const {result} = response
        const shortLink = result.short_link
        console.log(shortLink)
        return shortLink
    })
}
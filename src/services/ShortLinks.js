

export default function shortLinks ({myLink}) {
    const apiURL = `https://api.shrtco.de/v2/shorten?url=${myLink}`
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        const {result} = response
        const shortLink = result.short_link
        return shortLink
    })
    .catch((error) => {
        alert(`There's an error at your link. See ${error}`)
    })
}
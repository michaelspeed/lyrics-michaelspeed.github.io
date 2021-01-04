// Fetcher with async a little bit like axios
export default async function Fetcher(url, options = {}) {
    let mainUrl = url
    let opts = options

    // TODO this is a patch for deezer api, is not a permanent fix
    if (url.indexOf('deezer') !== -1) {
        mainUrl = `https://cors-anywhere.herokuapp.com/${url}`
        opts = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                ...options.headers
            },
            ...options
        }
    }

    const response = await fetch(mainUrl, options)

    // Handle Errors
    if (!response.ok) {
        const message = `An Error has occurred: ${response.status}`
        throw new Error(message);
    }

    const data = await response.json();
    return {
        data: data,
        status: response.status,
        response: response
    }
}

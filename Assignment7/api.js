async function api(source, target, query, callback) {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '23a969a58amsh74ae1fac6403235p1ce6c6jsn396d7b7021e0',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source,
            target,
            q: query
        })
    };

    try {
        const res = await fetch(url, options);
        const json = await res.json();
        const data = json.data.translations[0].translatedText;
        callback(null, data);
    } catch (error) {
        callback(error, null);
    }

}

module.exports = api;

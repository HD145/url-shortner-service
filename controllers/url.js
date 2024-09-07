const shortid = require("shortid");
const { URL } = require("../models/url");

async function handleCreateURL(req, res) {
    const params = req.body;

    if (!params.url) {
        return res.status(400).send("URL is required");
    }

    const shortUrl = shortid(8);

    await URL.create({
        shortUrl: shortUrl,
        redirectUrl: params.url,
        logHistory: [
            { timeStamp: new Date().toISOString() }
        ]
    })
    return res.status(200).send(`Short url for ${params.url} - ${shortUrl}`)
}

async function handleRedirectUrl(req, res) {
    const params = req.params.id;
    const entry = await URL.findOneAndUpdate(
        { shortUrl: params },
        {
            $push: {
                logHistory: {
                    timeStamp: new Date().toISOString()
                }
            }
        },
    )
    res.redirect(entry.redirectUrl);
}

module.exports = {
    handleCreateURL, handleRedirectUrl
}
module.exports = (baseURL) => (req, res) => {
    const parcedURL = new URL(req.url, baseURL);
    const params = {};
    parcedURL.searchParams.forEach((value, key) => {
        params[key] = value;
    });

    req.pathname = parcedURL.pathname;
    req.params = params;
}
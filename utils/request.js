const request = require("request");
const qs = require("querystring");
const https = require("https");
const post = (url, data) => {
    return new Promise((resolve) => {
        request({
            method: "POST",
            url: url,
            json: true,
            headers: {
                "content-type": "application/json"
            },
            body: qs.stringify(data)
        }, (err, res, body) => {
            if (res.statusCode == 200) {
                resolve(body)
            }
        })
    })
}

const get = (url) => {
    return new Promise(resolve => {
        https.get(url, (res) => {
            var str = "";
            res.on("data", (data) => {
                str += data;
            })

            res.on("end", () => {
                console.log(str,111);
                resolve(JSON.parse(str));
            })
        })
    })
}

module.exports = {
    get,
    post
}
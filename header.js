var http = require("http")
var server = http.createServer((req, resp) => {
    console.log(req.headers)
    resp.end(JSON.stringify({
        ip: req.headers["x-forwarded-for"], 
        lang: req.headers["accept-language"].split(",").slice(0, 1)[0],
        system: req.headers["user-agent"].match(/\(([^\(\)]+)\)/)[1] //ugly
    }))
})

server.listen(8080)
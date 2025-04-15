let http_module = require("http")
require("dotenv").config()
let { exec } = require("child_process")
let port = process.env.PORT_NO = 2000
http_module.createServer(function (request, response) {
    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(`<h1>Welcome </h1><br><br>
        <a href="/home"><button>Home</button></a>`);
    }

    else if (request.url === "/home") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(`<h1> Go To Home Page</h1>
        <hr>
        <ul>

        <li><a href="/services">Go to Sevice</a><li>
        <li><a href="/feedback">Go to Feedback</a><li>
        </ul>
        `);





    }
    else if (request.url === "/services") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(`<h1> Go To Services Page</h1>`

        );

    }
    else if (request.url === "/feedback") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(`<h1> Go To Feedback</h1>`);
    }
    else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("<h1 style='color:red'>Page Not Found</h1>");
    }
}).listen(port, () => {
    console.log(`Server is running on port 2000 at http://localhost:${port}`);
    exec(`start http://localhost:${port}`)
})
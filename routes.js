const fs = require('fs');

const handlerRoute = (req,res) => {
    if(req.url === "/")
    {
        res.setHeader("Content-type",'text/html')
        res.write("<html>");
        res.write("<body>")
        res.write("<form action='/message' method='POST'><input type='text' name='message'>"
        +"<button type='submit'>Submit</button></form>");
        res.write("</body></html>");
        return res.end();
    }
    if(req.url === '/message' && req.method ==="POST")
    {
        const body = [];
        req.on('data' , (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split("=")[1];
            fs.writeFileSync("message.txt",message);

        })
        res.statusCode = 302;
        res.setHeader("Location",'/');
        return res.end();
    }
    // console.log(req.url,req.headers,req.method);
    res.setHeader("Content-type",'text/html')
    res.write("<html>");
    res.write("<body>")
    res.write("<div>"+req+"Hello om kk</div>");
    res.write("</body></html>");
    res.end();
    // process.exit();
}

module.exports = handlerRoute;

// module.exports = {
//     handler : handlerRoute,
//     someText:"Some text here",
// }

// module.exports.handler = handlerRoute;
// module.exports.someText = "Some text";
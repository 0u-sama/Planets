const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) =>{

    if (req.url === '/style'){
        const css = fs.readFileSync('../css/style.css', 'utf8')
        res.writeHead(200, {'Content-type': 'text/css'});
        res.write(css);
        res.end();
    }else if (req.url === '/script'){
        const js = fs.readFileSync('../java script/script.js', 'utf8')
        res.writeHead(200, {'Content-type': 'text/javascript'});
        res.write(js);
        res.end();
    }else if (req.url === '/'){
        const ind = fs.readFileSync('../html/index.html', 'utf8')
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(ind)
        res.end();
    }else if (req.url === '/earth'){
        const earth = fs.readFileSync('../assets/earth.PNG')
        res.writeHead(200, {'Content-type': 'image/PNG'});
        res.write(earth);
        res.end();
    }else if (req.url === '/mercury'){
        const mercury = fs.readFileSync('../assets/mercury.PNG')
        res.writeHead(200, {'Content-type': 'image/PNG'});
        res.write(mercury);
        res.end();
    }
    //no such rout
    else {
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.write('404 not found\n');
        res.end()
    }

}).listen(3000)
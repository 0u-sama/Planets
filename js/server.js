const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) =>{

    if (req.url === '/mainpagestyle'){
        const css = fs.readFileSync('../css/mainpage.css', 'utf8')
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
    }else if (req.url === '/sun-img'){
        const sun_img = fs.readFileSync('../assets/sun.PNG')
        res.writeHead(200, {'Content-type': 'image/PNG'});
        res.write(sun_img);
        res.end();
    }else if (req.url === '/sun-gif'){
        const sun_img = fs.readFileSync('../assets/sun.gif')
        res.writeHead(200, {'Content-type': 'image/gif'});
        res.write(sun_img);
        res.end();
    }
    else if (req.url === '/sun'){
        const sun = fs.readFileSync('../html/sun.html')
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(sun);
        res.end();
    }else if (req.url === '/sunpagestyle'){
        const suncss = fs.readFileSync('../css/sun.css', 'utf8')
        res.writeHead(200, {'Content-type': 'text/css'});
        res.write(suncss);
        res.end();
    }
    //no such rout
    else {
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.write('404 not found\n');
        res.end()
    }

}).listen(3000)
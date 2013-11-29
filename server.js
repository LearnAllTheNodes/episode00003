var http = require('http')
  , handler = function (req, res) {
      if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
      } else if (req.url === '/marketing') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Buy allz teh productz\n');
      } else if (req.url === '/uploads') {
        if (req.method === "POST") {
          var upload = ""

          req.on("data", function(chunk) {
            upload += chunk
            console.log("chunk: ", chunk)
          })

          req.on("end", function() {
            console.log("Handling the upload: ", upload.length)
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('handling it')
          })
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end('<html><head><title>UPLOADZ!</title><body><form action="/uploads" method="POST" enctype="multipart/form-data"><input type="file" name="the_file"><input type="submit" value="Upload">');
        }
      } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found.\n');
      }
    }
  , server = http.createServer(handler)
  
server.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');

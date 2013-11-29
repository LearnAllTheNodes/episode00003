var express = require("express")
  , app     = express()

app.use(express.bodyParser())

app.get("/", function(req,res) {
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello World\n")
})

app.get("/marketing", function(req,res) {
  res.setHeader("Content-Type", "text/plain")
  res.end("Buy allz teh productz\n")
})

app.get("/uploads", function(req,res) {
  res.setHeader("Content-Type", 'text/html');
  res.end('<html><head><title>UPLOADZ!</title><body><form action="/uploads" method="POST" enctype="multipart/form-data"><input type="file" name="the_file"><input type="submit" value="Upload">');
})

app.post("/uploads", function(req,res) {
  console.log(req.files)
  console.log("Handling the upload: ")
  res.setHeader("Content-Type", "text/plain")
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('handling it')
})
  
app.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');

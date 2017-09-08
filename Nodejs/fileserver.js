var http=require("http");
var fs=require("fs");
var path=require("path");

http.createServer(function(req,res){
	
	console.log(`${req.method} request for ${req.url}`);
	
	if(req.url=="/"){
		
		fs.readFile("./public/index.html","UTF-8",function(err,html){
			res.writeHead(200,{"Content-Type":"text/html"});
			res.end(html);
		});
	}else if(req.url.match(/.css$/)){
		var csspath=path.join(__dirname,'public',req.url);
		var fileStream=fs.createReadStream(csspath,"UTF-8");
		
		res.writeHead(200,{"Content-Type":"text/css"});
		fileStream.pipe(res);
	}else if(req.url.match(/.jpg$/)){
		var imgpath=path.join(__dirname,'public',req.url);
		var imgstream=fs.createReadStream(imgpath);
		
		res.writeHead(200,{"Content-Type":"image/jpeg"});
		imgstream.pipe(res);
	}else{
		res.writeHead(400,{"Content-Type":"text/plain"});
		res.end("404 file not found!");
	}
}).listen(3000);

console.log("File server is running on 3000");

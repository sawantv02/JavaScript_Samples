var http=require("http");

var data=require("./data/inventory");

http.createServer(function(req,res){
	
	if(req.url==="/"){	
		res.writeHead(200,{"Content-Type":"text/json"});
		res.end(JSON.stringify(data));
	}else if(req.url==="/onorder"){
		listOnBackOrder(res);
	}else if(req.url==="/instock"){
		listInStock(res);
	}else{
		res.writeHead(400,{"Content-Type":"text/plain"});
		res.end("Whoops...data not found");
	}

	
}).listen(3000);

console.log("Server listening on 3000");


function listInStock(res){
	var instock=data.filter(function(item){
		return item.avail === "In stock";
	});
	
	res.end(JSON.stringify(instock));
}

function listOnBackOrder(res){
	var onOrder=data.filter(function(item){
		return item.avail === "On back order";
	});
	
	res.end(JSON.stringify(onOrder));
}
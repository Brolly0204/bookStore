let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function(req, res) {
     let {pathname, query} = url.parse(req.url, true);

     if(pathname === '/book') {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        fs.createReadStream('./books.json').pipe(res);
       // let resData = fs.readFileSync('./books.json');
       // res.end(resData);
     } else {
       res.statusCode= 404;
       res.end();
     }
}).listen(9000, function() {
    console.log('监听9000端口');
});


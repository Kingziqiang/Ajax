const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
const querystring = require('querystring');

let server = http.createServer();
server.on("request", (request, response) => {
  let urlObj = url.parse(request.url, true);
  let pathName = urlObj.pathname;
  let queryString = urlObj.query;
  let type = request.method;
  console.log(queryString);
  //console.log(type);
  console.log(pathName);
  switch (pathName) {
    //1.load()方法开始
    //获取load
    case '/load/load.html':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        if (err) throw err;
        response.end(data);
      })
      break;
      //获取insert.html
    case '/load/insert.html':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        if (err) throw err;
        console.log(JSON.stringify(queryString));
        response.end(data);
      })
      break;
      //load()方法结束

      //2.$.get()

    case '/get/get.html':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        if (err) throw err;
        response.end(data);
      })
      break;
    case '/getData':
      //console.log(JSON.stringify(queryString));
      response.end(JSON.stringify(queryString));
      break;

      //3.$.post()
    case '/post/post.html':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        if (err) throw err;
        response.end(data);
      })
      break;
    case '/postData':
      //console.log(JSON.stringify(queryString));
      response.end(JSON.stringify(queryString));
      break;
      //4. $.getScript()  
    case '/getScript/getScript.html':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        if (err) throw err;
        response.end(data);
      })
      break;
    case '/getScript/test.js':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        if (err) throw err;
        response.end(data);
      })
      break;
      //5.$.getJson()方法
    case '/getJson/getJson.html':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        if (err) throw err;
        response.end(data);
      })
      break;
    case '/getJson/test.json':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        if (err) throw err;
        response.end(data);
      })

      //6.$.ajax()方法

    case '/ajax/ajax.html':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        if (err) throw err;
        response.end(data);
      })
      break;
      //GET&POST方式获获取
    case '/ajaxGet&Post':
      if (type == "POST") {
        let objData = '';
        request.on('data', (chunk) => {
          objData += chunk;
        });
        request.on('end', () => {
          let send = querystring.parse(objData);
          //console.log(send);
          //console.log(objData)
          let curSend = JSON.stringify(send);
          response.end(curSend);
        })
      } else {
        //GET请求
        let query = JSON.stringify(queryString);
        console.log(queryString);
        response.end(query);
      }
      break;
      //nativeAjax
    case '/nativeAjax.html':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        if (err) throw err;
        response.end(data);
      })
      break;
      //获取jQuery文件
    case '/jquery.js':
      fs.readFile(path.join(__dirname, pathName), (err, data) => {
        // if (err) throw err;
        response.end(data);
      })
      break;
      //获取index.html
      //获取jQuery
    case '/':
      fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        // if (err) throw err;
        response.end(data);
      })
      break;

    default:
      break;
  }

  //结束
});

server.listen(3000);
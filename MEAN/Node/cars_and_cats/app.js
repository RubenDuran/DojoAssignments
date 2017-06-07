var fs = require('fs'),
    http = require('http'),
    port = 5000;

    var server = http.createServer(function (request, response){
        // see what URL the clients are requesting:
        console.log('client request URL: ', request.url);
        // this is how we do routing:
        if(request.url === '/') {
            fs.readFile('views/index.html', 'utf8', function (errors, contents){
                console.log(errors);
                console.log(contents);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/cars") {
             fs.readFile('views/cars.html', 'utf8', function (errors, contents){
                 response.writeHead(200, {'Content-type': 'text/html'});
                 response.write(contents);
                 response.end();
             });
        }

        else if (request.url === "/cats") {
             fs.readFile('views/cats.html', 'utf8', function (errors, contents){
                 response.writeHead(200, {'Content-type': 'text/html'});
                 response.write(contents);
                 response.end();
             });
        }

        else if (request.url === "/cars/new") {
             fs.readFile('views/new.html', 'utf8', function (errors, contents){
                 response.writeHead(200, {'Content-type': 'text/html'});
                 response.write(contents);
                 response.end();
             });
        }

        else if (request.url === "/stylesheets") {
             fs.readFile('stylesheets/styles.css', 'utf8', function (errors, contents){
                 response.writeHead(200, {'Content-Type': 'text/css'});
                 response.write(contents);
                 response.end();
             });
        }
        else if (request.url === "/images/cars/car1.jpg") {
             fs.readFile('images/cars/car1.jpg', function (errors, contents){
                 response.writeHead(200, {'Content-Type': 'image/jpg'});
                 response.write(contents);
                 response.end();
             });
        }

        else {
            response.end('File not found!!!');
        }
    });
    // tell your server which port to run on
    server.listen(5000);
    // print to terminal window
    console.log("Running in localhost at port 5000");





    //
    // var http = require('http'),
    //     fs = require('fs');
    //
    // var server = http.createServer(function(request, response){
    //
    //   // SPLIT THE URL IN ORDER TO EXAMINE IT BETTER
    //   var splitURL = request.url.split('/'),
    //       firstChunk = splitURL[1]; // Set of characters after the first /
    //
    //   switch (firstChunk) {
    //     case "styles":
    //     // SERVE CSS!
    //       serveCSS(splitURL[2], response);
    //       break;
    //     case "images":
    //     // SERVE A JPG IMAGE!
    //       serveJPG(splitURL[2], response);
    //       break;
    //     default:
    //     // SERVE AN HTML FILE!
    //       switch(splitURL[1]){
    //         case "cars": // If firstChunk is 'cars', could be one of two routes.
    //           if (splitURL[2] === "new") {
    //             serveHTML("new.html", response);
    //           } else {
    //             serveHTML("cars.html", response);
    //           }
    //           break;
    //         case "cats":
    //           serveHTML("cats.html", response);
    //           break;
    //         default:
    //           // We don't recognize this URL -- serve a 404!
    //           serve404(response);
    //       }
    //   }
    // });
    //
    // // We call on these help functions, giving each the response object (and filename in most cases) to serve the correctly-configred response.
    // // If any callback gets an error, meaning the file wasn't found, we serve 404!
    //
    // function serveHTML(filename, response){
    //   // Read a particular file...
    //   fs.readFile(`views/${filename}`, 'utf8', function(error, contents){
    //     // Check to see if an error exists
    //     if (error) { return serve404(response) }
    //     // Respond to the browser
    //     response.writeHead(200, {'Content-type' : 'text/html' });
    //     response.write(contents);
    //     response.end();
    //   });
    // }
    //
    // function serveCSS(filename, response){
    //   // Read a particular file...
    //   fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents){
    //     // Check to see if an error exists
    //     if (error) { return serve404(response) }
    //     // Respond to the browser
    //     response.writeHead(200, {'Content-type' : 'text/css' });
    //     response.write(contents);
    //     response.end();
    //   });
    // }
    //
    // function serveJPG(filename, response){
    //   // Read a particular file...
    //   fs.readFile(`images/${filename}`, function(error, contents){
    //     // Check to see if an error exists
    //     if (error) { return serve404(response) }
    //     // Respond to the browser
    //     response.writeHead(200, {'Content-type' : 'image/jpg' });
    //     response.write(contents);
    //     response.end();
    //   });
    // }
    //
    // function serve404(response){
    //   response.writeHead(404);
    //   response.end("File not found!");
    // }
    //
    // server.listen(7077);
    // console.log("Running on 7077");

# Front End

Webpack with hot reload
Web server (webpack-dev-server) port 4000
API expected at port 8080

# Docker usage

## Build

`sudo docker build -t angular-jwt .`

## Run

`sudo docker run -p 4000:4000 -v $(pwd)/src:/app/src -w /app -i -t angular-jwt`

# Thanks to

Angular 6 JWT Authentication Example with Webpack 4

To see a demo and further details go to http://jasonwatmore.com/post/2018/05/23/angular-6-jwt-authentication-example-tutorial
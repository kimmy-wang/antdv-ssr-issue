const http = require("http");
const app = require("./app");

const httpServer = http.createServer(app);
httpServer.listen(8080, function () {
  console.log("HTTP Server is running on: http://localhost:%s", 8080);
});
const exitHandler = () => {
  if (httpServer) {
    httpServer &&
      httpServer.close(() => {
        process.exit(1);
      });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  if (httpServer) {
    httpServer.close();
  }
});

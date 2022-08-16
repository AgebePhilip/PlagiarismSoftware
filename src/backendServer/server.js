

const jsonServer = require('json-server');

// obtain an instance ofa server
const server = jsonServer.create();

// SERVER ON PORT NUMBER ASSPECIFIED HERE

server.listen(4000, () => {
 console.log('JSON Server is running');
});

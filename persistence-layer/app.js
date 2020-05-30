const Hapi = require('hapi');
const routes = require("./routes");

const server = Hapi.server({
	port: 4000
});

const initServer = async () => {
	try {
		await server.register(routes);
		await server.start();
		console.log("Server running ...");
	} catch (error) {
		console.log("Error trying to start server");
	}
};

initServer();

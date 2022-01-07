import net from "net";

const server = net.createServer((client) => {
  console.info("Client Connection");
  client.addListener("data", (data) => {
    console.info(`Received data ${data.toString()}`);
    client.write(`Halo ${data.toString()} \r\n`);
  });
});

server.listen(3000, "localhost");

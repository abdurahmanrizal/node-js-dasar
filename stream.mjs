import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Hello\n");
writer.write("Node Js\n");
writer.write("by Open Foundation");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});

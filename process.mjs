import process from "process";

process.on("exit", (exitCode) => {
  console.info(`Process exit with code ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);
console.info("Hello Node JS");

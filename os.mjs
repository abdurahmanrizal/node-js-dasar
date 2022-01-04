import os from "os"

console.info(os.platform())
console.info(os.hostname())
console.info(os.freemem())
console.info(os.totalmem())

console.table(os.cpus())
console.table(os.networkInterfaces())


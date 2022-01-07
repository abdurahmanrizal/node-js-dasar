import process from "process";
import readline from "readline";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "reports.json";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa nama anda? ", (name) => {
  input.question("Umur anda berapa? ", (age) => {
    if (name != "Abdurahman" && age != 23) {
      throw new Error("Oopss...");
    }
    console.info(`Halo nama saya ${name} dan umur saya ${age}`);
    input.close();
  });
});
// function sampleError() {
//   throw new Error("Oopss....");
// }
// sampleError();

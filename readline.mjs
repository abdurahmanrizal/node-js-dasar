import readline from "readline";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa nama anda? ", (name) => {
  input.question("Umur anda berapa? ", (age) => {
    console.info(`Halo nama saya ${name} dan umur saya ${age}`);
    input.close();
  });
});

import timer from "timers/promises";
// console.info(`Start Date ${new Date()}`);
// const name = await timer.setTimeout(5000, "Eko");
// console.info(`End Date ${new Date()}`);
// console.info(name);

for await (const startTime of timer.setInterval(1000, "ignored")) {
  console.info(`Start Time ${new Date()}`);
}

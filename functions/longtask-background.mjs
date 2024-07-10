function someLongRunningTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export default async (req, context) => {
  await someLongRunningTask();
  console.log("Done");
};

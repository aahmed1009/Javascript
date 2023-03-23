const goatPromise = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});
goatPromise.then(() => {
  console.log("WELL We Got A Goat");
});
goatPromise.catch(() => {
  console.log("No  Goat");
});

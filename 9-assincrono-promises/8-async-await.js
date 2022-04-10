/*
    Async/Await

    - Maneira de escrever promises
    - Syntactic Sugar
*/

const promessa = new Promise((resolve, reject) => {
  return resolve("ok");
});

async function start() {
  try {
    const result = await promessa;
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("roda sempre");
  }
}

start();

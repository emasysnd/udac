function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!', process.env.NAME);
    await sleep(5000);
  }
}

main();

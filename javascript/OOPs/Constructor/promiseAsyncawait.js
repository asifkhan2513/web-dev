async function asif() {
  let delhiWethear = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 1000);
  });

  let BangoloreWethear = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30 deg");
    }, 5000);
  });

  let delhiw = await delhiWethear;
  let BangoloreW = await BangoloreWethear;
  return [delhiw, BangoloreW];
}
console.log("welcome to the wethear control room");
asif();

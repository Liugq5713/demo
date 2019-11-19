function getSomeAfterOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("run,11");

      resolve("done");
    }, 1000);
  });
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isPromise(val) {
  return (
    isDef(val) &&
    typeof val.then === "function" &&
    typeof val.catch === "function"
  );
}

async function main() {
  const a = await getSomeAfterOneSecond();
  console.log(a);
  const b = getSomeAfterOneSecond();
  console.log({ b }, isPromise(b));
}

const myRequest = async func => {
  const res = await func();
  return res;
};

const add = () => {
  console.log("run");
  return "this is no result";
};
async function test() {
  const res = await myRequest(add);
  const res2 = await myRequest(getSomeAfterOneSecond);
  console.log({ res, res2 });
}
test();
// main();

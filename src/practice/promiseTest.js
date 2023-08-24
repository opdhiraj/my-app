let isMomHappy = true;

function momsGift() {
  return new Promise((resolve, reject) => {
    //if fullfiled
    if (isMomHappy) {
      let phone = {
        name: "Iphone",
        price: 100000,
      };
      resolve(phone);
    } else {
      //not fullfilled
      reject(new Error("Have you seen your score card"));
    }
  });
}

let surprize = momsGift();

surprize
  .then((successresponse) => {
    console.log(successresponse);
  })
  .catch((errorresponse) => {
    console.log(errorresponse);
  });

let button = document.querySelector("button");

let img = document.querySelector("img");

let qr = document.querySelector("#qr");

let input = document.querySelector("input");

button.addEventListener("click", function () {
  //   img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  if (input.value.length > 0) {
    img.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
    );
    qr.classList.add("show-img");
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
});

const zip = document.getElementById("zip");
const zip_value = document.getElementById("zip-value");
const zip_validation = document.getElementById("zip-validation");
const progress = document.getElementById("progress");
let back = document.getElementsByClassName("go-back")[0];
let counter = 0;
let data = {
  zip: "",
  window_upgrade: "",
};

zip.addEventListener("click", () => {
  if (zip_value.value.length != 5) {
    zip_value.style.border = "1px solid red";
    zip_value.style.color = "red";
    zip_validation.style.display = "block";
  } else {
    zip_value.style.border = "none";
    zip_value.style.color = "#292929";
    zip_validation.style.display = "none";
    data.zip = `${zip_value.value}`;

    let one = document.getElementsByClassName("one")[0];
    let two = document.getElementsByClassName("two")[0];

    one.style.display = "none";
    two.style.display = "block";
    back.style.display = "unset";
    counter++;
  }
});

function send(number) {
  let boxes = document.getElementsByClassName("box");

  for (box of boxes) {
    if (box.classList.contains("check")) {
      box.classList.remove("check");
    }
  }

  boxes[number].classList.add("check");
  let x = boxes[number].getAttribute("val");
  data.window_upgrade = x;
}

back.addEventListener("click", () => {
  let current = document.getElementById(`q${counter}`);
  current.style.display = "none";
  counter--;
  if (counter == 0) {
    back.style.display = "none";
  }
  let previous = document.getElementById(`q${counter}`);
  previous.style.display = "block";
});

// import "./styles.css";
let main_display = "";
let calc_operation = document.getElementById("calc-operation");
let calc_typed = document.getElementById("calc-typed");
console.log(calc_operation.innerHTML);
calc_operation.innerHTML = main_display;

const chars = {
  x: "*",
  "/": "/",
  "+": "+",
  "-": "-",
  "%": "%"
};

var calculator_func = (event) => {
  console.log(event.target.value);
  const value = event.target.value;
  let prev = "";
  if (value === "ac") {
    main_display = "";
    calc_operation.innerHTML = main_display;
    calc_typed.innerHTML = "";
  } else if (value === "*") {
    if (main_display[main_display.length - 1] in chars) {
      prev =
        main_display.substring(0, main_display.length - 1) + "x" + calc_typed;
    } else {
      prev = main_display + calc_typed.innerHTML + "x";
    }
    main_display = prev;
    calc_operation.innerHTML = main_display;
    calc_typed.innerHTML = "";
  } else if (value === "-") {
    if (main_display[main_display.length - 1] in Object.values(chars)) {
      prev = main_display[main_display.length - 2] + "-" + calc_typed;
    } else {
      prev = main_display + calc_typed.innerHTML + "-";
    }
    main_display = prev;
    calc_operation.innerHTML = main_display;
    calc_typed.innerHTML = "";
  } else if (value === "+") {
    if (main_display[main_display.length - 1] in Object.values(chars)) {
      prev = main_display[main_display.length - 2] + "+" + calc_typed;
    } else {
      prev = main_display + calc_typed.innerHTML + "+";
    }
    main_display = prev;
    calc_operation.innerHTML = main_display;
    calc_typed.innerHTML = "";
  } else if (value === "/") {
    if (main_display[main_display.length - 1] in Object.values(chars)) {
      prev = main_display[main_display.length - 2] + "/" + calc_typed;
    } else {
      prev = main_display + calc_typed.innerHTML + "/";
    }
    main_display = prev;
    calc_operation.innerHTML = main_display;
    calc_typed.innerHTML = "";
  } else if (value === "backspace") {
    let backspace_val = calc_typed.innerHTML;
    if (backspace_val) {
      backspace_val = backspace_val.substring(0, backspace_val.length - 1);
    }
    calc_typed.innerHTML = backspace_val;
  } else if (value === "=") {
    main_display += calc_typed.innerHTML;
    let calculate = main_display.replace(/[x/+-]/g, (m) => chars[m]);
    console.log(calculate);
    try {
      const calculate_val = eval(calculate);
      calc_operation.innerHTML = main_display;
      calc_typed.innerHTML = calculate_val;
      main_display = "";
    } catch {
      calc_typed.innerHTML = "Error";
    }
  } else {
    calc_typed.innerHTML += value;
  }
};

let calculator_btns = document.querySelectorAll(".calculator_btn");

// Adding eventListeners to button
calculator_btns.forEach((element) => {
  element.addEventListener("click", calculator_func);
});

const btn0 = document.querySelector(".zero");
const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const btn3 = document.querySelector(".three");
const btn4 = document.querySelector(".four");
const btn5 = document.querySelector(".five");
const btn6 = document.querySelector(".six");
const btn7 = document.querySelector(".seven");
const btn8 = document.querySelector(".eight");
const btn9 = document.querySelector(".nine");
const dotBtn = document.querySelector(".dot");
const clearBtn = document.querySelector(".clear");
const negateBtn = document.querySelector(".negate");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const addBtn = document.querySelector(".add");
const subBtn = document.querySelector(".sub");
const equalBtn = document.querySelector(".equal");
const deleteBtn = document.querySelector(".delete");
const percentageBtn = document.querySelector(".percentage");
const input = document.querySelector(".numbers");
const answer = document.querySelector(".answer");

let dot = false;
let sign = "";
let clear = false;
let a = 0;
let b = 0;
let clickCount = 0;

const calc = (a, b, sign) => {
	if (sign == "/") {
		return a / b;
	} else if (sign == "*") {
		return a * b;
	} else if (sign == "+") {
		return a + b;
	} else if (sign == "-") {
		return a - b;
	} else if (sign == "") {
		return a;
	}
};

const check = (input) => {
	if (!input.value.match(/\./) && input.value.length < 16) {
		return true;
	} else if (input.value.match(/\./) && input.value.length < 17) {
		dot = true;
		console.log(dot);
		return true;
	} else if (input.value > 16) {
		return false;
	}
};

const checkSign = (answer) => {
	const arr = answer.innerHTML.split(" ");
	if(arr[1] && !arr[2]){
		return true
	}return false
}

btn0.addEventListener("click", () => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
		}
		if (!checkSign(answer)) {
			input.value = 0;
			dot = false;
			answer.innerHTML = "";
      sign = ""
			clickCount = 0;
		} else if(checkSign(answer)){
			input.value = `${input.value + 0}`;
		}
	}

	clickCount = 0;
});

btn1.addEventListener("click", () => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
		}
    if (!checkSign(answer)) {
			input.value = 1;
			dot = false;
			answer.innerHTML = "";
			clickCount = 0;
      sign = ""
		} else if(checkSign(answer)) {
			input.value = `${input.value + 1}`;
		}
	}
	clickCount = 0;
});

btn2.addEventListener("click", () => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
		}
    if (!checkSign(answer)) {
			input.value = 2;
			dot = false;
			answer.innerHTML = "";
      sign = ""
			clickCount = 0;
		}  else if(checkSign(answer)){
			input.value = `${input.value + 2}`;
		}
	}
	clickCount = 0;
});

btn3.addEventListener("click", () => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
		}
    if (!checkSign(answer)) {
			input.value = 3;
			dot = false;
			answer.innerHTML = "";
      sign = ""
			clickCount = 0;
		}  else if(checkSign(answer)){
			input.value = `${input.value + 3}`;
		}
	}
	clickCount = 0;
});

btn4.addEventListener("click", () => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
		}
    if (!checkSign(answer)) {
			input.value = 4;
			dot = false;
			answer.innerHTML = "";
      sign = ""
			clickCount = 0;
		}  else if(checkSign(answer)) {
			input.value = `${input.value + 4}`;
		}
	}
	clickCount = 0;
});

btn5.addEventListener("click", () => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
		}
    if (!checkSign(answer)) {
			input.value = 5;
			dot = false;
			answer.innerHTML = "";
      sign = ""
			clickCount = 0;
		} else if(checkSign(answer)){
			input.value = `${input.value + 5}`;
		}
	}
	clickCount = 0;
});

btn6.addEventListener("click", () => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
		}
    if (!checkSign(answer)) {
			input.value = 6;
			dot = false;
			answer.innerHTML = "";
			clickCount = 0;
      sign = ""
		} else if(checkSign(answer)) {
			input.value = `${input.value + 6}`;
		}
	}
	clickCount = 0;
});

btn7.addEventListener("click", () => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
		}
    if (!checkSign(answer)) {
			input.value = 7;
			dot = false;
			answer.innerHTML = "";
      sign = ""
			clickCount = 0;
		}  else if(checkSign(answer)) {
			input.value = `${input.value + 7}`;
		}
	}
	clickCount = 0;
});

btn8.addEventListener("click", () => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
			clear = false;
		}
    if (!checkSign(answer)) {
			input.value = 8;
			dot = false;
			answer.innerHTML = "";
			clickCount = 0;
      sign = ""
		} else if(checkSign(answer)){
			input.value = `${input.value + 8}`;
		}
	}
	clickCount = 0;
});

btn9.addEventListener("click", () => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
		}
    if (!checkSign(answer)) {
			input.value = 9;
			dot = false;
			answer.innerHTML = "";
			sign = ""
			clickCount = 0;
		}  else if(checkSign(answer)) {
			input.value = `${input.value + 9}`;
		}
	}
	clickCount = 0;
});

dotBtn.addEventListener("click", () => {
	const checker = check(input);
	if (checker && !dot) {
		input.value = `${input.value.toString() + "."}`;
	}
});

clearBtn.addEventListener("click", () => {
	dot = false;
	input.value = "";
	answer.innerHTML = "";
	a = 0;
	b = 0;
	clickCount = 0;
	ans = 0;
});

negateBtn.addEventListener("click", () => {
	input.value = -+input.value;
});

divideBtn.addEventListener("click", () => {
	sign = "/";
	answer.innerHTML = `${input.value} ÷`;
	a = +input.value;
	input.value = "";
});

multiplyBtn.addEventListener("click", () => {
	answer.innerHTML = `${input.value} x`;
	a = +input.value;
	sign = "*";
	input.value = "";
});

addBtn.addEventListener("click", () => {
	answer.innerHTML = `${input.value} +`;
	a = +input.value;
	sign = "+";
	input.value = "";
});

subBtn.addEventListener("click", () => {
	answer.innerHTML = `${input.value} -`;
	a = +input.value;
	sign = "-";
	input.value = "";
});

deleteBtn.addEventListener("click", () => {
	const arr = input.value.split("");
	arr[arr.length - 1] = "";
	input.value = arr.join("");
});

equalBtn.addEventListener("click", () => {
	if (sign == "") {
		answer.innerHTML = `${input.value} =`;
    input.value
	} else if (clickCount < 1) {
		b = +input.value;
		answer.innerHTML += ` ${input.value} =`;
		let ans = calc(a, b, sign);
		input.value = ans;
		clickCount++;
	} else if (b && clickCount >= 1) {
		const arr = answer.innerHTML.split(" ");
		// console.log(arr)
		arr[0] = input.value;
		arr.join(" ");
		a = arr[0];
		b = arr[2];
		// console.log(arr.join(" "))
		answer.innerHTML = arr.join(" ");
		let ans = calc(a, b, sign);
		input.value = ans;
	}
});


percentageBtn.addEventListener("click", () => {
  answer.innerHTML = `${input.value}%`
  input.value = +input.value / 100
  clickCount++;
})
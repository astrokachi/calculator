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
		return +a + +b;
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
	let split = answer.innerHTML.split(" ");
	if (split.length == 4) {
		return true;
	}
	return false;
};

const checkButton = (num) => {
	const checker = check(input);
	if (checker) {
		if (clear) {
			input.value = "";
		}
		if (checkSign(answer)) {
			Clear();
			input.value += `${num}`;
		} else if (!checkSign(answer)) {
			input.value += `${num}`;
		}
	}

	checkSign(answer);
	clickCount = 0;
};

const evalSign = (val) => {
	sign = val;
	answer.innerHTML = `${input.value} ${sign}`;
	a = +input.value;
	input.value = "";
	dot = false;
};

const Clear = () => {
	dot = false;
	input.value = "";
	answer.innerHTML = "";
	a = 0;
	b = 0;
	clickCount = 0;
	ans = 0;
};

btn0.addEventListener("click", () => checkButton(0));
btn1.addEventListener("click", () => checkButton(1));
btn2.addEventListener("click", () => checkButton(2));
btn3.addEventListener("click", () => checkButton(3));
btn4.addEventListener("click", () => checkButton(4));
btn5.addEventListener("click", () => checkButton(5));
btn6.addEventListener("click", () => checkButton(6));
btn7.addEventListener("click", () => checkButton(7));
btn8.addEventListener("click", () => checkButton(8));
btn9.addEventListener("click", () => checkButton(9));

dotBtn.addEventListener("click", () => {
	const checker = check(input);
	if (checker && !dot) {
		input.value = `${input.value.toString() + "."}`;
	}
});

clearBtn.addEventListener("click", () => Clear());

negateBtn.addEventListener("click", () => {
	input.value = -+input.value;
});

divideBtn.addEventListener("click", () => evalSign("/"));
addBtn.addEventListener("click", () => evalSign("+"));
subBtn.addEventListener("click", () => evalSign("-"));
multiplyBtn.addEventListener("click", () => evalSign("*"));

deleteBtn.addEventListener("click", () => {
	const arr = input.value.split("");
	arr[arr.length - 1] = "";
	input.value = arr.join("");
});

equalBtn.addEventListener("click", () => {
	if (sign == "") {
		answer.innerHTML = `${input.value} =`;
		input.value;
	} else if (clickCount < 1) {
		b = +input.value;
		answer.innerHTML += ` ${input.value} =`;
		let ans = calc(a, b, sign);
		input.value = ans;
		clickCount++;
	} else if (b && clickCount >= 1) {
		const arr = answer.innerHTML.split(" ");
		arr[0] = input.value;
		arr.join(" ");
		a = arr[0];
		b = arr[2];
		answer.innerHTML = arr.join(" ");
		let ans = calc(a, b, sign);
		input.value = ans;
	}
});

percentageBtn.addEventListener("click", () => {
	answer.innerHTML = `${input.value}%`;
	input.value = +input.value / 100;
	clickCount++;
});

const inputAll = document.querySelectorAll("input, select, textarea");
const btnSend = document.querySelector(".btn-form-send");

let btnSendClicked = 0;
let errorCount = 0;

const showSuccess = (input) => {
	const inputBox = input.closest(".input-container__box");
	const inputRequirements = inputBox.querySelector(
		".input-container__requirements"
	);
	const inputRequirementsIcon = inputBox.querySelector(".requirements-icon");

	inputBox.classList.remove("input-container__box--error");
	inputRequirements.classList.remove("input-container__requirements--error");
	inputRequirements.classList.add("input-container__requirements--success");
	inputRequirementsIcon.innerHTML = `<i class="ti ti-circle-check"></i>`;
};

const showError = (input) => {
	const inputBox = input.closest(".input-container__box");
	const inputRequirements = inputBox.querySelector(
		".input-container__requirements"
	);
	const inputRequirementsIcon = inputBox.querySelector(".requirements-icon");

	inputBox.classList.add("input-container__box--error");
	inputRequirements.classList.remove("input-container__requirements--success");
	inputRequirements.classList.add("input-container__requirements--error");
	inputRequirementsIcon.innerHTML = `<i class="ti ti-circle-x"></i>`;

	errorCount++;
};

const clearState = (input) => {
	const inputBox = input.closest(".input-container__box");
	const inputRequirements = inputBox.querySelector(
		".input-container__requirements"
	);
	const inputRequirementsIcon = inputBox.querySelector(".requirements-icon");

	inputBox.classList.remove("input-container__box--error");
	inputRequirements.classList.remove("input-container__requirements--success");
	inputRequirements.classList.remove("input-container__requirements--error");
	inputRequirementsIcon.innerHTML = `<i class="ti ti-exclamation-circle"></i>`;
};

const checkInput = (input) => {
	if (input.id === "name") {
		if (input.value.length >= 3) {
			showSuccess(input);
		} else {
			showError(input);
		}

		if (input.value.length == 0 && btnSendClicked == 0) {
			clearState(input);
		}
	}

	if (input.id === "category") {
		if (input.value != "none") {
			showSuccess(input);
		} else {
			showError(input);
		}

		if (input.value.length == 0 && btnSendClicked == 0) {
			clearState(input);
		}
	}

	if (input.id === "description") {
		if (input.value.length != 0) {
			showSuccess(input);
		} else {
			showError(input);
		}

		if (input.value.length == 0 && btnSendClicked == 0) {
			clearState(input);
		}
	}
};

const checkInputAll = () => {
	inputAll.forEach((input) => {
		checkInput(input);
	});

	btnSendClicked = 0;
};

inputAll.forEach((input) => {
	input.addEventListener("input", () => {
		checkInput(input);
	});
});

btnSend.addEventListener("click", (e) => {
	e.preventDefault();

	btnSendClicked = 1;
	errorCount = 0;

	checkInputAll();

	if (errorCount == 0) {
		console.log("No errors.");
		btnSend.disabled = true;
		btnSend.classList.add("btn--disabled");

		const form = document.querySelector("form");
		const formData = new FormData(form);
		const url = "./php/handleForm.php";
		const method = "POST";
		fetch(url, {
			method,
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					// successCallback();
					console.log("Form sended successfully.");
				} else {
					const errorsAll = data.errors;
					errorsAll.forEach((error) => {
						console.log(error);
						checkInput(error);
					});
				}
			})
			.catch((error) => {
				// errorCallback();
				console.log(error);
			});
	} else {
		console.log(`Error count: ${errorCount}`);
	}
});

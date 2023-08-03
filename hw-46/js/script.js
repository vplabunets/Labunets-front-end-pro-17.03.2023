(function () {
	//get elements
	const formEl = document.querySelector("#form");
	formEl.addEventListener("submit", formSubmitHandler1)
	formEl.addEventListener("submit", formSubmitHandler2)


	function formSubmitHandler1(event) {
		event.preventDefault()
		let formElementsValues = {}
		const formData = new FormData(formEl)

		for (const key of formData.keys()) {
			formElementsValues[key] = formData.get(key)
		}
		console.log(formElementsValues)

	}

	function formSubmitHandler2(event) {
		event.preventDefault()
		let formElementsValues = {}

		for (let el of event.target.elements) {
			formElementsValues[el.name] = el.value;
		}
		console.log(formElementsValues)
		formEl.reset()
	}


})()
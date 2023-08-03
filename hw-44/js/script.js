(function () {
	//get elements
	const formEl = document.querySelector("#form");
	console.log(formEl)
	formEl.addEventListener("submit", formSubmitHandler)
	const formDataNames = ["email", "firstName", "lastName", "nickname", "password", "option", "message", "file", "terms"]

	function formDataEntryValueGetter(data, name) {
		return data.get(name)
	}

	function formSubmitHandler(event) {
		event.preventDefault()
		let formElementsValues = {"a": 1}
		const formData = new FormData(formEl)
		formDataNames.forEach(element => {


				// console.log(formDataEntryValueGetter(formData, element))
				console.log("before", formElementsValues)
				formElementsValues = {...formElementsValues, element}
				console.log("after", formElementsValues)

			}
		)

		const email = formData.get("email")
		const firstName = formData.get("firstName")
		const lastName = formData.get("lastName")
		const nickname = formData.get("nickname")
		const password = formData.get("password")
		const option = formData.get("option")
		const message = formData.get("message")
		const file = formData.get("file")
		const terms = formData.get("terms")

		// const formElementsValues = {email, firstName, lastName, nickname, password, option, message, file, terms}

	}


})()
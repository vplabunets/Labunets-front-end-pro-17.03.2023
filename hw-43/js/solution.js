(function () {
	//get elements
	const bodyEl = document.querySelector("body")

	function generateElementMarkup(element) {
		return `<li>${element}</li>`
	}

	function generateListMarkup(array) {
		return `<ul>${array.map(element => {
				if (Array.isArray(element)) {
					return generateListMarkup(element)
				}
				return generateElementMarkup(element)
			}
		).join("")}</ul>`
	}

	console.log(generateListMarkup([1, 2, [1.1, 1.2, 1.3], 3]))

	bodyEl.innerHTML = generateListMarkup([1, 2, [1.1, 1.2, 1.3], 3])

})()
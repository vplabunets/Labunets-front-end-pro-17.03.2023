(function () {
    //get elements
    const bodyEl = document.querySelector("body")

    // console.log(bodyEl)

    function generateElementMarkup(element) {
        return `<li>${element}</li>`
    }

    function generateList(array) {
        return `<ul>${array.map(element => generateElementMarkup(element)).join("")}</ul>`
    }

    // console.log(generateList([1, 2, 3]))

    function generateNestedList(array) {
        const xxx = null
        for (let i = 0; i < array.length; i += 1) {
            const xxx = generateList(array)
            // console.log(array[i])
            if (Array.isArray(array[i])) {
                generateNestedList(array[i])
            }

        }
        return xxx
    }

    console.log(generateNestedList([1, 2, [1.1, 1.2, 1.3], 3]))
})()
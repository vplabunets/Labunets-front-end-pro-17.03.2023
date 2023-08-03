(function () {
    //get elements and initialize arrays
    const listElement = document.querySelector("#ulId")
    const itemsElements = document.querySelectorAll("li")
    const attributeNames = []
    const attributeValues = []

    itemsElements.forEach(item => console.log(item))

    // Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of)
    for (const name of listElement.getAttributeNames()) {
        const value = listElement.getAttribute(name);
        // Записать значение каждого атрибута в массив
        attributeValues.push(value)
        // Так-же записать в отдельный массив каждое имя атрибута
        attributeNames.push(name)

    }
    //Вывести этот массив имен атрибутов в консоль
    console.log("Attribute list", attributeNames)
    //Вывести этот массив значений атрибутов в консоль
    console.log("Attribute values list", attributeValues)

    //С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
    const lastLiElement = listElement.lastElementChild
    lastLiElement.textContent = "Hello, my name is Volodymyr"
    console.log("List last element", lastLiElement)

    //Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
    const firstLiElement = listElement.firstElementChild
    firstLiElement.dataset.myName = "Volodymyr"
    console.log("List first element", firstLiElement)

    //Удалить у тега ul атрибут ‘data-dog-tail‘
    listElement.removeAttribute("data-dog-tail")
    console.log("Elements list", listElement)

})()
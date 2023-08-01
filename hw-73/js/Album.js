class Album {
    albumMarkupCreate(data) {
        return `<a class="list-group-item list-group-item-action flex-column align-items-start" href="pictures.html" data-id="${data.id}">${data.title}</a>`
    }
}

const album = new Album()

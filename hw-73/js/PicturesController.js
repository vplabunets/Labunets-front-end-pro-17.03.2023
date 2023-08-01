class PicturesController {
    picturesWrapperEl = document.querySelector(".pictures__content")
    #picturesLink = "https://jsonplaceholder.typicode.com/photos?albumId="

    constructor() {

    }

    async fetchPictures(albumId) {
        try {
            const response = await fetch(`${this.#picturesLink}${albumId}`)
            const pictures = await response.json()
            return pictures
        } catch (error) {
            console.error(error)
        }
    }


    async fillPictures(id) {
        await this.fetchPictures(id).then(res2 => this.picturesWrapperEl.insertAdjacentHTML("afterbegin", this.picturesMarkupCreate(res2, picture.pictureMarkupCreate))).catch(error => console.error(error))
    }


    picturesMarkupCreate(pictures, pictureMarkup) {
        return `<div class="row gap-4">${pictures.map(element => pictureMarkup(element)).join("")}</div>`
    }
}

const picturesController = new PicturesController()

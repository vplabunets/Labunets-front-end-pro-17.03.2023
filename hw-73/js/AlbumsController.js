class AlbumsController {
    #albumsLink = "https://jsonplaceholder.typicode.com/albums"
    albumsWrapperEl = document.querySelector(".albums__content")

    constructor() {
        this.fillAlbums()
        this.setEvents()
    }

    async fetchAlbums() {
        try {
            const response = await fetch(this.#albumsLink)
            const albums = await response.json()
            return albums
        } catch (error) {
            console.error(error)
        }

    }

    async fillAlbums() {
        await this.fetchAlbums().then(albums => this.albumsWrapperEl.innerHTML = this.albumsMarkupCreate(albums, album.albumMarkupCreate)).catch(error => console.error(error))

    }

    albumsMarkupCreate(albums, albumMarkup) {
        return `<div class="list-group">${albums.map(element => albumMarkup(element)).join("")}</div>`
    }

    async clickHandler(event) {
        if (event.target.nodeName === "A") {
            await picturesController.fillPictures(event.target.dataset.id)
            // this.albumsWrapperEl.removeEventListener("click", this.clickHandler)
        }
    }

    setEvents() {
        this.albumsWrapperEl.addEventListener("click", this.clickHandler)
    }

    removeEvents() {
        this.albumsWrapperEl.removeEventListener("click", this.clickHandler)
    }
}

const albumsController = new AlbumsController()

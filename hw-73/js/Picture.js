class Picture {
    pictureMarkupCreate(data) {
        const {url, thumbnailUrl, title} = data
        return `<div class="col">
                    <a href="${url}"><img src="${thumbnailUrl}" alt="${title}"></a>
                </div>`
    }

}

const picture = new Picture()
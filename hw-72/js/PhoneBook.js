class PhoneBook {
    #callBtnAttr = "data-call"
    #removeBtnAttr = "data-remove"
    #userIdAttr = "data-user-id"

    #contacts = [];
    #searchedContacts = [];
    listEl = document.querySelector(".list-group")
    inputEl = document.querySelector(".form-control")

    constructor(users) {
        this.#fillContacts(users)
        this.setEvents()
    }

    static #getAttrValue(el, attrName) {
        return el.closest(`[${attrName}]`).getAttribute(attrName)
    }

    #fillContacts(users) {
        users.forEach(userData => {
            // Change to addContact method
            this.addContact(userData)
        })
    }

    addContact(data) {
        const userModel = User.dataModel()
        for (const key in userModel) {
            if (typeof data[key] !== userModel[key]) {
                console.warn(`User ${data.name} cannot be added to contacts`)
                return
            }
        }
        this.#contacts.push(new User(data))
        this.listEl.insertAdjacentHTML("afterbegin", this.userTemplate(data))
        return this.#contacts.at(-1)
    }

    removeContact(id) {
        console.log(id)
        // this.#contacts = this.#contacts.filter(contact => contact.id !== id)
        this.#contacts.splice(this.#contacts.findIndex((contact => contact.id === id)), 1)
        this.listEl.querySelector(`[${this.#userIdAttr}="${id}"]`).remove()
    }

    searchContacts = (event) => {
        this.#searchedContacts = this.#contacts.filter(element => element.name.toLowerCase().includes(event.target.value))
        this.listEl.innerHTML = ""
        if (this.#searchedContacts.length <= 0) this.listEl.innerHTML = "<p>No contact was found</p>"
        this.listEl.insertAdjacentHTML("afterbegin",
            this.#searchedContacts.map(element => this.userTemplate(element)).join("")
        )
    }

    call(userId) {
        // will search user in #contacts field by id
        const {phone} = this.#contacts.find(contact => contact.id === +userId)
        callController.startCall(phone)
        this.listEl.insertAdjacentHTML("afterbegin",
            `calling ${phone}`
        )

    }

    setEvents() {
        this.listEl.addEventListener("click", this.clickHandler)
        this.inputEl.addEventListener("input", this.searchContacts)
        // will set event to html elements for call and remove user
    }

    clickHandler = (event) => {
        event.stopPropagation()
        const {target: el} = event
        const id = PhoneBook.#getAttrValue(el, this.#userIdAttr)
        if (el.hasAttribute(this.#callBtnAttr)) {
            this.call(id)
        }
        if (el.hasAttribute(this.#removeBtnAttr)) {
            this.removeContact(id)
        }
    }

    userTemplate({name, id}) {
        return `<li class="list-group-item d-flex justify-content-between align-items-center" ${this.#userIdAttr}=${id}>
            <span class="contacts__contact">${name}</span>
            <div>
                <button type="button" ${this.#callBtnAttr} class="btn btn-success">
                    <i class="bi bi-telephone"></i>
                </button>
                <button type="button" ${this.#removeBtnAttr} class="btn btn-danger">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </li>`
    }
}


const phoneBook = new PhoneBook(users);
// phoneBook.removeContact()
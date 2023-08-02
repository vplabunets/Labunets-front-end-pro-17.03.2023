class PhoneBook {
    #callBtnAttr = "data-call"
    #removeBtnAttr = "data-remove"
    #userIdAttr = "data-user-id"
    #endCallAttr = "data-end-call"

    #contacts = [];
    #searchedContacts = [];
    listEl = document.querySelector(".list-group")
    inputEl = document.querySelector(".form-control")
    modalEl = document.querySelector("#modal")
    modalBodyEl = document.querySelector(".modal-body")
    endCallButtonEl = document.querySelector("#end-call")

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
        const {phone, name} = this.#contacts.find(contact => contact.id === +userId)
        callController.startCall(phone)
        this.endCallButtonEl.removeAttribute("disabled")
        this.modalBodyEl.innerHTML = `<p class="fs-4">Starting call</p>`
        Call.onStateChange((state) => {
            switch (state) {
                case 'connect':
                    this.modalBodyEl.innerHTML = `<div class="fs-3"><p class="col-sm-8">Connecting with ${name}<i class="bi bi-lg bi-telephone" ></i></p></div>`
                    break
                case 'in progress':
                    this.modalBodyEl.innerHTML = `<div class="fs-4"> Conversation with ${name} started <i class="bi bi-telephone-outbound"></i></div>`
                    break
                case 'reject':
                    this.endCallButtonEl.setAttribute("disabled", "")
                    this.modalBodyEl.innerHTML = `<div class="fs-4"> Call to ${name} rejected <i class="bi bi-telephone-x"></i></div>`
                    break
                case 'disconnect':
                    this.endCallButtonEl.setAttribute("disabled", "")
                    this.modalBodyEl.innerHTML = `<div  class="fs-4"> Call to ${name} was finished <i class="bi bi-telephone-fill"></i></div>`
                    break
            }

        })
    }

    setEvents() {
        // will set event to html elements for call and remove user
        this.listEl.addEventListener("click", this.clickHandler)
        this.inputEl.addEventListener("input", this.searchContacts)
        this.endCallButtonEl.addEventListener("click", this.endCallHandler)

    }

    clickHandler = (event) => {
        event.stopPropagation()
        const el = event.target.closest("button")
        const id = PhoneBook.#getAttrValue(el, this.#userIdAttr)
        if (el.hasAttribute(this.#callBtnAttr)) {
            this.call(id)
        }
        if (el.hasAttribute(this.#removeBtnAttr)) {
            this.removeContact(id)
        }

    }
    endCallHandler = (event) => {
        event.stopPropagation()
        const el = event.target.closest("button")

        if (el.hasAttribute(this.#endCallAttr)) {
            callController.endCall()
            setTimeout(() => {
                this.modalEl.classList.remove("show")
                document.querySelector(".modal-backdrop").remove()
                this.modalEl.style = "display: none"
            }, 1000)
        }
    }


    userTemplate({name, id}) {
        return `<li class="list-group-item d-flex justify-content-between align-items-center" ${this.#userIdAttr}=${id}>
            <span class="contacts__contact">${name}</span>
            <div>
                <button type="button" ${this.#callBtnAttr} class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modal" >
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

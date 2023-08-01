class User {
    #id = null
    name = null
    phone = null
    website = null
    email = null

    constructor({id, name, phone, website, email}) {
        this.#id = id
        this.name = name
        this.phone = phone
        this.website = website
        this.email = email

    }

    get id() {
        return this.#id
    }

    static dataModel() {
        const model = {
            id: "number",
            name: "string",
            phone: "string",
            website: "string",
            email: "string"
        }
        return Object.freeze(model)
    }

    static isUser(obj) {
        // will check if obj is User class instance
    }
}

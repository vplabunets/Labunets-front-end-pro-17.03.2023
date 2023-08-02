class Call {
    static #stateChangeHandlers = [];
    static #callStates = {
        connect: 'connect',
        inProgress: 'in progress',
        disconnect: 'disconnect',
        reject: 'reject',
    }
    #timeout = 1500
    #state = null
    #number = null
    #startDate = null
    #endDate = null
    #duration = 0
    #durationCounterId = null

    constructor(phone) {
        this.#number = phone
        this.state = Call.#callStates.connect
        this.#startDate = new Date();
        this.#startCalcDuration()
        this.dialing()
    }

    static get callStates() {
        return Call.#callStates
    }

    static get randomState() {
        const randomNum = Math.round(Math.random() * 10);
        return randomNum > 5 ? Call.#callStates.inProgress : Call.#callStates.reject
    }

    get state() {
        // console.log("state", this.#state)
        return this.#state
    }

    set state(value) {
        if (!Object.values(Call.#callStates).includes(value)) throw new Error(`You cannot set ${value} as a call status`)
        if (this.#state === Call.#callStates.reject) throw new Error('You cannot set state for rejected call')
        if (this.#state === Call.#callStates.disconnect) throw new Error('You cannot set state for completed call')

        const oldState = this.state
        this.#state = value
        // console.log(this.#state)
        if (value === Call.#callStates.reject || value === Call.#callStates.disconnect) {
            this.#stopCalcDuration()
            this.#endDate = new Date()
        }

        Call.#stateChangeHandlers.forEach(handler => {
            handler(this.#state, oldState)
        })
    }

    get number() {
        return this.#state
    }

    get startDate() {
        return this.#startDate
    }

    get duration() {
        return this.#endDate
    }

    static onStateChange(func) {
        Call.#stateChangeHandlers.push(func)
    }

    static offStateChange(func) {
        Call.#stateChangeHandlers.splice(Call.#stateChangeHandlers.indexOf(func), 1)
    }

    dialing() {
        setTimeout(() => {
            this.state = Call.randomState   // in_progress | rejected
        }, this.#timeout)
    }

    #startCalcDuration() {
        this.#durationCounterId = setInterval(() => {
            this.#duration += 0.5
        }, 500)
    }

    #stopCalcDuration() {
        clearInterval(this.#durationCounterId)
    }
}

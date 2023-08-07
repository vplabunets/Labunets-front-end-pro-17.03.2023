class AsyncTracker {
    #states = {
        pending: "pending",
        fulfilled: "fulfilled",
        rejected: "rejected",
    }
    #state = null
    result = undefined
    #changeStateHandlerThen = null
    #changeStateHandlerCatch = null
    #changeStateHandlerFinally = null

    constructor(func) {
        this.#changeState(this.#states.pending)
        func(this.#resolve, this.#reject)
    }

    #changeState(newState) {
        this.#state = newState
        if (this.#changeStateHandlerThen !== null) {
            this.#changeStateHandlerThen(this.#state)
        }
        if (this.#changeStateHandlerCatch !== null) {
            this.#changeStateHandlerCatch(this.#state)
        }
        if (this.#changeStateHandlerFinally !== null) {
            this.#changeStateHandlerFinally(this.#state)
        }
    }

    #resolve = (arg) => {
        if (this.#state !== this.#states.pending) return
        this.result = arg
        this.#changeState(this.#states.fulfilled)

    }

    #reject = (arg) => {
        if (this.#state !== this.#states.pending) return
        this.result = arg
        this.#changeState(this.#states.rejected)

    }

    then(success, error) {
        return new AsyncTracker((res, rej) => {
            this.#changeStateHandlerThen = (state) => {
                if (state !== this.#states.fulfilled) return rej(this.result)
                // console.log("then", success(this.result))
                return res(success(this.result))
            }
        })

    }

    catch(func) {
        return new AsyncTracker((res, rej) => {
            this.#changeStateHandlerCatch = (state) => {
                if (state !== this.#states.rejected) return
                rej(func(this.result))
            }
        })
    }

    finally(func) {
        return new AsyncTracker((res, rej) => {
            this.#changeStateHandlerFinally = (state) => {
                if (state !== this.#states.rejected && state !== this.#states.fulfilled) return
                res(func(this.result))
            }
        })
    }
}


const helper = () => {
    return new AsyncTracker((resolve, reject) => {
        setTimeout(() => {
            resolve(100)
            // reject(101)
        }, 1000)
    })
}

const foo = helper()
    .then((res) => {
        console.log("then in helper", res)
        return 200
    })
    .catch((err) => console.error(err))
console.log(foo)
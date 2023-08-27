import React, {Component} from 'react'

class Form extends Component {


    render() {
        const {state, handleChange, handleForm, handleChecked} = this.props
        return (
            <form name="myForm" className="mb-2" onSubmit={handleForm}>
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email"
                           name="email"
                           className="form-control"
                           id="email"
                           placeholder="Email"
                           value={state.currentData.email}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password"
                           name="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
                           value={state.currentData.password}
                           onChange={handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea type="text"
                              className="form-control"
                              name="address"
                              id="address"
                              placeholder="1234 Main St"
                              value={state.currentData.address}
                              onChange={handleChange}
                    ></textarea>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text"
                           className="form-control"
                           name="city" id="city"
                           value={state.currentData.city}
                           onChange={handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select id="country"
                            name="country"
                            className="form-control"
                            value={state.currentData.country}
                            onChange={handleChange}
                    >
                        <option>Choose</option>
                        <option value="lithuania">Lithuania</option>
                        <option value="ukraine">Ukraine</option>
                        <option value="poland">Poland</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input id="rules"
                                   type="checkbox"
                                   name="acceptRules"
                                   className="form-check-input"
                                   checked={state.acceptRules}
                                   onChange={handleChecked}
                            />
                            Accept Rules
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}

export default Form
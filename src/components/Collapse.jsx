import React, {Component} from 'react'

class Form extends Component {
    state = {
        currentData: {
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
            acceptRules: false,
        },
        contact: {
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
            acceptRules: false,
        }
    }
    addContact = data => {
        const {email, password, address, city, country, acceptRules} = data;
        const contact = {email, password, address, city, country, acceptRules};

        this.setState(prevState => ({
            ...prevState, contact
        }));
    };

    handleChange = event => {
        this.setState(prevState=> {
            {...prevState,
                prevState.currentData: {
                    [event.currentTarget.name]
                :
                    event.currentTarget.value,
                }
            }});

    };
    // onFormSubmit = (event) => {
    //     // console.log(this.state.currentData)
    //     this.addContact(this.state.currentData)
    //     event.preventDefault()
    //     this.reset()
    // }
    // reset = () => {
    //     this.setState({
    //         email: "",
    //         password: "",
    //         address: "",
    //         city: "",
    //         country: "",
    //         acceptRules: ""
    //     });
    // };

    render() {
        return (<>
            <form name="myForm mb-2" onSubmit={this.onFormSubmit}>
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email"
                           name="email"
                           className="form-control"
                           id="email"
                           placeholder="Email"
                           value={this.state.currentData.email}
                           onChange={this.handleChange}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password"
                           name="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
                           value={this.state.currentData.password}
                           onChange={this.handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea type="text"
                              className="form-control"
                              name="address"
                              id="address"
                              placeholder="1234 Main St"
                              value={this.state.currentData.address}
                              onChange={this.handleChange}
                    ></textarea>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text"
                           className="form-control"
                           name="city" id="city"
                           value={this.state.currentData.city}
                           onChange={this.handleChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select id="country"
                            name="country"
                            className="form-control"
                            value={this.state.currentData.country}
                            onChange={this.handleChange}
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
                                   checked={this.state.currentData.acceptRules}
                                   onChange={this.handleChange}
                            />
                            Accept Rules
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            {this.state.contact.acceptRules && <div className="mt-3">
                <button type="button" className="btn btn-primary">Back</button>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>acceptRules</td>
                        <td>{this.state.contact.acceptRules}</td>
                    </tr>
                    <tr>
                        <td>address</td>
                        <td>{this.state.contact.address}</td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td>{this.state.contact.city}</td>
                    </tr>
                    <tr>
                        <td>country</td>
                        <td>{this.state.contact.country}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{this.state.contact.email}</td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td>{this.state.contact.password}</td>
                    </tr>
                    </tbody>
                </table>
            </div>}</>)

    }
}

export default Form
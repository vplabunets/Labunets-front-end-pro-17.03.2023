import React, {Component} from 'react'

export class Image extends Component {
    render() {
        const {url, alt, index, current} = this.props
        return (
            <div
                className={index === current ? "carousel-item active" : "carousel-item"}>
                <img alt={alt} className="d-block w-100" src={url}/>
            </div>)
    }
}

export default Image

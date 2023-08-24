import React, {Component} from 'react'

class Carousel extends Component {
    state = {
        currentSlide: 0
    }
    onClickHandler = (event) => {
        if (event.currentTarget.textContent === "Next") {
            this.setState(prevState => {
                if (prevState.currentSlide !== (this.props.colors.length - 1)) {
                    return {currentSlide: prevState.currentSlide + 1}
                }
                return {currentSlide: 0}
            });
        }
        if (event.currentTarget.children[1].textContent === "Previous") {
            this.setState(prevState => {
                if (prevState.currentSlide === 0) {
                    return {currentSlide: (this.props.colors.length - 1)}
                }
                return {currentSlide: prevState.currentSlide - 1}

            });
        }
    }


    render() {
        return (<div id="carousel" className="carousel slide">
            <div className="carousel-inner">
                {this.props.colors.map((element, index) => {
                    return (
                        <div key={element.id} style={{backgroundColor: element.color, width: "100%", height: "500px"}}
                             className={index === this.state.currentSlide ? "carousel-item active" : "carousel-item"}>
                            <img alt="" className="d-block w-100" src="../images/third.jpg"/>
                        </div>)
                })}

            </div>
            <button className="carousel-control-prev" type="button" onClick={this.onClickHandler}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={this.onClickHandler}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>)

    }
}

export default Carousel
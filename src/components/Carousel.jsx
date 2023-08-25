import React, {Component} from 'react'
import Button from "./Button";
import Image from "./Image";


class Carousel extends Component {
    state = {
        currentSlide: 0
    }
    onNextClickHandler = (event) => {
        this.setState(prevState => {
            if (prevState.currentSlide !== (this.props.pictures.length - 1)) {
                return {currentSlide: prevState.currentSlide + 1}
            }
            return {currentSlide: 0}
        });
    }
    onPreviousClickHandler = (event) => {
        this.setState(prevState => {
            if (prevState.currentSlide === 0) {
                return {currentSlide: (this.props.pictures.length - 1)}
            }
            return {currentSlide: prevState.currentSlide - 1}
        });
    }

    render() {
        return (<div id="carousel" className="carousel slide">
            <div className="carousel-inner">
                {this.props.pictures.map((element, index) => {
                    const {id, url, alt} = element
                    return (<Image key={id} url={url} alt={alt} index={index} current={this.state.currentSlide}/>
                    )
                })}
            </div>
            <Button type="prev" text="Previous" onClickHandler={this.onPreviousClickHandler}/>
            <Button type="next" text="Next" onClickHandler={this.onNextClickHandler}/>

        </div>)

    }
}

export default Carousel
import { Component } from 'react';

class Carousel extends Component {
    state = { 
        active: 0
    }

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    }

    handleIndexClick = (e) => {
        this.setState({
            active: +e.target.dataset.index //unary plus coerces a string into a number
        });
    };

    render () {
        const { active } = this.state; // is mutable, can change with this.setState
        const { images } = this.props; // is immutable

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal hero" />
                <div className='carousel-smaller'>
                    {images.map((photo, index) => {
                        <img 
                            onClick={this.handleIndexClick}
                            data-index={index}
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default Carousel;

// Cannot use Hooks with class components!
// Must extend a component
// Every class component must have a render function
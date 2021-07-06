import {Carousel} from "react-bootstrap";

function CarouselComponent(){
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/1285952.jpg"
                    alt="First slide"
                    width={1500} height={350}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/1285952.jpg"
                    alt="Second slide"
                    width={1500} height={350}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/1285952.jpg"
                    alt="Third slide"
                    width={1500} height={350}
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;
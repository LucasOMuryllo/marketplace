import React from "react";
import { Carousel } from "@material-tailwind/react";

// A ideia com esse componente era fazer com que os produtos passassem pela tela como um carousel.
// porém, iria acabar tomando um desnecessário.. ele esta funcional, basta importar ele para dentro do App.tsx

type CarouselImage = {
    src: string;
    alt: string;
};

const carouselImages: CarouselImage[] = [
    {
        src:
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        alt: "image 1",
    },
    {
        src:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        alt: "image 2",
    },
    {   
        src:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        alt: "image 3",
    },
];

const CarouselDefault: React.FC = () => {
    return (
        <Carousel className="rounded-xl">
            {carouselImages.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover mb-2"
                />
            ))}
        </Carousel>
    );
};

export default CarouselDefault;

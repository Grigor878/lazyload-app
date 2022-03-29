import React, { useEffect, useState } from 'react';
import api from '../api/Api';
import loading from '../assets/loading.gif';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function LazyLoadImg() {

    // useEffect(() => {
    //     const getImages = async () => {
    //         try {
    //             const response = await api.get();
    //             console.log(response.data)
    //         } catch (err) {
    //             if (err.response) {
    //                 console.log(err.response.data);
    //                 console.log(err.response.status);
    //                 console.log(err.response.headers);
    //             } else {
    //                 console.log(`Error: ${err.message}`);
    //             }
    //         }
    //     }
    //     getImages()
    // }, [])

    const [images, setImages] = useState([]);

    const getImages = () => {
        api.get()
            .then((res) => {
                console.log(res);
                setImages(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getImages()
    }, [])

    // if (!images) {
    //     return <img src={loading} alt="Loading" />
    // }

    return (
        <>
            {images.map((img) => {
                return (
                    <LazyLoadImage
                        // effect="blur"
                        height="700px"
                        width="500px"
                        src={img.urls.regular}
                        alt={img.alt_description}
                        key={img.id}
                        placeholderSrc={loading}
                    />
                );
            })}
        </>
    )
}

export default LazyLoadImg
import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './index.css'

class Slider extends Component {
    render() {
        const images = [
            { url: "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg" },
            { url: "https://images-na.ssl-images-amazon.com/images/I/81SdJG3OUjL._SL1500_.jpg" },
            { url: "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg" },
            { url: "https://o.aolcdn.com/images/dims?quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-06%2F64f41f90-b654-11ea-bdfb-c07b57334bf4&client=amp-blogside-v2&signature=c115b10f023e2c6af037e22ac4aa83ce9af03f8b" },
            { url: "https://images.indianexpress.com/2020/07/Dell-G5-15-2020-fb.jpg" },
            { url: "https://img.etimg.com/photo/msid-74744213,quality-100/hp-14q-cy0005au.jpg" },

        ];




        return (
            <div className='slider'>
                <SimpleImageSlider
                    style={{ marginTop: "2%" }}
                    width={"80%"}
                    height={"400px"}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    useGPURender={true}
                    navStyle={1}
                    slideDuration={.5}
                    background-size={"100%"}
                    borderRadius={"50%"}
                />


            </div>
        );
    }
}
export default Slider;
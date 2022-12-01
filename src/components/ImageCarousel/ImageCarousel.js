import image1 from "../../images/memoji1.png";
import image2 from "../../images/memoji2.png";
import image3 from "../../images/memoji3.png";
import image4 from "../../images/memoji4.png";
import image5 from "../../images/memoji5.png";
import image6 from "../../images/memoji6.png";
import image7 from "../../images/memoji7.png";
import Snowfall from "react-snowfall";
import ReactTooltip from "react-tooltip";
import { useState, useEffect } from "react";

const images = [image1, image2, image3, image4, image5, image6, image7];

export const ImageCarousel = () => {
	const [currentImage, setCurrentImage] = useState(null);
	const [snow, setSnow] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImage(images[Math.floor(Math.random() * images.length)]);
		}, 5000)
		
		return () => clearInterval(intervalId);
	}, [])

	return (
		<div className="icon">
			<img src={currentImage} alt="" data-tip data-for="imageToolTip" onClick={() => setSnow(!snow)}/>
      <ReactTooltip id="imageToolTip" place="right" effect="solid">
        Boop my nose for a surprise!
      </ReactTooltip>
			{snow ? 
				<Snowfall
					style={{position: 'fixed'}}
				/> : null
			}
		</div>
	)
}
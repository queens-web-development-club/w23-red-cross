import Image from 'next/image';
import landingImage from '../public/Landing.jpg';

export default () => {
	return (
		<>
			<Image className='w-screen object-cover' src={landingImage} />
			<div className='container mx-auto font-bold'>
				Landing page text here
			</div>
		</>
	);
};
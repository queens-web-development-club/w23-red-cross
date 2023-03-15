import Image from 'next/image';
import christian from '../public/christian-luchin.jpg';
import hannah from '../public/hannah-lavalle.jpg';
import julianne from '../public/julianne-boucher.jpg';
import lauren from '../public/lauren-shligold.jpg';
import munachimdiuto from '../public/munachimdiuto-chira.jpg';
import parth from '../public/parth-khatana.jpg';
import sarah from '../public/sarah-chapman.jpg';
import spencer from '../public/spencer-thompson.jpg';

export default () => {
	return (
		<div>
			<h1 className='text-4xl text-bold text-red-500'>
				Execs page text here
			</h1>
			<Image src={christian} />
			<Image src={hannah} />
			<Image src={julianne} />
			<Image src={lauren} />
			<Image src={munachimdiuto} />
			<Image src={parth} />
			<Image src={sarah} />
			<Image src={spencer} />
		</div>
	);
};
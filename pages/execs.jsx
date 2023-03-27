import Image from 'next/image';
import lauren from '../public/lauren.jpg';
import julianne from '../public/julianne.jpg';
import spencer from '../public/spencer.jpg';
import parth from '../public/parth.jpg';
import munachimdiuto from '../public/munachimdiuto.jpg';
import hannah from '../public/hannah.jpg';
import christian from '../public/christian.jpg';
import sarah from '../public/sarah.jpg';

const GreyBox = props => {
	return (
		<div className={`${props.className || ''} min-w-[40px] mt-[100px] bg-[#D3D3D3] h-[394px]`} />
	);
};

export default () => {
	const imageStyle = 'w-full h-[470px] object-cover';
	const nameStyle = 'text-4xl text-[#291E1E] text-center';
	const titleStyle = 'text-xl text-[#E01212] text-center';
	const bioStyle = 'text-xl text-black text-justify mx-[15px]';

	return (
		<>
			<div className='w-screen h-full bg-[#333333]'>
				<div className='h-full w-fit py-3 px-9 mx-auto font-bold text-3xl bg-[#CC3333] text-[#FBFBFB]'>
					Our Team
				</div>
			</div>

			<div className='mt-12 grid grid-cols-[1fr_minmax(0,470px)_1fr] md:grid-cols-[1fr_minmax(0,470px)_minmax(0,470px)_1fr] gap-5'>
				<GreyBox />
				<div className='mt-6'>
					<Image className={imageStyle} src={lauren} />
					<div className={nameStyle}>Lauren Shligold</div>
					<div className={titleStyle}>Founder/President</div>
					<p className={bioStyle}>
						Hello, my name is Lauren, and I am the founder and president of QU in Support of the Red Cross. I am currently in my third year of the Commerce Program at Queen’s University. During my free time, I enjoy swimming, playing tennis, and dancing.
					</p>
				</div>
				<GreyBox className='md:hidden' />
				<GreyBox className='md:hidden' />
				<div className='mt-6'>
					<Image className={imageStyle} src={julianne} />
					<div className={nameStyle}>Julianne Boucher</div>
					<div className={titleStyle}>Vice President</div>
					<p className={bioStyle}>
						Hey, my name is Julianne Boucher and I am the vice president of QU in Support of Red Cross. I am in my 4th year of the Life Sciences program at Queen’s. In my free time I enjoy baking, working out, and spending time with friends!
					</p>
				</div>
				<GreyBox />
			</div>

			<div className='my-12 grid grid-cols-[1fr_minmax(0,470px)_1fr] md:grid-cols-[1fr_minmax(0,470px)_minmax(0,470px)_minmax(0,470px)_1fr] gap-5'>
				<GreyBox />
				<div className='mt-6'>
					<Image className={imageStyle} src={spencer} />
					<div className={nameStyle}>Spencer Thompson</div>
					<div className={titleStyle}>Director of Sponsorship</div>
					<p className={bioStyle}>
						Hi, my name is Spencer Thompson. I am the director of sponsorship for QU in Support of the Red Cross. I am in my 2nd year of psychology and computer science. I enjoy playing sports, working out and spending time with friends.
					</p>
				</div>
				<GreyBox className='md:hidden' />

				<GreyBox className='md:hidden' />
				<div className='mt-6'>
					<Image className={imageStyle} src={parth} />
					<div className={nameStyle}>Parth Khatana</div>
					<div className={titleStyle}>Director of Logistics</div>
					<p className={bioStyle}>
						Hello, my name is Parth Khatana and I am the Director of Logistics for QU In Support of the Red Cross. Currently, I am in my 3rd year of life sciences. During my free time i enjoy going on hikes, traveling, and volunteering at my local Long Term Care Center.
					</p>
				</div>
				<GreyBox className='md:hidden' />

				<GreyBox className='md:hidden' />
				<div className='mt-6'>
					<Image className={imageStyle} src={munachimdiuto} />
					<div className={nameStyle}>Munachimdiuto Chira</div>
					<div className={titleStyle}>Graphic Designer</div>
					<p className={bioStyle}>
						Hi! My name is Muna Chira and I am the Graphic Designer for QU in Support of the Red Cross. I am in my 3rd year of the Health Sciences program at Queen’s. In my free time, I love to read, watch movies and crochet.
					</p>
				</div>
				<GreyBox />

				<GreyBox />
				<div className='mt-6'>
					<Image className={imageStyle} src={hannah} />
					<div className={nameStyle}>Hannah Lavalle</div>
					<div className={titleStyle}>Director of Communications</div>
					<p className={bioStyle}>
						Hi there! My name is Hannah Lavallee and I am the Director of Communications for QU in Support of the Red Cross. I am in my 4th year of Bachelor of Science (Honours) degree in Biology at Queen’s University. In my free time, I love to paint, work out, spend time outside, and hang out with my friends!
					</p>
				</div>
				<GreyBox className='md:hidden' />

				<GreyBox className='md:hidden' />
				<div className='mt-6'>
					<Image className={imageStyle} src={christian} />
					<div className={nameStyle}>Christian Luchin</div>
					<div className={titleStyle}>Events Coordinator</div>
					<p className={bioStyle}>
						Hi my name is Christian Olivier Luchin I am 2nd Year at Queen’s and I am one of the Event coordinators of QU in Support of the Red Cross. I have a Major in Philosophy and in my free time I enjoy Volunteering, gardening, hanging out with friends, reading and working out.
					</p>
				</div>
				<GreyBox className='md:hidden' />

				<GreyBox className='md:hidden' />
				<div className='mt-6'>
					<Image className={imageStyle} src={sarah} />
					<div className={nameStyle}>Sarah Chapman</div>
					<div className={titleStyle}>Events Coordinator</div>
					<p className={bioStyle}>
						Hi there, my name is Sarah and I am one of the event coordinators for QU in Support of the Red Cross. I am in my 3rd year of a Health Sciences (Honors) degree at Queen’s University. During my free time I enjoy working out, baking and hanging out with friends.
					</p>
				</div>
				<GreyBox />
			</div>
		</>
	)
};
import Image from 'next/image';
import styles from '../components/Showcase.module.css';
import indiaText from "../public/showcase/indiaShowcase.jpg";

export default () => {
	return (
		<div className='w-screen h-full bg-[#333333]'>
				<div className='h-full w-fit py-3 px-9 mx-auto font-bold text-3xl bg-[#CC3333] text-[#FBFBFB]'>
					Showcase
				</div>
					<div className = {styles.section}>
						<Image src={indiaText} className={styles.image}/>
					</div>
		</div>
	);
};
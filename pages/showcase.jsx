import Image from 'next/image';
import styles from '../components/Showcase.module.css';
import indiaText from "../public/showcase/indiaShowcase.jpg";
import nigeriaText from "../public/showcase/nigeriaShowcase.jpg";
import pakistanText from "../public/showcase/pakistanShowcase.jpg";
import ukraineText from "../public/showcase/ukraineShowcase.jpg";

export default () => {
	return (
		<div className = {styles.container}>
			<div className='bg-[linear-gradient(to_right,#CC3333,#333333_)] h-[78vh] snap-center m-5 rounded-[100px] border-[5px] border-solid border-[rgb(22,18,19)] rounded-[100px] border-[5px] border-solid border-[rgb(22,18,19)] bg-[#333333]'>
				<div className={styles.titlebox}>
					Showcase
				</div>
			</div>
			<div className="h-[78vh] snap-center m-5 rounded-[100px] border-[5px] border-solid border-[rgb(22,18,19)] bg-[linear-gradient(to_right,#f7f7f7,white,green)]">
				<Image src={pakistanText} className={styles.image}></Image>
			</div>
			<div className="h-[78vh] snap-center m-5 rounded-[100px] border-[5px] border-solid border-[rgb(22,18,19)] bg-[linear-gradient(to_right,rgb(11,90,180),rgb(243,243,87))]">
				<Image src={ukraineText} className={styles.image}></Image>
			</div>
			<div className="h-[78vh] snap-center m-5 rounded-[100px] border-[5px] border-solid border-[rgb(22,18,19)] bg-[linear-gradient(to_right,green,#f7f7f7,rgb(241,179,7))]">
				<Image src={indiaText} className={styles.image}></Image>
			</div>
			<div className="h-[78vh] snap-center m-5 rounded-[100px] border-[5px] border-solid border-[rgb(22,18,19)] bg-[linear-gradient(to_right,green,white,green)]">
				<Image src={nigeriaText} className={styles.image}></Image>
			</div>
		</div>
		
	);
};
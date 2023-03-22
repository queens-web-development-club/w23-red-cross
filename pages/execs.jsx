import Image from "next/image";
import styles from "../components/Execs.module.css";
import lauren from "../public/lauren.jpg";
import julianne from "../public/julianne.jpg";
import spencer from "../public/spencer.jpg";
import parth from "../public/parth.jpg";
import munachimdiuto from "../public/munachimdiuto.jpg";
import hannah from "../public/hannah.jpg";
import christian from "../public/christian.jpg";
import sarah from "../public/sarah.jpg";





export default () => {
	return (
		<div className={styles.wrapper}>

			<div className={styles.ourTeamWrapper}>
				<div className={styles.ourteam}>Our Team</div>
			</div>
			<div className={styles.presidentRow}>
				<div className={styles.greybox}></div>
				<div className = {styles.exec}>
					<Image className={styles.image} src={lauren}/>
					<div className={styles.name}>Lauren Shligold</div>
					<div className={styles.title}>Founder/President</div>
					<p className={styles.bio}>Hello, my name is Lauren, and I am the founder and president of QU in Support of the Red Cross. I am currently in my third year of the Commerce Program at Queen’s University. During my free time, I enjoy swimming, playing tennis, and dancing. </p>
				</div>
				<div className = {styles.exec}>
					<Image className={styles.image} src={julianne}/>
					<div className={styles.name}>Julianne Boucher</div>
					<div className={styles.title}>Vice President</div>
					<p className={styles.bio}>Hey, my name is Julianne Boucher and I am the vice president of QU in Support of Red Cross. I am in my 4th year of the Life Sciences program at Queen’s. In my free time I enjoy baking, working out, and spending time with friends!</p>
				</div>
				<div className={styles.greybox}></div>
			</div>
			

			<div className={styles.maingrid}>
				<div className={styles.greybox}></div>
				<div className={styles.exec}>
					<Image className={styles.image} src={spencer}/>
					<div className={styles.name}>Spencer Thompson</div>
					<div className={styles.title}>Director of Sponsorship</div>
					<p className={styles.bio}>Hi, my name is Spencer Thompson. I am the director of sponsorship for QU in Support of the Red Cross. I am in my 2nd year of psychology and computer science. I enjoy playing sports, working out and spending time with friends. </p>
				</div>
				<div className={styles.exec}>
					<Image className={styles.image} src={parth}/>
					<div className={styles.name}>Parth Khatana</div>
					<div className={styles.title}>Director of Logistics</div>
					<p className={styles.bio}>Hello, my name is Parth Khatana and I am the Director of Logistics for QU In Support of the Red Cross. Currently, I am in my 3rd year of life sciences. During my free time i enjoy going on hikes, traveling, and volunteering at my local Long Term Care Center. </p>
				</div>
				<div className={styles.exec}>
					<Image className={styles.image} src={munachimdiuto}/>
					<div className={styles.name}>Munachimdiuto Chira</div>
					<div className={styles.title}>Graphic Designer</div>
					<p className={styles.bio}>Hi! My name is Muna Chira and I am the Graphic Designer for QU in Support of the Red Cross. I am in my 3rd year of the Health Sciences program at Queen’s. In my free time, I love to read, watch movies and crochet. </p>
				</div>
				<div className={styles.greybox}></div>
				<div className={styles.greybox}></div>
				<div className={styles.exec}>
						<Image className={styles.image} src={hannah}/>
						<div className={styles.name}> Hannah Lavalle</div>
						<div className={styles.title}>Director of Communications</div>
						<p className={styles.bio}> Hi there! My name is Hannah Lavallee and I am the Director of Communications for QU in Support of the Red Cross. I am in my 4th year of Bachelor of Science (Honours) degree in Biology at Queen’s University. In my free time, I love to paint, work out, spend time outside, and hang out with my friends!</p>
				</div>
				<div className={styles.exec}>
						<Image className={styles.image} src={christian}/>
						<div className={styles.name}>Christian Luchin</div>
						<div className={styles.title}>Events Coordinator</div>
						<p className={styles.bio}>Hi my name is Christian Olivier Luchin I am 2nd Year at Queen’s and I am one of the Event coordinators of QU in Support of the Red Cross. I have a Major in Philosophy and in my free time I enjoy Volunteering, gardening, hanging out with friends, reading and working out.</p>
				</div>
				<div className={styles.exec}>
						<Image className={styles.image} src={sarah}/>
						<div className={styles.name}>Sarah Chapman</div>
						<div className={styles.title}>Events Coordinator</div>
						<p className={styles.bio}> Hi there, my name is Sarah and I am one of the event coordinators for QU in Support of the Red Cross. I am in my 3rd year of a Health Sciences (Honors) degree at Queen’s University. During my free time I enjoy working out, baking and hanging out with friends.</p>
				</div>
				<div className={styles.greybox}></div>
			</div>
				
		</div>
		)
	}
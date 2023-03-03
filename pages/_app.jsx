import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ Component, pageProps }) => {
	return (
		<>
			<Header />
			<div className='container mx-auto flex-1'>
				<Component {...pageProps} />
			</div>
			<Footer />
			<style jsx global>
				{`
					/* for footer to be at bottom */
					#__next {
						min-height: 100vh;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					}
				`}
			</style>
		</>
	);
};
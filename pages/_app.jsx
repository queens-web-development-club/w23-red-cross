import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ Component, pageProps }) => {
	return (
		<div className='overflow-x-hidden min-h-screen flex flex-col justify-between'>
			<Header />
			<div className='relative flex-1'>
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	);
};
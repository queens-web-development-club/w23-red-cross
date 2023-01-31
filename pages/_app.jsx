import 'tailwindcss/tailwind.css';
import Header from '../components/Header';

export default ({ Component, pageProps }) => {
	return (
		<>
			<Header />
			<div className='container mx-auto'>
				<Component {...pageProps} />
			</div>
		</>
	);
};
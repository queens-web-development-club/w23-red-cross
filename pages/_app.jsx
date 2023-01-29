import 'tailwindcss/tailwind.css';
import Header from '../components/Header';

export default ({ Component, pageProps }) => {
	return (
		<>
			<Header />
			<div class='container mx-auto'>
				<Component {...pageProps} />
			</div>
		</>
	);
};
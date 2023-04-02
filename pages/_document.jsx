import { Html, Head, Main, NextScript } from 'next/document';

export default () => {
	return (
		<Html>
			<Head>
				<link rel='icon' type='image/svg+xml' href='/w23-red-cross/favicon.svg' />
				<link rel='icon' type='image/png' href='/w23-red-cross/favicon.png' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};
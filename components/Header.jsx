import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Hamburger from './svg/Hamburger';
import HeaderLogo from './svg/HeaderLogo';

const links = [
	{ name: 'ABOUT US', href: '/about' },
	{ name: 'OUR TEAM', href: '/execs' },
	{ name: 'EVENTS', href: '/events' },
	{ name: 'SHOWCASE', href: '/showcase' },
	{ name: 'CONTACT', href: '/contact' }
];

export default () => {
	const [showMobile, setShowMobile] = useState(false);
	const router = useRouter();

	return (
		<nav className='px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 bg-white'>
			<div className='container flex flex-wrap justify-between items-center mx-auto'>
				<Link href='/'>
					<HeaderLogo className='h-20 text-[#333333]' />
				</Link>
				<div className='flex md:hidden'>
					<button onClick={() => setShowMobile(x => !x)} className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
						<Hamburger className='w-6 h-6' />
					</button>
				</div>
				<div hidden={!showMobile} className='justify-between items-center w-full md:flex md:w-auto md:order-1'>
					<ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white text-[#333333]'>
						{links.map(x => {
							const common = 'font-bold block py-2 pr-4 pl-3 rounded md:p-0';
							const active = `${common} bg-[#CC3333] md:bg-transparent text-white md:text-inherit md:mt-px md:rounded-none md:border-b-2 md:border-[#333333]`;
							const inActive = `${common} hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-75`;
							const contactActive = `${common} bg-[#CC3333] text-white md:text-white md:py-3 md:px-4 md:rounded-2xl md:bg-[#CC3333]`;
							const contactInActive = `${common} hover:bg-gray-100 md:hover:bg-[#CC3333] md:text-white md:py-3 md:px-4 md:rounded-2xl md:bg-[#CC3333] md:hover:opacity-75`;
							return x.name !== 'CONTACT' ? (
								<li key={x.href}>
									<Link href={x.href} className={router.pathname.endsWith(x.href) ? active : inActive}>
										{x.name}
									</Link>
								</li>
							) : (
								<li key={x.href}>
									<Link href={x.href} className={router.pathname.endsWith(x.href) ? contactActive : contactInActive}>
										{x.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
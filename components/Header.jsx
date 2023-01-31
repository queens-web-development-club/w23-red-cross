import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Hamburger from './svg/Hamburger';
import Instagram from './svg/Instagram';

const socials = [
	{ href: 'https://www.instagram.com/redcrossqueensu', element: <Instagram /> }
];

const links = [
	{ name: 'Events', href: '/events' },
	{ name: 'About', href: '/about' }
];

export default () => {
	const [showMobile, setShowMobile] = useState(false);
	const router = useRouter();

	return (
		<nav className='px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 bg-white border-b border-gray-200'>
			<div className='container flex flex-wrap justify-between items-center mx-auto'>
				<Link root href='/' className='flex items-center'>
					<span className='self-center text-xl font-semibold whitespace-nowrap'>
						QU Red Cross
					</span>
				</Link>
				<div className='flex md:order-2'>
					{socials.map(x => (
						<Link href={x.href} className='inline-flex items-center px-2 text-gray-500 hover:opacity-80'>
							{x.element}
						</Link>
					))}
				</div>
				<div className='flex md:hidden'>
					<button onClick={() => setShowMobile(x => !x)} className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
						<Hamburger className='w-6 h-6' />
					</button>
				</div>
				<div hidden={!showMobile} className='justify-between items-center w-full md:flex md:w-auto md:order-1'>
					<ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
						{links.map(x => {
							const common = 'block py-2 pr-4 pl-3 rounded md:p-0';
							const active = `${common} text-white bg-blue-700 md:bg-transparent md:text-blue-700`;
							const inActive = `${common} text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700`;
							return (
								<li>
									<Link root href={x.href} className={router.pathname.endsWith(x.href) ? active : inActive}>
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
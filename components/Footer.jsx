import Link from 'next/link';
import Facebook from './svg/Facebook';
import Instagram from './svg/Instagram';
import Queens from './svg/Queens';

const FACEBOOK_LINK = 'https://www.facebook.com/people/Queens-University-in-Support-of-Red-Cross/100081823870182/';
const INSTAGRAM_LINK = 'https://www.instagram.com/redcrossqueensu';

export default () => {
	const common = 'w-6 h-6 hover:opacity-75';
	return (
		<div className='px-2 sm:px-8 py-4 sticky w-full bg-[#3A3A3C] text-white flex flex-row items-center justify-between'>
			<div className='flex flex-row gap-4'>
				<Link href={FACEBOOK_LINK}>
					<Facebook className={common} />
				</Link>
				<Link href={INSTAGRAM_LINK}>
					<Instagram className={common} />
				</Link>
			</div>
			<p className='text-xs text-center text-[#FBFBFB] font-light'>
				The club is affiliated with the<br />
				Alma Mater Society of Queen's University
			</p>
			<Link href='https://www.queensu.ca/'>
				<Queens className='w-16 h-16' />
			</Link>
		</div>
	);
};
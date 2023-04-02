import landing from '../public/landing.jpg'
import { useState, useEffect } from 'react'
import Head from 'next/head';

export default () => {
	const [events, setEvents] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/queens-web-development-club/w23-red-cross/main/events.json', { cache: 'no-store' })
			.then(res => res.json())
			.then(data => {
				setEvents(data);
				setLoading(false);
			});
	}, []);

	return (
		<>
			<Head>
				<title>Upcoming Events</title>
			</Head>
			<div className='relative'>
				<div className='w-screen bg-center bg-cover h-[65vh]' id='splash' />
				<style jsx>{`
					#splash {
						background-image: linear-gradient(transparent,#3A3A3C),url("${landing.src}");
					}
				`}</style>
				<div className='absolute w-full bottom-[5vw]'>
					<div className='text-white mb-8 font-bold text-6xl text-center'>
						Upcoming Events
					</div>
					<div className='text-white mb-8 text-2xl text-center'>
						Learn how you can contribute to<br/>
						Red Cross at Queen's
					</div>
				</div>
			</div>
			<div className='h-full px-4 py-14 bg-[#3A3A3C]'>
				{
					isLoading ? <div className='text-white font-bold text-3xl text-center'>Loading...</div> :
						events.length === 0 ? <div className='text-white font-bold text-3xl text-center'>No events planned.</div> : (
						events.map((event, idx) => (
							<div key={idx} className='mx-auto mb-12 rounded-3xl p-10 max-w-3xl bg-[#FBFBFB]'>
								<div className='relative min-h-[120px] mb-6 before:content-none before:table after:content-none after:table after:clear-both'>
									<div className='float-right w-fit font-bold text-2xl text-white'>
										<div className='rounded-xl p-3 bg-[#BF1E2E]'>{event.date}</div>
										{event.dateEnd &&
											<div className='rounded-xl mt-2 p-3 bg-[#BF1E2E]'>{event.dateEnd}</div>
										}
									</div>
									<div className='pt-[76px] text-[#3A3A3C] font-bold text-5xl'>{event.name}</div>
								</div>
								<div className='grid h-fit grid-cols-1 md:grid-cols-2 gap-4 font-bold text-[#BF1E2E] text-2xl'>
									<div className='rounded-lg align-middle text-center p-5 border-4 border-[#BF1E2E]'>
										{event.time}
									</div>
									<div className='rounded-lg align-middle text-center p-5 border-4 border-[#BF1E2E]'>
										{event.location}
									</div>
								</div>
								{event.description &&
									<p className='mt-6 text-[#3A3A3C] text-xl'>
										{event.description}
									</p>
								}
							</div>
						))
				)}
			</div>
		</>
	);
};
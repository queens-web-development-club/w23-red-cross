import { useState, useEffect } from 'react'

export default () => {
	const [days, setDays] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/beans42/qurc-events/master/events.json', { cache: 'no-store' })
			.then(res => res.json())
			.then(data => {
				setDays(data);
				setLoading(false);
			});
	}, []);

	if (isLoading)
		return <p className='font-bold text-2xl'>Loading...</p>;

	if (Object.keys(days).length === 0)
		return <p className='font-bold text-2xl'>No events planned.</p>;
	
	return (
		<>
			<div className='w-screen h-full bg-[#333333]'>
				<div className='h-full w-fit py-3 px-9 mx-auto font-bold text-3xl bg-[#CC3333] text-[#FBFBFB]'>
					Upcoming Events
				</div>
			</div>
			<div className='container my-2 px-3 mx-auto'>
				{Object.keys(days).map(day => (
					<div key={day} className='my-1 border-b border-[#333333] flex flex-row'>
						<div className='mr-4 font-bold text-2xl text-right'>
							{day.split(' ')[0] === 'TBD' ?
								'TBD' :
								<>{day.split(' ')[0]}<br />{day.split(' ')[1]}</>
							}
						</div>
						<div className='flex-1'>
							{days[day].map((event, idx) => (
								<div key={idx} className={`pb-3 ${idx === days[day].length - 1 ? '' : 'border-b border-[#333333]'}`}>
									<span className='font-bold text-xl'>{event.name}</span>
									<img className='object-contain w-full' src={event.image} />
									<span className='font-bold'>Time:</span> {event.time}<br />
									<span className='font-bold'>Location:</span> {event.location}
									<p className=''>
										{event.description}
									</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
};
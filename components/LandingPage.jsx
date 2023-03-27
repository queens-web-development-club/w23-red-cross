export default () => {
	return (
		<>
			<div className='relative'>
				<div className='w-screen bg-center bg-cover bg-[radial-gradient(transparent,black),url("/landing.jpg")] h-[65vh]' />
				<div className='absolute left-[5vw] bottom-[5vw]'>
					<div className='text-white w-fit text-2xl bg-[#BF1E2E] py-3 px-5 rounded-[22px]'>
						Queen's University
					</div>
					<div className='mt-2 font-bold text-4xl md:text-6xl lg:text-8xl text-white'>
						<div className='mb-4'>In Support of</div>
						<div>Canadian Red Cross</div>
					</div>
				</div>
			</div>
			<div className='h-12 w-full bg-[#D9D9D9]' />
			<div className='container px-4 mx-auto mt-12 mb-6 grid grid-cols-[1fr] md:grid-cols-[2fr_1fr] gap-20'>
				<div>
					<div className='text-4xl mb-6 font-bold text-center'>
						<span className='text-[#BF1E2E]'>Who</span>
						{' '}We Are
					</div>
					<div className='px-8 mb-9 rounded-3xl text-justify text-black text-2xl py-5 bg-[#F2F2F2]'>
						QU in Support of Red Cross was founded in September, 2020. The purpose of QU in Support of Red Cross is to educate Queen’s University students, faculty, and external groups about humanitarian issues and the International Red Cross and Red Crescent Movement.
					</div>
					<div className='text-4xl mb-6 font-bold text-center'>
						<span className='text-[#BF1E2E]'>What</span>
						{' '}We Do
					</div>
					<div className='px-8 rounded-3xl text-justify text-black text-2xl py-5 bg-[#F2F2F2]'>
						We have fundraisers where we are able to raise funds for the Red Cross and donate them directly to the non profit organization.
					</div>
				</div>
				<div className='rounded-3xl px-8 py-5 md:mt-16 bg-[#BF1E2E] h-fit'>
					<div className='text-white mb-6 text-4xl font-bold text-center'>Join Us</div>
					<p className='mb-6 text-white text-2xl text-justify'>
						You can get involved with our club by becoming a general member or an executive member. Everyone is welcome to join QU in Support of Red Cross.
					</p>
					<p className='text-white text-2xl text-justify'>
						Visit our contact page to send an email to us concerning your interest.
					</p>
				</div>
			</div>
		</>
	);
};
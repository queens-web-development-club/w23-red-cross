import { useState } from 'react';

const EMAIL = 'qusupportredcross@clubs.queensu.ca';

export default () => {
	const [subject, setSubject] = useState('');
	const [body, setBody] = useState('');
	const [href, setHref] = useState(`mailto:${EMAIL}`);

	const handleSubject = e => {
		setSubject(e.target.value);
		setHref(`mailto:${EMAIL}?subject=${encodeURIComponent(e.target.value)}&body=${encodeURIComponent(body)}`);
	};

	const handleBody = e => {
		setBody(e.target.value);
		setHref(`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(e.target.value)}`);
	};

	return (
		<>
			<div className='relative before:absolute before:h-full before:bg-[#333333] before:w-[200vw] before:left-[-100vw] before:-z-10'>
				<div className='h-full w-fit py-3 px-9 mx-auto font-bold text-3xl bg-[#CC3333] text-[#FBFBFB]'>
					Contact Us
				</div>
			</div>
			<div className='max-w-3xl my-2 px-3 mx-auto'>
				<label htmlFor='subject' className='block mb-2 font-medium text-gray-900'>Subject</label>
				<input type='text' id='subject' value={subject} onChange={handleSubject} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' required />
				<label htmlFor='subject' className='block mb-2 font-medium text-gray-900'>Message</label>
				<textarea id='subject' rows={6} value={body} onChange={handleBody} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' required />
				<a href={href} className='font-bold text-white float-right mt-2 py-3 px-8 rounded-2xl bg-[#CC3333] hover:opacity-75'>
					Send
				</a>
			</div>
		</>
	);
};
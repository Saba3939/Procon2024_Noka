import React from "react";
type ArticleType = {
	title: string;
	sentence: string;
};
const Article = ({ title, sentence }: ArticleType) => {
	return (
		<div className='max-w-sm overflow-hidden rounded shadow-lg'>
			<img
				className='w-full'
				src='./src/img/a1.jpg'
				alt='Sunset in the mountains'
			/>
			<div className='px-6 py-4'>
				<div className='mb-2 text-xl font-bold'>{title}</div>
				<p className='text-base text-gray-700'>{sentence}</p>
			</div>
		</div>
	);
};

export default Article;

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

type ArticleType = {
	title: string;
	sentence: string;
};
const Article = ({ title, sentence }: ArticleType) => {
	const [user] = useAuthState(auth);
	//ユーザー認証
	return (
		<div>
			{user ? (
				<div className='max-w-sm mb-10 overflow-hidden bg-white rounded shadow-lg '>
					<img
						className='w-full'
						src='./src/img/a1.jpg'
						alt='Sunset in the mountains'
					/>
					<div className='px-6 py-4'>
						<div className='mb-2 text-xl font-bold'>{title}</div>
						<p className='text-base text-gray-700'>{sentence}</p>
					</div>
					<div className='flex items-center'>
						<img
							className='w-10 h-10 mr-4 rounded-full'
							src={user.photoURL as string}
							alt='Avatar of Jonathan Reinink'
						/>
						<div className='text-sm'>
							<p className='leading-none text-gray-900'>{user.displayName}</p>
							<p className='text-gray-600'></p>
						</div>
					</div>
				</div>
			) : (
				<div className='max-w-sm mb-10 overflow-hidden bg-white rounded shadow-lg '>
					<img
						className='w-full'
						src='./src/img/user.jpeg'
						alt='Sunset in the mountains'
					/>
					<div className='px-6 py-4'>
						<div className='mb-2 text-xl font-bold'>{title}</div>
						<p className='text-base text-gray-700'>{sentence}</p>
					</div>
					<div className='flex items-center'>
						<img
							className='w-10 h-10 mr-4 rounded-full'
							src='./src/img/user.jpeg'
							alt='Avatar of Jonathan Reinink'
						/>
						<div className='text-sm'>
							<p className='leading-none text-gray-900'></p>
							<p className='text-gray-600'>Aug 18</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Article;

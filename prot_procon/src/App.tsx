import { useEffect, useState } from "react";
import "./App.css";
import ArticleList from "./ArticleList";

function App() {
	//タイトルの入力を格納する変数
	const [title, setTitles] = useState("");
	//野菜の入力を格納する変数
	const [inputVegetable, setInputVegetable] = useState("");
	//定型文を格納する変数
	const [phrase, setPhrase] = useState("Test");
	//記事の配列
	const [articles, setArticles] = useState<ArticleType[]>([]);
	//記事の型指定
	type ArticleType = {
		title: string;
		vegetable: string;
		sentence: string;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newArticle: ArticleType = {
			title: title,
			vegetable: inputVegetable,
			sentence: phrase,
		};
		console.log(newArticle);
		setArticles([newArticle, ...articles]);
		setTitles("");
		setInputVegetable("");
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitles(e.target.value);
	};

	const handleVegetableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputVegetable(e.target.value);
	};

	useEffect(() => {
		setPhrase(`今日取れた${inputVegetable}です！`);
	}, [inputVegetable]);
	return (
		<div className='text-center'>
			<div>
				<h1 className='p-4 text-3xl font-medium bg-green-500 border-b-2'>
					FarmConect
				</h1>
			</div>
			<div className='p-5 '>
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						type='text'
						value={title}
						placeholder='記事のタイトル'
						name='title'
						onChange={(e) => handleChange(e)}
						className='border-2'
					/>
					<input
						type='text'
						value={inputVegetable}
						name='vegetable'
						placeholder='野菜名'
						onChange={(e) => handleVegetableChange(e)}
						className='border-2'
					/>
					<input type='submit' value='投稿' />
				</form>
			</div>
			<div className='flex justify-center'>
				<ArticleList articles={articles} />
			</div>
		</div>
	);
}

export default App;

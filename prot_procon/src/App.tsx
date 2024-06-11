import { SetStateAction, useEffect, useState } from "react";
import "./App.css";
import ArticleList from "./ArticleList";
import Combox from "./Combox";
import SignInButton from "./SignInButton";

function App() {
	//タイトルの入力を格納する変数
	const [title, setTitles] = useState("");
	//野菜の入力を格納する変数
	const [inputVegetable, setInputVegetable] = useState("");
	//定型文を格納する変数
	const [phrase, setPhrase] = useState("Test");
	//記事の配列
	const [articles, setArticles] = useState<ArticleType[]>([]);
	//テンプレート
	const [templete, setTemplete] = useState(0);
	//記事の型指定
	type ArticleType = {
		title: string;
		vegetable: string;
		sentence: string;
	};

	//テンプレートの値を変更する中継地点
	const toTemplete = (tempnum: SetStateAction<number>) => {
		setTemplete(tempnum);
	};

	//投稿ボタンが押されたときの処理
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		//eventを用いるときにつけておく（つけないとリロードされる）
		e.preventDefault();
		if (inputVegetable === "" || title === "") {
			return;
		}

		//新しいオブジェクトを作成
		const newArticle: ArticleType = {
			title: title,
			vegetable: inputVegetable,
			sentence: phrase,
		};

		//記事のリストに新しく作った記事を追加
		setArticles([newArticle, ...articles]);

		//テキストボックスのなかを空にする
		setTitles("");
		setInputVegetable("");
	};

	//タイトルのテキストボックスが変更されたときに呼ばれる
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitles(e.target.value);
	};

	//野菜のテキストボックスが変更されたときに呼ばれる
	const handleVegetableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputVegetable(e.target.value);
	};

	//テンプレートに応じた本文を作成（テンプレートor野菜名が変更されたとき）
	useEffect(() => {
		switch (templete) {
			case 1:
				setPhrase(`今日取れた${inputVegetable}です！`);
				break;
			case 2:
				setPhrase(
					`${inputVegetable}を今日は置いています！ぜひお買い求めください！`
				);
				break;
			case 3:
				setPhrase(`${inputVegetable}はとても素晴らしい野菜です！`);
				break;
			default:
				setPhrase(`おいしい${inputVegetable}です`);
		}
	}, [inputVegetable, templete]);

	//html要素を返す
	return (
		<div className='text-center'>
			<div>
				<h1 className='p-4 text-3xl font-medium bg-green-500 border-b-2'>
					FarmConect
				</h1>
				<SignInButton />
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
					<Combox setTemp={toTemplete} />
				</form>
			</div>
			<div className='flex justify-center grid-cols-4'>
				<div className='m-5'>
					<ArticleList articles={articles} />
				</div>
			</div>
		</div>
	);
}

export default App;

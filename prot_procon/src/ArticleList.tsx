import React from "react";
import Article from "./Article";

type ArticleType = {
	title: string;
	vegetable: string;
	sentence: string;
};
const ArticleList = ({ articles }: { articles: ArticleType[] }) => {
	return articles.map((article) => (
		<Article title={article.title} sentence={article.sentence} />
	));
};

export default ArticleList;

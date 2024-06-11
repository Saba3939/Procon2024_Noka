import { SetStateAction } from "react";
import Select from "react-select";

const options = [
	{ value: 1, label: "テンプレート1" },
	{ value: 2, label: "テンプレート2" },
	{ value: 3, label: "テンプレート3" },
];

const Combox = ({
	setTemp,
}: {
	setTemp: (tempnum: SetStateAction<number>) => void;
}) => {
	const sentTemp = (selectOption: any) => {
		const value: number = selectOption.value;
		setTemp(value);
	};
	return <Select options={options} onChange={sentTemp} />;
};

export default Combox;

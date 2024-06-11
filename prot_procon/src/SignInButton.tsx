import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

const SignInButton = () => {
	const SignInWithGoogle = () => {
		signInWithPopup(auth, provider);
	};
	return <button onClick={SignInWithGoogle}>Sign In</button>;
};
export default SignInButton;

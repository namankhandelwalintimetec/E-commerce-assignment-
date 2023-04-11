export interface signUpPropsType {
	setUserCredential: (name: string, email: string, passard: string) => void;
	error: string;
	handelAuthentication: () => void;
	toggle: string;
}
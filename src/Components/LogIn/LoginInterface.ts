export interface authenticationPropType {
  toggle: string;
  setUserCredential: (name: string, email: string, passard: string) => void;
  errorMessage: string;
  handleLogIn: () => void;
}

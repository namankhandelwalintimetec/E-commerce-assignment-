const initialState: number = 0;

interface ActionType {
  type: string;
  paylod: number;
}

const changeState = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "LogIn":
      return action.paylod;
    case "LogOut":
      return 0;
    case "logout":
      return 1;
    default:
      return state;
  }
};

export default changeState;

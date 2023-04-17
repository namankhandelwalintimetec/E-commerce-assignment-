import { render, screen, waitFor, fireEvent, getByTestId } from '@testing-library/react';
import OfflinePage from "../Screens/OfflineScreen";

describe("CartScreen", () => {
  test("renders children when user is online", () => {
    const ChildComponent = () => <div>Child Component</div>;
    render(<OfflinePage children={<ChildComponent />} online={true} />);
    const childElement = screen.getByText("Child Component");
    expect(childElement).toBeInTheDocument();
  });

});
  
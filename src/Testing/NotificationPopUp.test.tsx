import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Notification from "../Components/NotificationPopUp";

describe("Notification component", () => {
  const mockProps = {
    title: "Success",
    message: "Notification message",
    type: "success",
    classValue: "notification-wrapper",
  };

  it("should render the Notification component", () => {
    render(<Notification {...mockProps} />);
    const notificationElement = screen.getByRole("alert");
    expect(notificationElement).toBeInTheDocument();
  });

  it("should show the title and message passed in as props", () => {
    render(<Notification {...mockProps} />);
    const titleElement = screen.getByText(mockProps.title);
    const messageElement = screen.getByText(mockProps.message);
    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
  it("should show the title and message passed in as props", () => {
    render(<Notification {...mockProps} />);
    const titleElement = screen.getByText(mockProps.title);
    const messageElement = screen.getByText(mockProps.message);
    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });

  it("should change the class name based on the type prop", () => {
    render(<Notification {...mockProps} />);
    const notificationElement = screen.getByRole("alert");
    expect(notificationElement).toHaveClass("success");
  });
});
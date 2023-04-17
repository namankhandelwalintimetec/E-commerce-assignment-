import { useState } from "react";
import { NotificationStyled } from "./NotificationStyle";
import { notificationProps } from "./NotificationInterface";

const Notification = ({
  title,
  message,
  type,
  classValue,
}: notificationProps) => {
  const [showNotification, setShowNotification] = useState(true);

  let notificationClass = "notification";
  if (type === "success") {
    notificationClass += " success";
  } else if (type === "warning") {
    notificationClass += " warning";
  } else if (type === "error") {
    notificationClass += " error";
  }

  return (
    <NotificationStyled>
      <div className={classValue}>
        {showNotification && (
          <div className={notificationClass} role="alert">
            <h3>{title}</h3>
            <p>{message}</p>
          </div>
        )}
      </div>
    </NotificationStyled>
  );
};

export default Notification;

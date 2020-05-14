import Swal from "sweetalert2";

export const NotificationService = {
  showAlert(title, text, icon) {
    Swal.fire({
      title,
      text,
      width: "20rem",
      padding: "0.5",
      icon,
    });
  },
};

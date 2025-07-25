// lib/alert.js
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// Success Alert
export const showSuccess = (message = "Message sent successfully!") => {
  return MySwal.fire({
    icon: "success",
    title: "Success",
    text: message,
    confirmButtonColor: "#2563eb", // Tailwind blue-600
    background: "#f8fafc", // Tailwind gray-50
    color: "#1e293b", // Tailwind slate-800
    timer: 3000,

  });
};

// Error Alert
export const showError = (message = "Something went wrong!") => {
  return MySwal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    confirmButtonColor: "#dc2626", // red-600
    background: "#fef2f2",
    color: "#1e293b",
  });
};

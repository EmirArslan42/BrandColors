"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Copied = ({ color }) => {
  // Toast göster
const showToast = () => {
  toast.dismiss(); // Öncekini kapat
  toast.success(`Copied ${color} to Clipboard`, {
    duration: 3000,
    position: "bottom-right",
    style: {
      background: "#333",
      color: "#fff",
    },
  });
};

  React.useEffect(() => {
    showToast();
  }, []);

  return <Toaster />; // Toastların görünmesi için gerekli
};

export default Copied;

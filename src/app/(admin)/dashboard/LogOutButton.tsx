"use client";

import { logout } from "@/actions/logout";
import { IoIosLogOut } from "react-icons/io";

export default function LogOutButton() {
  async function _logOut() {
    if (await logout()) {
      window.location.href = "/";
    }
  }
  return (
    <button
      onClick={_logOut}
      className="inline-flex items-center justify-center px-4 py-2 bg-red-100 rounded-md border border-red-900 gap-2"
    >
      <IoIosLogOut />
      logout
    </button>
  );
}

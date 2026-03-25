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
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium text-white/60 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/30 transition-all duration-200"
    >
      <IoIosLogOut className="text-base" />
      Logout
    </button>
  );
}

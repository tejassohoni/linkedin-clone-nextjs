import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";

import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="space-y-2 min-w-max max-w-lg">
      {/* Top */}
      <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="relative w-full h-14">
          <Image src="https://rb.gy/i26zak" layout="fill" priority />
        </div>
        <Avatar
          onClick={signOut}
          src={session?.user?.image}
          className="!h-14 !w-14 !border-2 !absolute !top-5 !cursor-pointer"
        />
        <div className="mt-5 py-4 space-y-1">
          <h4 className="opacity-100 hover:opacity-80 cursor-pointer smoothTransition">
            {session.user.name}
          </h4>
          <p className="text-black/60 dark:text-white/75 test-sm ">
            {session.user.email}
          </p>
        </div>
        <div className="hidden md:inline text-left dark:text-white/75 text-sm py-2">
          <div className="font-medium  space-y-0.5">
            <div className="flex justify-between space-x-2 sidebarButton">
              <h4>Who viewed your profile</h4>
              <span className="text-blue-500 ">321</span>
            </div>
            <div className="flex justify-between space-x-2 sidebarButton">
              <h4>Views of your post</h4>
              <span className="text-blue-500">1,892</span>
            </div>
          </div>
          <div className="sidebarButton">
            <h4 className="text-xs">Access exclusive tools & insights</h4>
            <h4 className="dark:text-white font-medium">
              <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
              Try Premium for free
            </h4>
          </div>
          <div className="sidebarButton flex items-center space-x-1.5">
            <BookmarkOutlinedIcon className="!-ml-1" />
            <h4 className="dark:text-white font-medium">My items</h4>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="hidden md:flex flex-col bg-white dark:bg-[#1D2226] text-black/70 dark:text-white/75 rounded-lg overflow-hidden border border-gray-300 dark:border-none pt-2.5 sticky top-20 space-y-2">
        <p className="sidebarLink">Groups</p>
        <div className="flex items-center justify-between">
          <p className="sidebarLink">Events</p>
          <AddRoundedIcon className="!h-5 cursor-pointer" />
        </div>
        <p className="sidebarLink">Followed Hashtags</p>
        <div className="sidebarButton text-center">
          <h4 className="dark:text-white font-medium text-sm">Discover More</h4>
        </div>
      </div>
    </div>
  );
}

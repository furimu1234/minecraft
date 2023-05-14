'use client';

import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";

type Props = {
  children: React.ReactNode;
};

const SideBarLayout = ({ children }: Props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* サイドバー */}
      <aside
        className={`fixed inset-0 bg-white z-30 transition-all ease-in-out duration-300 ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* 閉じるボタン */}
        <button
          className="absolute top-0 right-0 mt-4 mr-4 focus:outline-none"
          onClick={toggleSideBar}
        >
          <IoIosClose size={32} />
        </button>
        <ul className="mt-20 text-center">
          <li className="px-4 py-2 border-b">メニュー1</li>
          <li className="px-4 py-2 border-b">メニュー2</li>
          <li className="px-4 py-2 border-b">メニュー3</li>
        </ul>
      </aside>

      {/* メインコンテンツ */}
      <div
        className={`flex-1 overflow-x-hidden ${
          isSideBarOpen ? "translate-x-72" : "translate-x-0"
        }`}
      >
        {/* モバイル用のメニューボタン */}
        <button
          className="fixed top-0 right-0 z-40 mt-4 mr-4 text-gray-500 focus:outline-none lg:hidden"
          onClick={toggleSideBar}
        >
          <IoIosMenu size={32} />
        </button>

        {/* コンテンツ */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default SideBarLayout;

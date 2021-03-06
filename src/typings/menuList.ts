import React from "react";
export interface MenuConfig {
  title: string;
  key: string;
  icon: string;
  isPublic?: boolean;
  children?: MenuConfig[];
}

export const menuList: MenuConfig[] = [
  {
    title: "Home",
    key: "/home",
    icon: "HomeOutlined",
    isPublic: true,
  },
  {
    title: "Todo",
    key: "/todo",
    icon: "LikeOutlined",
    isPublic: true,
  },
  {
    title: "FunctionCompontents",
    key: "/functionCompontents",
    icon: "WalletOutlined",
    isPublic: true,
  },
]

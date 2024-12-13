"use client";
import Login from "@/components/admin-apanel/Login";
import { useAppSelector } from "@/redux/hook";
import { useSession } from "next-auth/react";
import React from "react";

const Layout = () => {
  const isLoadingg = useAppSelector((store) => store.LoadingReducer);
  const { data: session } = useSession();

  if (!session?.user) {
    return <Login />;
  }

  return <div>layout</div>;
};

export default Layout;

"use client";
import React, { useEffect } from "react";
import { ComponentMedia } from "./ComponentMedia";
import { useDashboard } from "./useDashboard";

export const ComponentListMedia = () => {
  const { getAllPosts, isPosts } = useDashboard();
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      {isPosts.map((item, index) => (
        <ComponentMedia {...item} key={index} />
      ))}
    </div>
  );
};

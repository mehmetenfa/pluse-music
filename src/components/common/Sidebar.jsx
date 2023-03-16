import React from "react";
import { AiFillApple } from "react-icons/ai";
import { IoPlaySharp } from "react-icons/io5";
import { recommand } from "../assets/data/data";
import { Card_sm } from "./Card_sm";

export const Sidebar = () => {
  return (
    <>
      <section className="sidebar hero">
        <h1 className="mb-5 text-lg font-semibold text-gray-600">5 Likes</h1>
        {recommand.slice(0, 5).map((item, i) => (
          <div className="mb-3">
            <Card_sm cover={item.cover} name={item.name} tag={item.tag} i={i} />
          </div>
        ))}
      </section>
    </>
  );
};

import React from "react";
import "./Latest.scss";
import { LatestCard } from "./LatestCard";

const dataList = [
  {
    title: "Bun reached a major mileston",
    imageUrl:
      "https://refine-web.imgix.net/blog/2023-06-04-bun-vs-node/social-2.png?w=800",
  },
  {
    title: "Apple Developers: Get ready with the latest beta releases",
    imageUrl:
      "https://devimages-cdn.apple.com/wwdc-services/articles/images/053312EB-FF8B-40A6-A4D9-DCFE9BC7A628/2048.jpeg",
  },
  {
    title:
      "WhatsApp new features launching in 2023: Companion mode, business directory, view once text, and more",
    imageUrl:
      "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/New-WhatsApp-features-coming-in-2023.png",
  },
];

export const Latest = () => {
  return (
    <div className="latest">
      <h2>Latest Updates</h2>

      {
        dataList.map((obj, index) => <LatestCard key={index} data={obj} />)
      }

      <LatestCard data={dataList[0]} />
    </div>
  );
};

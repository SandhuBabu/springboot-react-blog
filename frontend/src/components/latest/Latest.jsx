import React, { useEffect, useState } from "react";
import "./Latest.scss";
import { LatestCard } from "./LatestCard";
import { getLatest } from "../../services/blogService";


const Latest = () => {

  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    console.log(controller.signal);
    getLatest(controller.signalthen).then(res => {
      console.log(res);
      setLatestBlogs(res?.data?.latest)
    })
      .catch(err => console.log(err))

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div className="latest">
      <h2 id="top">Latest Blogs</h2>

      {
        latestBlogs.map((obj, index) => <LatestCard key={index} data={obj} />)
      }

    </div>
  );
};

export default Latest
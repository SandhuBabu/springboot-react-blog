import React from "react";
import {Link} from "react-router-dom"

export const LatestCard = ({data}) => {
  return (
    <>
      <article className="latest-card">
        <figure>
          <img
            src={data.imageUrl}
            alt=""
          />
        </figure>
        <div>
          <h3>{data.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde nihil in deserunt perferendis quaerat, libero voluptatum, aliquid quod, nisi illo ullam sit quasi non ipsam numquam quos eaque dolores quidem atque doloremque quia odio. Similique aliquid deserunt earum. Voluptatem, laboriosam similique. Consequuntur provident possimus dolores repellendus, non voluptatum saepe quibusdam placeat iusto neque tempore at quod nam culpa unde. Sit dolor placeat eos reiciendis quia blanditiis odio eligendi repudiandae, consequatur, veritatis pariatur doloribus, omnis ipsam facilis laudantium! Quisquam numquam officiis minus pariatur ex quaerat, eum fuga tempora deleniti, in inventore natus veritatis asperiores, aut nulla nesciunt velit odit repellendus.
          </p>

          <Link to="/contact" className="read-more-latest">Read More</Link>
        </div>
      </article>
    </>
  );
};

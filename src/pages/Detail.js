import { useLocation } from "react-router";
import { posts } from "../data";

const Detail = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const detail = posts.find((p) => p.id.toString() === path);

  return (
    <div className="post">
      <img src={detail.img} alt="" className="postImg" />
      <h1 className="postTitle">{detail.title}</h1>
      <p className="postDesc">{detail.desc}</p>
      <p className="postLongDesc">{detail.longDesc}</p>
    </div>
  );
};

export default Detail;

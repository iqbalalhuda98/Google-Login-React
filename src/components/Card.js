import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ jobs }) => {
  return (
    <div className="card">
      <p className="titleCard" style={{ marginBottom: 0 }}>
        {jobs.title}
      </p>
      <p className="secTitleCard" style={{ marginTop: 0 }}>
        {jobs.company}
      </p>
      <p className="">
        {jobs.location} - <span className="secTitleCard ">{jobs.type}</span>
      </p>

      <p className="">Posted: {moment(jobs.created_at).format("LL")}</p>

      <Link className="link" to={`/detail/${jobs.id}`}>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;

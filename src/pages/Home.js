import { useEffect, useState } from "react";
import Card from "../components/Card";
import { posts } from "../data";

const Home = () => {
  // const [jobList, setJobList] = useState("");

  // const getJobList = () => {
  //   fetch("http://dev3.dansmultipro.co.id/api/recruitment/positions.json")
  //     .then((response) => {
  //       if (response.status === 200) return response.json();
  //       throw new Error("Data tidak ditemukan!");
  //     })
  //     .then((res) => {
  //       setJobList(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getJobList();
  // }, []);

  // console.log("jobList", jobList);

  return (
    <div className="home">
      {posts.map((item, index) => (
        <Card key={index} jobs={item} />
      ))}
    </div>
  );
};

export default Home;

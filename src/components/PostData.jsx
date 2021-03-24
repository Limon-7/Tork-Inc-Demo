import React from "react";
import "./PostData.css";
export default function PostData() {
  const [datas, setData] = React.useState([]);

  const fetchData = async (url) => {
    let data = new URLSearchParams();
    data.append("user_id", "10089");
    const requestOptions = {
      method: "POST",
      body: data,
    };

    try {
      const res = await fetch(url, requestOptions);
      const resData = await res.json();
      setData(resData.slice(0, 5));
      console.log(resData);
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    fetchData("https://examplebd.com/api/live-classes");
  }, []);

  return (
    <div className="container">
      <div className="container_user">
        <h1>Post Example</h1>
        {datas ? (
          datas.map((user) => (
            <div className="post" key={user.id}>
              <h5>{user.user_name}</h5>
              <p>{user.starting_time}</p>
              <p>{user.title}</p>
            </div>
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
}

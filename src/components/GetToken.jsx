import React from "react";

function GetToken() {
  const [token, setToken] = React.useState(null);
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const resData = await res.json();
      setToken(resData);
      console.log(resData);
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    fetchData("https://examplebd.com/api/get-csrf-token");
  }, []);
  return (
    <div>
      <h1>Get example</h1>
      {/* <h1>{token.csrf_token}</h1> */}
      {token ? <h1>{token.csrf_token}</h1> : <p>lodaing..</p>}
    </div>
  );
}

export default GetToken;

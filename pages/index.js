import Head from "next/head";
import Login from "../components/Login";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { useEffect } from "react";
import Candidate from "../components/Candidate";
export default function Home() {
  const { isAuthenticated, logout, Moralis } = useMoralis();
  if (!isAuthenticated) return <Login />;
  const { data, loading, error } = useMoralisQuery(
    "Candidates",
    (query) => query.ascending("createdAt"),
    [],
    {
      live: true,
    }
  );
  const formattedData = JSON.parse(JSON.stringify(data, null, 2));

  // console.log(data[0].attributes?.candidateName);
  return (
    <div className="h-screen">
      <Head>
        <title>E-voting</title>
        <link rel="icon" href="/vote.png" />
      </Head>
      <h1>hi guys </h1>
      {/* <div>
        {formattedData.length != 0 ? (
          
        ) : (
          <></>
        )}
      </div> */}
      <div>
        {Object.keys(formattedData).map((keyName, i) => (
          <li className="travelcompany-input" key={i}>
            <span className="input-label">
              Name: {formattedData[keyName].candidateName}
            </span>
            <button className="ml-4">Vote</button>
          </li>
        ))}
      </div>
      {/* {results?.map((item) => (
        <h1>{item.candidateName}</h1>
      ))} */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

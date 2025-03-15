import { useEffect, useState } from "react";
import axios from "axios";

const HelpRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/helpRequests/list")
      .then((res) => setRequests(res.data));
  }, []);

  return (
    <div>
      <h1>Help Requests</h1>
      {requests.map((request) => (
        <div key={request.id}>
          <h3>{request.title}</h3>
          <p>{request.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HelpRequests;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Table1 from "./components/Table";
import PaginatedItems from "./components/Pagination";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  const [skip, setSkip] = useState("0");
  const initialUrl = `https://dummyjson.com/users?limit=10`;
  const [url, setUrl] = useState(initialUrl);
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      setUsers(res.data.users);
      setloading(false);
    };
    getData();
  }, [url, skip]);

  const handleReset = () => {
    setUrl(initialUrl);
  };

  return (
    <div className="">
      <Navbar />
      <h1 className="d-flex justify-content-center align-items-center mt-5 ">
        Tabla de Usuario
      </h1>
      <Table1 users={users} loading={loading} />
      <PaginatedItems
        url={url}
        users={users}
        setUsers={setUsers}
        setUrl={setUrl}
        setSkip={setSkip}
        handleReset={handleReset}
        setLoading={setloading}
      />
      <Footer />
    </div>
  );
};

export default App;

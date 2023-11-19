// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
// import Card from "./components/Card";
import { apiUrl, filterData } from "./data";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

function App() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourse] = useState(null);
  //let apiUrl= https://codehelp-apis.vercel.app/api/get-top-courses
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourse(output.data);
    } catch (error) {
      toast.error("network not resposing");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData}></Filter>
      </div>
      <div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
    </div>
  );
}

export default App;

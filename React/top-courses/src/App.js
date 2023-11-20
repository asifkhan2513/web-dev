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
      <div className="bg-bgDark py-4">
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData}></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h=[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} />}
        </div>
      </div>
    </div>
  );
}

export default App;

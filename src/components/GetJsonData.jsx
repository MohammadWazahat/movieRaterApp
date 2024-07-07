import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GetJsonData.css";
import SingleCardData from "./SingleCardData";

const GetJsonData = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3030/users");
      setMyUser(res.data);
    };
    fetchData();
  }, []);

  // console.log(myUser);

  const handleDelete = (id) => {
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if (confirm) {
      axios
        .delete(`http://localhost:3030/users/` + id)
        .then((res) => {
          location.reload(); // reload us to the same page
        })
        .catch((err) => console.log(err));
    }
    console.log(id);
  };

  return (
    <div>
      <div>
        <div className="h-20 text-3xl flex justify-center items-center">
          Shows & Dramas
        </div>
        <div className=" flex justify-end m-4 ">
          <Link className="border border-slate-200 p-3 " to="/form">
            Add New Show
          </Link>
        </div>
      </div>

      <div>
        {myUser.map((user, index) => {
          return (
            <div className="flex justify-between items-center m-2 p-2 " key={index}>
              <div className="flex items-center ">
              <div className="mx-4">{index + 1}.</div>
              <div className=" m-2 p-2 ml-8">
                <SingleCardData {...user} />
              </div>
              </div>

              <div className="  m-2 p-2">
                <Link
                  className=" border border-slate-200 p-2 m-2"
                  to={`/read/` + user.id}
                >
                  Web Series Details
                </Link>
              </div>
             
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetJsonData;

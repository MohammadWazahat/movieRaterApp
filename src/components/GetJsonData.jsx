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
        Web Shows List
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
            <div className=" border border-slate-200 m-2 p-2 " key={index}>
              <div className=" border border-slate-200 m-2 p-2 ">
                <SingleCardData {...user} />
              </div>

              <div className=" border border-slate-200 m-2 p-2">
                <Link
                  className=" border border-slate-200 "
                  to={`/read/` + user.id}
                >
                  Read
                </Link>
              </div>
              <div className=" border border-slate-200 m-2 p-2">
                <Link
                  className=" border border-slate-200 "
                  to={`/updateForm/` + user.id}
                >
                  update user
                </Link>
              </div>
              <div className=" border border-slate-200 m-2 p-2">
                <button className="" onClick={(e) => handleDelete(user.id)}>
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetJsonData;

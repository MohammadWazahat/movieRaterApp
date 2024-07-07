import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const AddDataJson = () => {
  const [values, setValues] = useState({
    image:"",
    title: "",
    description: "",
    genre: "",
    origin: "",
    starting_date: "",
    isRunning: "",
    ending_date: "",
    no_of_seasons: "",
    no_of_episodes: "",
    runtime: "",
    date_i_watched: "",
    my_rating: "",
    imdb_rating: "",
    my_review: "",
  });

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(values)
    axios
      .post("http://localhost:3030/users", values)
      .then((res) => {
        console.log(res);
        // hook to navigate back to the page
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div>
          <Link to="/">user list</Link>
        </div>
        add data
      </div>

      <h2>i will add data form</h2>

      <form onSubmit={submitForm}>
      <div>
          <div>
            <label htmlFor="image">Enter image</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="image"
              name="image"
              onChange={(e) =>
                setValues({ ...values, image : e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="title">Enter title</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="description">Enter description</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="description"
              name="description"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="genre">Enter genre</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="genre"
              name="genre"
              onChange={(e) => setValues({ ...values, genre: e.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="origin">Enter origin</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="origin"
              name="origin"
              onChange={(e) => setValues({ ...values, origin: e.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="starting_date">Enter starting_date</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="starting_date"
              name="starting_date"
              onChange={(e) =>
                setValues({ ...values, starting_date: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="isRunning">Enter isRunning</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="isRunning"
              name="isRunning"
              onChange={(e) =>
                setValues({ ...values, isRunning: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="ending_date">Enter ending_date </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="ending_date"
              name="ending_date"
              onChange={(e) =>
                setValues({ ...values, ending_date: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="no_of_seasons">Enter no_of_seasons</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="no_of_seasons"
              name="no_of_seasons"
              onChange={(e) =>
                setValues({ ...values, no_of_seasons: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="no_of_episodes">Enter no_of_episodes</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="no_of_episodes"
              name="no_of_episodes"
              onChange={(e) =>
                setValues({ ...values, no_of_episodes: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="runtime">Enter runtime</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="runtime"
              name="runtime"
              onChange={(e) =>
                setValues({ ...values, runtime: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="date_i_watched">Enter date_i_watched</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="date_i_watched"
              name="date_i_watched"
              onChange={(e) =>
                setValues({ ...values, date_i_watched: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="my_rating">Enter my_rating</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="my_rating"
              name="my_rating"
              onChange={(e) =>
                setValues({ ...values, my_rating: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="imdb_rating">Enter imdb_rating</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="imdb_rating"
              name="imdb_rating"
              onChange={(e) =>
                setValues({ ...values, imdb_rating: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="my_review">Enter my_review</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="my_review"
              name="my_review"
              onChange={(e) =>
                setValues({ ...values, my_review: e.target.value })
              }
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDataJson;

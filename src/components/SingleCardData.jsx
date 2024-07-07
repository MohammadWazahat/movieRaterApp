import React from "react";

const SingleCardData = (user) => {
  console.log(user);
  return (
    <div>
      <div>image comes here</div>
      <div>{user.title}</div>
      <div>{user.description}</div>
      <div>{user.genre}</div>
      <div>{user.origin}</div>
      <div>{user.starting_date}</div>
      <div>{user.ending_date}</div>
      <div>{user.isRunning}</div>
      <div>{user.no_of_seasons}</div>
      <div>{user.no_of_episodes}</div>
      <div>{user.runtime}</div>
      <div>{user.date_i_watched}</div>
      <div>{user.my_rating}</div>
      <div>{user.imdb_rating}</div>
      <div>{user.my_review}</div>
    </div>
  );
};

export default SingleCardData;

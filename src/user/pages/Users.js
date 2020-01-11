import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USER = [
    {
      id: "u1",
      name: "Max xx",
      image: "https://picsum.photos/200",
      places: 3
    },
    {
      id: "u2",
      name: "Mix xx",
      image: "https://picsum.photos/200",
      places: 1
    }
  ];
  return <UserList items={USER} />;
};

export default Users;
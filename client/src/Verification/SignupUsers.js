import axios from "axios";
import React, { useEffect, useState } from "react";
import SignupUserCard from "./SignupUserCard";

const SignupUsers = () => {
  const [data, setData] = useState();
  const getData = async () => {
    let data = await axios.get("/api/admlogin");
    const unregisteredData = data.data.filter((e) => {
      return e.registered == false;
    });
    setData(unregisteredData);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data
        ? data.map((e) => (
            <SignupUserCard
              fname={e.fname}
              lname={e.lname}
              photo={e.profImage}
              email={e.email}
              mobile={e.mobile}
              address={e.address}
              VAT={e.vatTaxNumber}
              intro={e.introduction}
              vatDoc = {e.vatDocument}
            />
          ))
        : ""}
    </div>
  );
};

export default SignupUsers;

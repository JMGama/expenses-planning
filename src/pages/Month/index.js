import React from "react";
import { useUser } from '../../context/user-context'
import { Redirect } from "react-router-dom";
import MonthsCarousel from "../../components/MonthsCarousel";

export const Month = () => {
  const userContext = useUser()
  console.log(userContext.user)
  if (userContext.user.id == null) {
    return <Redirect to="/login" />
  } else {
    return (
      <div className="align-middle text-center">
        <MonthsCarousel />
      </div>
    );
  }
};

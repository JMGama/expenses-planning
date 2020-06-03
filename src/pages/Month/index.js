import React from "react";
import { useUser } from '../../context/user-context'
import { Redirect } from "react-router-dom";
import MonthsCarousel from "../../components/MonthsCarousel";


export const Month = () => {
  const userContext = useUser()

  if (userContext.user.id == null || (userContext.token === false || userContext.token === null)) {
    return <div></div>
  }
  else {
    return (
      <div className="align-middle text-center">
        <MonthsCarousel />
      </div>
    );
  }
};


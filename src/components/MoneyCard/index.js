import React from "react";
import { SmallText } from "./styles";

import Card from "react-bootstrap/Card";

export const MoneyCard = props => (
  <div className="text-center">
    <div className="font-weight-normal">
      <SmallText>{props.text}</SmallText>
    </div>

    <Card
      className={
        "shadow inline-fled-x my-1 mr-1 text-center col border " + props.border
      }
    >
      <SmallText className="align-middle">${props.value}</SmallText>
    </Card>
  </div>
);

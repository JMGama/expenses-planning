import React, { useState } from "react";

import { FiDollarSign, FiPlus } from "react-icons/fi";

import CurrencyInput from "react-currency-input";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import dateFnsFormat from "date-fns/format";
import { useUser } from '../../context/user-context'

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

export const NewValueCard = () => {
  const DATE_FORMAT = "YYYY/MM/DD";

  const [selectedValue, setSelectedValue] = useState("Income");
  const [amount, setAmount] = useState(0.0);
  const [amountValid, setAmountValid] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(dateFnsFormat(new Date(), DATE_FORMAT))
  const userContext = useUser()

  const handleDayChange = (selectedDay, modifiers, DayPickerInput) => {
    setDate(DayPickerInput.state.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (amount < 0.01) {
      setAmountValid('is-invalid')
    }
    else {
      let data = {
        userId: userContext.user.id,
        amount,
        type: selectedValue,
        description,
        date
      }
      fetch(
        `http://localhost:3001/api/v1/expense`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        }
      ).then(res => {
        console.log(res)
        setAmountValid('')
        setAmount(0.0)
        setDescription('')
      })

    }
  }

  return (
    <Card className="shadow">
      <Card.Header as="h6" className="py-2">
        Add New Income/Outcome
      </Card.Header>
      <Card.Body className="container pt-1 pb-2 ">
        <Form className="mt-2" onSubmit={handleSubmit}>
          <Form.Row>
            <Col sm="2 my-sm-0" xs="12 my-1">
              <InputGroup className="shadow" size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    <FiDollarSign className="align-middle" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <CurrencyInput
                  className={`form-control ${amountValid}`}
                  value={amount}
                  onChange={(event, value) => setAmount(value)}
                  aria-describedby="inputGroupPrepend"
                />
              </InputGroup>
            </Col>

            <Col sm="4 my-sm-0" xs="12 my-1">
              <Form.Control
                type="text"
                placeholder="Description"
                className="shadow"
                size="sm"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </Col>

            <Col sm="2 my-sm-0" xs="12 my-1">
              <Form.Control
                as="select"
                className={
                  "shadow " +
                  (selectedValue === "Income"
                    ? "border-success"
                    : "border-danger")
                }
                value={selectedValue}
                onChange={event => setSelectedValue(event.target.value)}
                size="sm"
              >
                <option className="text-success" value="Income">
                  Income
                </option>
                <option className="text-danger" value="Outcome">
                  Outcome
                </option>
              </Form.Control>
            </Col>

            <Col sm="2 my-sm-0" xs="6 my-1">
              <DayPickerInput
                formatDate={formatDate}
                format={DATE_FORMAT}
                value={date}
                placeholder={`${dateFnsFormat(new Date(), DATE_FORMAT)}`}
                onDayChange={handleDayChange}
                inputProps={{
                  className:
                    "shadow form-control-sm text-center form-control-plaintext border font-weight-normal",
                  readOnly: true
                }}
              />
            </Col>

            <Col sm="2 my-sm-0" xs="6 my-1">
              <Button type="submit" variant="success" className="shadow" size="sm" block>
                <FiPlus className="align-middle" />{" "}
                <span className="align-middle mr-1">Add</span>
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

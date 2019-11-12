import React, { useState } from "react";
import { MonthExpensesCard } from "../MonthExpensesCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import { FiArrowUp, FiArrowDown } from "react-icons/fi"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export const MonthCard = () => {
  const incomeHeader = <div><FiArrowDown color="green" /> Incomes <FiArrowDown color="green" /></div>
  const outcomeHeader = <div><FiArrowUp color="red" /> Outcomes <FiArrowUp color="red" /></div>

  const [month, setMonth] = useState(0)
  const [direction, setDirection] = useState('next')
  const monthsList = [0, 1, 2]
  const changeNextMonth = () => {
    console.log(month, monthsList.length)
    if (month !== monthsList.length - 1) {
      setMonth(month + 1)
      setDirection('next')
    }
  }
  const changePrevMonth = () => {
    console.log(month, monthsList.length)
    if (month !== 0) {
      setMonth(month - 1)
      setDirection('prev')
    }
  }
  return (
    <div>
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Header as="h6" className="py-2">
              <Row>
                <Col>
                  <Button className="mx-1 float-left" size="sm" onClick={changePrevMonth}>
                    <IoIosArrowBack className="align-middle mb-1" />
                  </Button>
                </Col>
                <Col>
                  <span className="align-middle">$DATE balance</span>
                </Col>
                <Col>
                  <Button className="mx-1 float-right" size="sm" onClick={changeNextMonth}>
                    <IoIosArrowForward className="align-middle mb-1" />
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="pt-0 pb-1">
              <Carousel activeIndex={month} direction={direction} controls={false} indicators={false} touch={false} onSelect={null}>
                {monthsList.map((value, index) => {
                  return (
                    <Carousel.Item>
                      <Row>
                        <Col className="py-3">
                          <MonthExpensesCard header={incomeHeader} />
                        </Col>
                        <Col className="py-3">
                          <MonthExpensesCard header={outcomeHeader} />
                        </Col>
                      </Row>
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  );
};

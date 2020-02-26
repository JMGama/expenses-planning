import React from "react";
import { MonthExpensesCard } from "../MonthExpensesCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import { FiArrowUp, FiArrowDown } from "react-icons/fi"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

import { EmptyContent } from "./styles"

export default class MonthCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "monthIndex": 0,
      "direction": "next",
      "monthList": [],
      "monthData": {},
      "incomes": [],
      "outcomes": [],
      "monthId": null,
      "loading": true
    }
  }

  fetchData(url, method) {
    return fetch(
      url,
      {
        method,
        headers: new Headers({
          Accept: "application/json"
        })
      }
    )
  }

  componentDidMount() {
    this.fetchData('http://localhost:3001/api/months', "GET")
      .then(res => res.json())
      .then(response => {
        this.setState({ monthList: response })
        this.setState({ monthId: response[response.length - 1] })
        this.setState({ monthIndex: response.length - 1 }
        )
      })
      .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.monthId !== prevState.monthId) {
      this.setState({ loading: true })

      this.fetchData(`http://localhost:3001/api/months/${this.state.monthId}`, "GET")
        .then(res => res.json())
        .then(response => {
          this.setState({ monthData: response })
        })
        .then(() => {
          this.fetchData(`http://localhost:3001/api/expenses/month/${this.state.monthId}`, "GET")
            .then(res => res.json())
            .then(response => {
              const incomes = response.filter(item => item.type === "income")
              const outcomes = response.filter(item => item.type === "outcome")

              this.setState({ incomes })
              this.setState({ outcomes })
              this.setState({ loading: false })
            })
        })
        .catch(error => console.log(error));
    }

  }

  render() {
    const incomeHeader = <div><FiArrowDown color="green" /> Incomes <FiArrowDown color="green" /></div>
    const outcomeHeader = <div><FiArrowUp color="red" /> Outcomes <FiArrowUp color="red" /></div>

    const changeNextMonth = async () => {
      if (this.state.monthIndex !== 0) {
        await this.setState({ monthIndex: this.state.monthIndex - 1 })
        this.setState({
          monthId: this.state.monthList[this.state.monthIndex],
          direction: 'next'
        })
      }
    }
    const changePrevMonth = async () => {
      if (this.state.monthIndex !== this.state.monthList.length - 1) {
        await this.setState({ monthIndex: this.state.monthIndex + 1 })
        this.setState({
          monthId: this.state.monthList[this.state.monthIndex],
          direction: 'prev'
        })
      }
    }

    if (this.state.loading) {
      return (<div>
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
                    <span className="align-middle">...</span>
                  </Col>
                  <Col>
                    <Button className="mx-1 float-right" size="sm" onClick={changeNextMonth}>
                      <IoIosArrowForward className="align-middle mb-1" />
                    </Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body className="pt-0 pb-1">
                <Carousel activeIndex={this.state.monthIndex} direction={this.state.direction} controls={false} indicators={false} touch={false}>
                  {this.state.monthList.map((value, index) => {
                    return (
                      <Carousel.Item>
                        <Row>
                          <Col className="py-3">
                            <EmptyContent></EmptyContent>
                          </Col>
                          <Col className="py-3">
                            <EmptyContent></EmptyContent>
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

      </div>)
    }
    else {
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
                      <span className="align-middle">{this.state.monthData.month}/{this.state.monthData.year}</span>
                    </Col>
                    <Col>
                      <Button className="mx-1 float-right" size="sm" onClick={changeNextMonth}>
                        <IoIosArrowForward className="align-middle mb-1" />
                      </Button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body className="pt-0 pb-1">
                  <Carousel activeIndex={this.state.monthIndex} direction={this.state.direction} controls={false} indicators={false} touch={false}>
                    {this.state.monthList.map((value, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <Row>
                            <Col className="py-3">
                              <MonthExpensesCard key={`outcomes-${index}`} header={outcomeHeader} expenses={this.state.outcomes} total={this.state.monthData.outcomesTotal} />
                            </Col>
                            <Col className="py-3">
                              <MonthExpensesCard key={`incomes-${index}`} header={incomeHeader} expenses={this.state.incomes} total={this.state.monthData.incomesTotal} />
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
    }


  };
}



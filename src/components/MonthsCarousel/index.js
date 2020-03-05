import React from "react";
import { MonthCard } from "../MonthCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { UserContext } from '../../context/user-context'

export default class MonthsCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monthIndex: 0,
      monthId: null,
      monthList: [0]
    }
  }


  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/month/user/${this.context.user.id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        },
      })
      .then(res => res.json())
      .then(months => {
        this.setState({
          monthList: months.reverse(),
          monthId: months[0].id
        })
      })
      .catch(error => console.log(error))

  }

  componentDidUpdate() {
    if (this.context.reload) {
      fetch(`http://localhost:3001/api/v1/month/user/${this.context.user.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json"
          },
        })
        .then(res => res.json())
        .then(months => {
          this.setState({
            monthList: months.reverse()
          })
        })
        .catch(error => console.log(error))
      this.context.setReload(false)
    }
  }

  changeMonth = (direction) => {
    const { monthIndex, monthList } = this.state

    if (direction === 'next') {
      if (monthIndex !== monthList.length - 1) {
        this.setState({
          monthIndex: monthIndex + 1,
          monthId: monthList[monthIndex + 1].id
        })
      }
    }
    if (direction === 'prev') {
      if (monthIndex !== 0) {
        this.setState({
          monthIndex: monthIndex - 1,
          monthId: monthList[monthIndex - 1].id
        })
      }
    }
  }

  render() {
    const { monthIndex, monthList, monthId } = this.state


    return (
      <div>
        <Row>
          <Col>
            <Card className="shadow">
              <Card.Header as="h6" className="py-2">
                <Row>
                  <Col>
                    <Button className="mx-1 float-left" size="sm" onClick={() => this.changeMonth('prev')}>
                      <IoIosArrowBack className="align-middle mb-1" />
                    </Button>
                  </Col>
                  <Col>
                    <span className="align-middle">Monthly Balance</span>
                  </Col>
                  <Col>
                    <Button className="mx-1 float-right" size="sm" onClick={() => this.changeMonth('next')}>
                      <IoIosArrowForward className="align-middle mb-1" />
                    </Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body className="pt-0 pb-1">
                <Carousel activeIndex={monthIndex} controls={false} indicators={false} touch={false} onSelect={(index, e) => null}>
                  {monthList.map((value, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <MonthCard monthData={value} active={monthId === value.id}></MonthCard>
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
}

MonthsCarousel.contextType = UserContext;


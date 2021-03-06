import React, { useState, useEffect } from "react";
import { MonthExpensesCard } from "../MonthExpensesCard";
import { useUser } from '../../context/user-context'



import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FiArrowUp, FiArrowDown } from "react-icons/fi"


export const MonthCard = ({ monthData, active }) => {
    const incomeHeader = <div><FiArrowDown color="green" /> Incomes <FiArrowDown color="green" /></div>
    const outcomeHeader = <div><FiArrowUp color="red" /> Outcomes <FiArrowUp color="red" /></div>

    const [incomes, setIncomes] = useState(null)
    const [outcomes, setOutcomes] = useState(null)
    const [date, setDate] = useState()
    const userContext = useUser()


    const getMonthData = (monthData) => {
        const date = new Date(monthData.year, monthData.monthNumber - 1)
            .toLocaleString('default', { month: 'long', year: 'numeric' })
        setDate(date)
        fetch(`http://localhost:3001/api/v1/expense/month/${monthData.id}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: 'Bearer ' + userContext.token
                }
            })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(expenses => {
                        const incomes = expenses.filter((item) => item.type === 'income')
                        const outcomes = expenses.filter((item) => item.type === 'outcome')
                        setIncomes(incomes)
                        setOutcomes(outcomes)

                    })
                } else {
                    setIncomes([])
                    setOutcomes([])
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        if (monthData.id !== 0 && active) {
            getMonthData(monthData)
        } else {
            setIncomes([])
            setOutcomes([])
        }
    }, [monthData, active])

    return (<div>
        <Row>
            <Col className="pt-3 pb-0">
                {date || 'Loading data...'}
            </Col>
        </Row>
        <Row>
            <Col className="py-3">
                <MonthExpensesCard key={`outcomes-${monthData.id}`} header={outcomeHeader} expenses={outcomes} total={monthData.outcomesTotal} />
            </Col>
            <Col className="py-3">
                <MonthExpensesCard key={`incomes-${monthData.id}`} header={incomeHeader} expenses={incomes} total={monthData.incomesTotal} />
            </Col>
        </Row>
    </div>)

}
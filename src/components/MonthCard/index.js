import React, { useState, useEffect } from "react";
import { MonthExpensesCard } from "../MonthExpensesCard";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FiArrowUp, FiArrowDown } from "react-icons/fi"


export const MonthCard = ({ monthId, active }) => {
    const incomeHeader = <div><FiArrowDown color="green" /> Incomes <FiArrowDown color="green" /></div>
    const outcomeHeader = <div><FiArrowUp color="red" /> Outcomes <FiArrowUp color="red" /></div>

    const [incomes, setIncomes] = useState()
    const [outcomes, setOutcomes] = useState()
    const [incomesTotal, setIncomesTotal] = useState()
    const [outcomesTotal, setOutcomesTotal] = useState()
    const [date, setDate] = useState()
    const [loaded, setLoaded] = useState(false)

    const getMonthData = (monthId) => {
        fetch(`http://localhost:3001/api/months/${monthId}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            })
            .then(res => res.json())
            .then(month => {
                setIncomesTotal(month.incomesTotal)
                setOutcomesTotal(month.incomesTotal)
                let date = new Date(month.year, month.month)
                    .toLocaleString('default', { month: 'long', year: 'numeric' })
                setDate(date)
            }).then(() => {
                fetch(`http://localhost:3001/api/expenses/month/${monthId}`,
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json"
                        }
                    })
                    .then(res => res.json())
                    .then(expenses => {
                        const incomes = expenses.filter((item) => item.type === 'income')
                        const outcomes = expenses.filter((item) => item.type === 'outcome')
                        setIncomes(incomes)
                        setOutcomes(outcomes)

                    }).then(() => setLoaded(true))
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        if (monthId && active && !loaded) {
            getMonthData(monthId)
        }
    }, [monthId, active, loaded])

    return (<div>
        <Row>
            <Col className="pt-3 pb-0">
                {date || 'Loading data...'}
            </Col>
        </Row>
        <Row>
            <Col className="py-3">
                <MonthExpensesCard key={`outcomes-${monthId}`} header={outcomeHeader} expenses={incomes} total={incomesTotal} />
            </Col>
            <Col className="py-3">
                <MonthExpensesCard key={`incomes-${monthId}`} header={incomeHeader} expenses={outcomes} total={outcomesTotal} />
            </Col>
        </Row>
    </div>)

}
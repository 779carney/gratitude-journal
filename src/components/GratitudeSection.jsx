import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from 'uuid'
import GratitudeList from "./GratitudeList";
uuidv4()


function GratitudeSection() {
    const [statementList, setStatementList] = useState([])

    function addStatement(statement){
        setStatementList([...statementList, { id: uuidv4(), task: statement, completed: false, isEditing: false }])
    
    }
    function deleteStatement(id){
setStatementList(statementList.filter((statement) => {
    return statement.id !== id
}))
    }
    return <>
        <section className="gratitude-section">
            <h2> What are you grateful for?</h2>
            <Form addStatement={addStatement} />
            {statementList.map((statement, index)=>(
  <GratitudeList statement={statement} key = {index} deleteStatement={deleteStatement}/>
            ))}
          
        </section>
    </>
}

export default GratitudeSection
import React, { useState } from "react";

function Form({addStatement}) {
    const [statement, setStatement] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
     
        addStatement(statement);
        setStatement('')
    }
    return <>
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" className="form-input" placeholder='No matter how big or small...'value= {statement}onChange={(e) => setStatement(e.target.value)} />
            <button type="submit" className="submit-button">add gratitude</button>
        </form>
    </>
}

export default Form
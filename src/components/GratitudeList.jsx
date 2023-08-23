import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart }from '@fortawesome/free-solid-svg-icons';

function GratitudeList({statement, deleteStatement}){
    return <>
    <section className="gratitude-list">
<p className='gratitude-statement'>{statement.task}</p>
<div className='heart'>
<FontAwesomeIcon icon ={faHeart} onClick={()=>{
    deleteStatement(statement.id)
}}/>
</div>
  </section>
    </>
    }
    //<FontAwesomeIcon icon="fa-regular fa-sun" />
    export default GratitudeList
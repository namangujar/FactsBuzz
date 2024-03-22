import React from 'react'
import Facts from './Facts'

function Factslist(props) {
    if (props.facts.length === 0) {
      return <p className="message">There are No facts for this catagory yet...</p>
    }
    return (<section>
      <ul className="facts-list">{props.facts.map((el) => (
        <Facts key={el.id} factObj={el} setFacts={props.setFacts} CATEGORIES={props.CATEGORIES}/>
      ))}
      </ul>
    </section>
    )
  }

export default Factslist
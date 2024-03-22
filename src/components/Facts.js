import React from 'react'
import { useState } from 'react';
import supabase from '../supabase';

function Facts(props) {
    const [isUpdating, setIsUpdating] = useState(false);
  
    async function handleVote(columName) {
      setIsUpdating(true)
      const { data: updatedFact, error } = await supabase.from("facts1").update({ [columName]: props.factObj[columName] + 1 })
        .eq("id", props.factObj.id)
        .select();
  
      setIsUpdating(false)
  
      if (!error) {
        props.setFacts((facts) => facts.map((f) => (f.id === props.factObj.id ? updatedFact[0] : f)));
      }
    }
    return (
      <li className="fact">
        <p>{props.factObj.text}
          <a className="source" href={props.factObj.source} target="_blank" rel="noreferrer">(source)</a>
        </p>
        <span className="tag" style={{ backgroundColor: props.CATEGORIES.find((cat) => cat.name === props.factObj.category).color, }}>{props.factObj.category}</span>
  
        <div className="vote-buttons">
          <button onClick={() => handleVote("votesInteresting")} disabled={isUpdating}>👍{props.factObj.votesInteresting}</button>
          <button onClick={() => handleVote("votesMindblowing")} disabled={isUpdating}>🤯 {props.factObj.votesMindblowing}</button>
          <button onClick={() => handleVote("votesFalse")} disabled={isUpdating}>⛔️ {props.factObj.votesFalse}</button>
        </div>
      </li>
    )
  
  }

export default Facts
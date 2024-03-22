import React from 'react'
import { useState } from 'react';
import supabase from '../supabase';

function isValidHttpUrl(string) {
    let url;
  
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
  }

function FactForm({ setFacts, setShowForm, CATEGORIES }) {
    const [text, setText] = useState("");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const textLength = text.length;
  
  
    async function handleSubmit(e) {
      e.preventDefault();
      // console.log(text,source,category);
      if(!isValidHttpUrl(source)){alert("Invalid Source URL")};
      if (text && isValidHttpUrl(source) && category && textLength <= 200) {
    
   
        setIsUploading(true);
  
        const { data: newFact, error } = await supabase.from("facts1").insert([{ text, source, category }]).select();
  
        setIsUploading(false);
        if (!error) setFacts((facts) => ([newFact[0], ...facts]));
  
        setText("");
        setCategory("");
        setSource("");
  
        setShowForm(false);
      }
    }
  
    return (<form className="fact-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="share a fact with world" value={text} onChange={(e) => (setText(e.target.value))} disabled={isUploading} />
      <span>{200 - textLength}</span>
      <input type="text" placeholder="Trustworthy source" value={source} onChange={(e) => (setSource(e.target.value))} disabled={isUploading} />
      <select value={category} onChange={(e) => (setCategory(e.target.value))} disabled={isUploading}>
        <option value="">choose catagory</option>
        {CATEGORIES.map((el) => (<option key={el.name} value={el.name}>{el.name.toUpperCase()}</option>))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>Post</button>
    </form>
    );
  }

export default FactForm
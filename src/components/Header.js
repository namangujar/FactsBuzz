import React from 'react'

function Header({ showForm, setShowForm }) {
    const title = "FactsBuzz";
    return (
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68" width="68" alt="FactsBuzz" />
          <h1>{title}</h1>
        </div>
        <button className="btn btn-large btn-open" onClick={() => (setShowForm(!showForm))}>{showForm ? "close" : "Share a Fact"}</button>
      </header>
    )
  }
export default Header
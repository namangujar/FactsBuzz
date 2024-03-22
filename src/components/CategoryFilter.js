import React from 'react'

function CategoryFilter(props) {
    return (
      <aside>
        <ul>
          <li className="category"><button className="btn btn-all-categories" onClick={() => (props.setCurrentCategory("All"))}>All</button></li>{
            props.CATEGORIES.map((el) => (
              <li key={el.name} className="category">
                <button className="btn btn-category" style={{ backgroundColor: el.color }} onClick={() => (props.setCurrentCategory(el.name))}>
                  {el.name}
                </button>
              </li>
            ))}
        </ul>
      </aside>)
  }

export default CategoryFilter
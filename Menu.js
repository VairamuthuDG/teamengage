import React from 'react'

const Menu = ({lists}) => {


  
  return (
    <div>
    {lists.map((item)=>{

      const {id,title} = item;
      return <article key={id}>
         <h2>{item.title}</h2>
      </article>
    })}
    </div>
  )
}

export default Menu
import React from 'react'

function Container(props) {
  return (
    <section className={props.class1}>
      <div className='container-xxxl m-0'>{props.children}</div>
    </section>
  )
}

export default Container

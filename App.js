import React from 'react'
import Menu from './Menu'
import { useState } from 'react'


const App = () => {

  const [name,setName] = useState('')
  const [data, setData] = useState([])


  const Handlesubmit = (e) => {
    e.preventDefault();
    const newList = {
      id: new Date().getTime().toString(),
      title:name
    }
    setData([...data,newList])
    setName('')

  }

  return (
    <div>

      <form action='submit'>
        <input type="text" className='enter-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />  

        <button type='button' className='btn' onClick={Handlesubmit}>Submit</button>
      </form>

      <Menu lists={data} />


    </div>
  )
}

export default App
import React from 'react';
import {useSelector} from 'react-redux'

function Content() {
    const name = useSelector((state)=> state.users)
  return (
    <div>
        {name.map((item)=>(
            <p key={item.id}>{item.name}</p>
        ))}
    </div>
  )
}

export default Content
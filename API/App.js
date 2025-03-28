

import {useEffect, useState} from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3000')


function App() {
  const [notification, setNotification] = useState([])
  useEffect(()=>{
      socket.on('pushnotification', (data)=>{
        console.log('Received',data)
        setNotification((prev)=>
          [...prev, data]

        )
      })
      return ()=>{
        socket.off('pushnotification')
      }
    },[])

    return(
      <div>
        <h1>Push Notifications</h1>
        <ul>
          {notification.map((notifi, index)=>(
            <li key={index}>{notifi.message}</li>
            ))}
        </ul>

      </div>
    )
    
}

export default App;

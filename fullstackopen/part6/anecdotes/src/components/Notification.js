import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.notification.data)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  if (!notification) return <div></div>

  if (notification.content)
    return <div style={style}>you voted '{notification.content}'</div>

  if (notification) return <div style={style}>'{notification}' was added</div>
}

export default Notification

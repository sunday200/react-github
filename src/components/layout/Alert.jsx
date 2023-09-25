import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"

function Alert() {
  const { alert } = useContext(AlertContext)
  console.log(alert)
  return alert === null ? null : (
    <div className='text-red-400 mb-2'>{alert.msg}</div>
  )
}

export default Alert

import { createContext, useReducer } from "react"
import githubReducer from "./githubReducer"

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // const clearUsers = () => dispatch({ type: "GET_USERS", payload: [] })
  // const clearUsers = () => dispatch({ type: "CLEAR_USERS" })

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext

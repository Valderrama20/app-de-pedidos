import axios from "axios"
import { useState } from "react"
export const URL_FETCH = "http://localhost:3001"

const HttpTypes = { GET: "get", POST: "post", PUT: "put", DELETE: 'delete' }

export const useFetch = ({ url, type = HttpTypes.GET, body = {} }) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const fetcher = async () => {

    try {
      setLoading(true)
      setError(false)
      const didToken = type === 'get' ? null : await getUserToken()
      const response = await axios({
        method: type, 
        url: `${URL_FETCH}${url}`,
        data: body,
        
      })
      setData(response.data)
    } catch (error) {
      console.log("error", error)
      setError(true)
    }

    setLoading(false)
  }

  return {
    data,
    setData,
    loading,
    error,
    fetcher
  }
}

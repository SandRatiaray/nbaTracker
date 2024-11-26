import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState<string>("")

  useEffect(() => {

    const getData = async () => {
      const response = await fetch('http://localhost:4000/')
      const { body } = await response.json()
      console.log(JSON.stringify(body));


      setData(JSON.stringify(body))
    }
    getData()
  }, [])

  return (
    <>
      <div>
        <p>{data}</p>
      </div>

    </>
  )
}

export default App

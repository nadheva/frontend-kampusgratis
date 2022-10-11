import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Hendra = () => {
  const [searchParams, setSerachParams] = useSearchParams();
  const hello = searchParams.get("url");
  const data = searchParams.get("data");

  console.log(hello, data)
  return (
    <div>Hendra</div>
  )
}

export default Hendra
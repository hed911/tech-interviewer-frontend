import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { makeHTTPRequest } from "../../../shared/helpers/make_http_request"
import { shuffleArray } from "../../../shared/helpers/shuffle_array"

import Button from '@mui/material/Button'
import Stack from "@mui/material/Stack"

import Spinner from "./Spinner"

const Questionnaire = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [counter, setCounter] = useState(0)
  const [index, setIndex] = useState(0)
  const [questions, setQuestions] = useState([])

  let { id } = useParams()
  const total = questions.length

  useEffect(() => {
    const fetchData = async () => {
      makeHTTPRequest(`${process.env.REACT_APP_API_URL}/questionnaires/${id}`, data => {
        setQuestions(shuffleArray(data))
        setIsLoading(false)
      })
    }
  
    fetchData()
      .catch(console.error);
  }, [])

  const onNextClicked = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    if (total) {
      setIndex(counter % total)
    }
  }, [counter])

  return (
    <>
      {isLoading ? <Spinner /> : (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ width: 1, height: "100vh" }}
        >
          <div style={{textAlign: "center"}}>
            <p style={{margin: 0}}>{index  + 1}/{total}</p>
            <h2 style={{marginTop: 0}}>{questions[index]}</h2>
            <Button variant="contained" size="large" onClick={onNextClicked}>Next</Button>
          </div>
          
        </Stack>
      )}
    </>
  )
}

export default Questionnaire
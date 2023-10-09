import QuestionGroupSelector from "./QuestionGroupSelector"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { makeHTTPRequest } from "../../../shared/helpers/make_http_request"


const QuestionGroupManager = () => {
  const navigate = useNavigate()
  const [groups, setGroups] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      makeHTTPRequest(`${process.env.REACT_APP_API_URL}/questionnaires`, data => {
        setGroups(data)
        setIsLoading(false)
      })
    }
  
    fetchData()
      .catch(console.error);
  }, [])

  const redirectToQuestioner = id => {
    navigate(`/questionnaires/${id}`)
  }

  return (
    <QuestionGroupSelector isLoading={isLoading} groups={groups} onGroupSelected={redirectToQuestioner} />
  )
}

export default QuestionGroupManager
import { Routes, Route } from "react-router-dom"
import QuestionGroupManager from "./features/nameless/components/QuestionGroupManager"
import Questionnaire from "./features/nameless/components/Questionnaire"

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { useNavigate } from 'react-router-dom'

export const AppRoutes = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <section className="container">
      <AppBar position="static" color="info">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tech Interviewer
          </Typography>
          <Button onClick={goBack} color="inherit">Back</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<QuestionGroupManager/>}/>
        <Route path="/questionnaires/:id" element={<Questionnaire/>}/>
      </Routes>
    </section>
  )
}
import React from 'react'
import axios from 'axios'
import { Route, Link, Switch } from 'react-router-dom'
import { Button, Divider, Header, Container } from 'semantic-ui-react'

import { apiBaseUrl } from './constants'
import { setPatientList, useStateValue } from './state'
import { Patient } from './types'

import PatientListPage from './PatientListPage'
import PatientPage from './PatientPage/index'

const App: React.FC = () => {
  const [, dispatch] = useStateValue()
  React.useEffect(() => {
    axios.get<void>(`${apiBaseUrl}/ping`)
    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        )
        dispatch(setPatientList(patientListFromApi))
      } catch (e) {
        console.error(e)
      }
    }
    fetchPatientList()
  }, [dispatch])

  return (
    <div className='App'>
      <Container>
        <Header as='h1'>Patientor</Header>
        <Button as={Link} to='/' primary>
          Home
        </Button>
        <Divider hidden />
        <Switch>
          <Route path='/' exact render={() => <PatientListPage />} />
          <Route path='/patient/:id' exact render={() => <PatientPage />} />
        </Switch>
      </Container>
    </div>
  )
}

export default App

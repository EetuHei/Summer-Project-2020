import React from 'react'
import axios from 'axios'
import { apiBaseUrl } from '../constants'
import { useParams } from 'react-router-dom'
import { useStateValue, setPatientDetails } from '../state'
import { Patient } from '../types'

const PatientPage: React.FC = () => {
  const [{ patient }, dispatch] = useStateValue()

  // get param id
  const {id} = useParams<{id: string}>()

  // fetch patient data from api based on param id
  React.useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const { data: patientDataById } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        )
        dispatch(setPatientDetails(patientDataById))
      } catch (e) {
        console.error(e)
      }
    }
    if (!patient || patient?.id !== id) {
      fetchPatientData()
    }
  }, [dispatch, id])

  return (
    <div>
      {patient ? (
        <div>
          {  Object.values(patient).map((data: Patient) => (
           <>
          <h1>{data.name}</h1>
          <p>{data.ssn}</p>
          <p>{data.occupation}</p>
         </>
  ))}
       </div>
       )
       : 
       (
      <div>
         <p>loading data...</p>
      </div>)}
    </div>
  )
}

export default PatientPage

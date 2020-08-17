import React from 'react'
import Content from './components/Content'
import { courseParts } from './types'
import Header from './components/Header'
import Total from './components/Total'

const App: React.FC = () => {
  const courseName = 'Half Stack application development'

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  )
}

export default App

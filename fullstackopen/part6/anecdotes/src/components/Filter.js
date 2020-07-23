import React from 'react'
import { connect } from 'react-redux'

import { filterChange } from '../reducers/Actions'

const Filter = (props) => {
  const handleChange = (e) => {
    props.filterChange(e.target.value)
  }

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = {
  filterChange,
}

export default connect(null, mapStateToProps)(Filter)

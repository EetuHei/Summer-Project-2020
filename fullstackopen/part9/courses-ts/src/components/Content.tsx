import React from 'react'
import { CoursePart } from '../types'
import { assertNever } from '../config/utils'

const Content: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <div>
      {courseParts.map((course) => {
        switch (course.name) {
          case 'Fundamentals':
            return (
              <div key={course.name}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <p>Exercises: {course.exerciseCount}</p>
              </div>
            )
          case 'Using props to pass data':
            return (
              <div key={course.name}>
                <h3>{course.name}</h3>
                <p>Group projects: {course.groupProjectCount}</p>
                <p>Exercises: {course.exerciseCount}</p>
              </div>
            )
          case 'Deeper type usage':
            return (
              <div key={course.name}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <p>Exercises: {course.exerciseCount}</p>
              </div>
            )
          default:
            return assertNever(course)
        }
      })}
    </div>
  )
}

export default Content

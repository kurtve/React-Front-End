import React from 'react'
import EditActivityForm from './EditActivityForm'

export default function EditActivity() {

  return (
    <>
      <EditActivityForm editActivity={props.editActivity} activities={props.activities}/>
    </>
  )

}

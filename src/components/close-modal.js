import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function CloseModal () {
  const navigate = useNavigate()
  return (
        <Button size={'large'} onClick={() => navigate(-1)}>
            Cancel
        </Button>
  )
}

export default (CloseModal)

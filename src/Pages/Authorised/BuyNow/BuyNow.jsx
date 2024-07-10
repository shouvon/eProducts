import React from 'react'
import { BuyNowBox } from './style'
import { Button } from '@mui/material'

function BuyNow() {
  return (
    <BuyNowBox>
      <Button className='button'>Confirm Order</Button>
    </BuyNowBox>
  )
}

export default BuyNow
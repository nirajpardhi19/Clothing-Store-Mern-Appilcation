import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import StarIcon from "@mui/icons-material/Star"
import { deepPurple } from '@mui/material/colors'

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
      {/* <div>
            <h1 className=' font-bold text-lg py-7'>Delivery Address</h1>
            <AddressCard/>
      </div> */}
      <div className='py-20'>
        <OrderTraker activeStep={3}/>
      </div>

      <Grid className="space-y-5" container>
        {[1,1].map((item=> <Grid item container className="shadow-xl ronded-md p-5 border" sx=
           {{alignItems:"center",justifyContent:"space-between"}}>
             
             <Grid item xs={6}>
                <div className='flex items-center space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top'
                    src="https://tse1.mm.bing.net/th?id=OIP.dZ6dCywjGqezAhBacw5oWwHaLY&pid=Api&rs=1&c=1&qlt=95&w=74&h=115"
                    alt=""
                    />
                    <div className='space-y-2 ml-5' >
                        <p className='font-semibold'> Women Black dress</p>
                        <p className='space-x-5 opacity-50 text-xs font-semibold'>
                            <span>Color:Black</span>
                           <span>Size:M</span>
                        </p>
                        <p>Seller: Lineria</p>
                        <p>$</p>
                    </div>
                </div>

             </Grid>

             <Grid item>
                    
                    <Box sx={{color:deepPurple[500]}}>

                        <StarIcon sx={{fontSize:"1.5rem"}} className='px2 text-5xl'/>
                        <span> Rate & Review Product</span>
                    </Box>
             </Grid>

           </Grid>))}
           
          

      </Grid>
    </div>
  )
}

export default OrderDetails


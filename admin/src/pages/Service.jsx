import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Service = ({ token }) => {

  const [service, setService] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return null;
    }

    try {

      const response = await axios.get(backendUrl + '/api/service/all', {}, { headers: { token } })
      if (response.data.success) {
        setService(response.data.serviceData.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }


  }

  

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div>
      <h3>Service Page</h3>
      <div>
        {
          serviceData.map((service, index) => (
            <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
              <img className='w-12' src={assets.parcel_icon} alt="" />
              <div>
                <div>
                  {service.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return <p className='py-0.5' key={index}> {item.firstName} x <span className='bg-gray-300'>{item.lastName}</span> </p>
                    }
                    else {
                      return <p className='py-0.5' key={index}> {item.firstName} x {item.quantity} <span> {item.size} </span> ,</p>
                    }
                  })}
                </div>
                <p className='mt-3 mb-2 font-medium'>{service.address.firstName + " " + service.address.lastName}</p>
                <div>
                  <p>{service.address.street + ","}</p>
                  <p>{serviceData.address.city + ", " + serviceData.address.state + ", " + service.address.country + ", " + service.address.zipcode}</p>
                </div>
                {/* <p>{order.address.phone}</p> */}
              </div>
              {/* <div>
                <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
                <p className='mt-3'>Method : {order.paymentMethod}</p>
                <p>Payment : { order.payment ? 'Done' : 'Pending' }</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className='text-sm sm:text-[15px]'>{currency}{order.amount}</p> */}
              {/* <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='p-2 font-semibold'>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select> */}
            </div>
          ))
        }
      </div>
    </div>
  )



}

export default Service


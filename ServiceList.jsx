import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'From Peaks to Pebbles: The Journey of Weathering',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'any information about a place, we can provide',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'A Glimpse into Our Planets Beauty.',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList

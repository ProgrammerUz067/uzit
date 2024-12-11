import React from 'react'
import './Preloader.scss'
import { preLoaderAnim } from '../../animations'



export default function Preloader() {
  React.useEffect(()=>{
    setTimeout(() => {
      preLoaderAnim()
      
   },5000);
   
  })
  return (
    <div className='preloader'>
    <video autoplay={true} muted controls=''>
 <source src='/Logo animation1.mp4'/>
</video>
</div>
  )
}

import React from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'

ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);
const data ={
  datasets:[{
    data:[42,38,20],
    backgroundColor:['#293478',
    '#cecdd4',
    '#edecf2'],
  }],
  labels:["one", "two", "three"],
  
  // plotOptions :{
  //     pie:{
  //         expandOnClick:false,
  //         donut:{
  //             size:"50px",
  //         }
  //     }
  // }
}
const Donut = () => {
   
    // const series =[42,38,20]
  return (
    <>
    <Doughnut data={data}/>
    </>
  )
}

export default Donut
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import data from './data';

const IndustriesMain = () => {
    
    const[noOfElement, setnoOfElement] = useState(4);

    const loadMore = () =>{
        setnoOfElement(noOfElement + noOfElement)
    }
    const slice= data.cardData.slice(0, noOfElement);
  return (
    <>
       <section className="logos py-rat ">
        <div className="container">
        <div className="main-title text-center">
            <h2>Industries</h2>
            <p>Working closely with the World Economic Forum and senior executives from 40 global companies, we have
                developed an end-to-end approach to transform your digital enterprise.</p>
        </div>
        <div className="wrapper-li ">
        <div className="row">
        {slice.map((item, index)=>{
    return(
        <div className="col-md-3 col-6 p-0">
        <div className="p-2">
            <div className="shaddow">
                <div className="snake-rel">
                    <div className="snake-img">
                        <img src={item.img} alt=""/>
                        <div className="snake-text text-center">
                            <h5>{item.title}</h5>
                        </div>
                    </div>
                    <div className="snake-over">
                        <div className="direction-aware-hover">
                            <div className="direction-aware-hover__left"></div>
                            <div className="direction-aware-hover__right"></div>
                            <div className="direction-aware-hover__top"></div>
                            <div className="direction-aware-hover__bottom"></div>
                            <div className="direction-aware-hover__content">


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            )
        })}
            {/* <div className="col-lg-3 col-md-3 col-6 log-2">
                <div className="img-area have2 img2 snake shaddow">
                   
                    <h5>Gaming</h5>
                    <div className="overlay"></div>
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 log-2">
                <div className="img-area have2 img3 snake shaddow">
                    
                    <h5>Ecommerce</h5>
                    <div className="overlay"></div>
                </div>
            </div> */}
           
            
        </div>
        <Link onClick={()=>loadMore()} role="button" to="" className="btn-1 mt-4 button-more1">LOAD MORE</Link>
    </div>
    </div>
    </section>

    </>
  )
}

export default IndustriesMain
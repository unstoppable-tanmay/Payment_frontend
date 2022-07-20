import React,{useEffect} from 'react'
import "./Home.css"
import crediccardlogo from '../res/Screenshot_2022-07-20_032114-removebg-preview.png';
import chip from '../res/Chip_Card.png'
import { NavLink } from "react-router-dom";

const Home = () => {

    useEffect(() => {
        let card = document.querySelector('.card');

        document.addEventListener('mousemove', function(e) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
        card.style.transform = `rotateY(-${xAxis}deg) rotateX(-${yAxis}deg)`;
        });
    })

  return (
    <div className="Home">
        <div className="home_left">
            <div className="home_logo">Secure Pay</div>
            <div className="home_about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum autem perspiciatis labore nemo excepturi voluptas error, beatae, aspernatur fuga eveniet officia in nulla pariatur alias quos, qui at quisquam. Ad?</div>
            {/* <div className="home_btn">Get Started</div> */}
            <NavLink className="home_btn" to="/payment">Get Started</NavLink>
        </div>
        <div className="home_right">
            <div className="hexagon">
                <div className="card">
                    <img src={crediccardlogo} alt="" />
                    <div className="credit_no">5256&nbsp; 6775&nbsp; 4456&nbsp; 2245</div>
                    <img className="credit_chip" src={chip} alt="" />
                    <div className="validate">
                        <div className="validate_from">
                            <div className="validate_fromtext">valid <br />from</div>
                            16/4
                        </div>
                        <div className="validate_to">
                            <div className="validate_fromtext">valid <br />to</div>
                            20/4
                        </div>
                    </div>
                    <div className="credit_name">KELVIN KELIN</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
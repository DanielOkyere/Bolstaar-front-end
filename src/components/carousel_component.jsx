import { Carousel } from 'react-bootstrap'
import React, { useState } from 'react'
import {
  slider1,
  slider2, slider3
} from '../Assets/Images/fwdwhoweare'
import Container from 'react-bootstrap/Container'
function ControlledCarousel () {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <div className='pt-4'>
                <div className='row mt-4'>
                  <div className='jumbotron align-items-center bg-light'>
                    <h1 className='hero-h1'>
                      Get quality farm technologies & best farm techniques
                    </h1>
                    <p className='lead  hero-p'>
                      Increase yield by 100%, cut cost of farming by 50%, and
                      increase profits by 50%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col hero-img'>
              <img className='d-block rounded img-fluid ' src={slider1} alt='First slide' />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <div className='pt-4'>
                <div className='row mt-4'>
                  <div className='jumbotron align-items-center bg-light'>
                    <h1 className='hero-h1'>
                      Get quality farm technologies & best farm techniques
                    </h1>
                    <p className='lead  hero-p'>
                      Increase yield by 100%, cut cost of farming by 50%, and
                      increase profits by 50%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col hero-img'>
              <img className='d-block  rounded img-fluid ' src={slider2} alt='Second slide' />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <div className='pt-4'>
                <div className='row mt-4'>
                  <div className='jumbotron align-items-center bg-light'>
                    <h1 className='hero-h1'>
                      Get quality farm technologies & best farm techniques
                    </h1>
                    <p className='lead  hero-p'>
                      Increase yield by 100%, cut cost of farming by 50%, and
                      increase profits by 50%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col hero-img '>
              <img className='d-block rounded img-fluid ' src={slider3} alt='Third slide' />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default ControlledCarousel

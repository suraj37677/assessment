import React from 'react'
import './Navbar.css';
import {AiFillCloud} from'react-icons/ai'
import {DiCompass} from 'react-icons/di'
import {DiStreamline} from 'react-icons/di'
import {HiGift} from 'react-icons/hi'
const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a style={{position:"relative",right:"12px"}} class="navbar-brand" href="#"><img className='logo-image' src='logo.png'></img  >ASCENDANT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">BLOG</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FEATURES
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          PAGE TAMPLATES
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
<div>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner h-60  m-0">
    <div class="carousel-item active h-50">
      <img style={{minHeight:"50px", backgroundSize:"cover",backgroundRepeat:"no-repeat"}}src="https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=20" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block mt-5 position-absolute top-0">
      <p style={{color:"green"}}>A MAGNIFICAN BOOTSTRAP THEME FOR SMALL BUSSINESS </p>
        <h5 style={{color:"black"}}>CREATE A GREAT EXPERIENCE FOR <br/>YOUR DREAM AUDIENCE</h5>
        
        <button  style={{color:"white",backgroundColor:"green"}}type="button" class="btn btn-secondary">BUY ASCENDANT</button>
      </div>
      
    </div>
    
    
  </div>
  
 
</div>



</div>
<div>
  <h3 className='head'>OUR CORE FEATURES</h3>
  <div className='container'>
    <div className='row m-5'>
      <div  className='col-4 p-5 '>
      <div className='icon'>
        <AiFillCloud/>
        </div>
        <div>
        <h5>FEATURED HOMEPAGE</h5>
        <p style={{fontFamily:"sans-serif",fontSize:"13px"}}>hey its a good time to manage the situation</p>

        </div>
<div>
  
</div>
      </div>
      <div  className='col-4 p-5'>
        <div className='icon'>
          
        <HiGift/>
        </div>
        <div>
        <h5>HIGHLY VERSATILE</h5>
        <p style={{fontFamily:"sans-serif",fontSize:"13px"}}>A perfect and well-written supporting<br/> sentences, 
        </p>

        </div>
      
      </div>
      <div  className='col-4 p-5'>
      <div className='icon'>
      <DiCompass/>
        </div>
        <div>
        <h5>FOR SMALL BUSSINESS</h5>
        <p style={{fontFamily:"sans-serif",fontSize:"13px"}}><span>i really have a good hope to perform <br/>better</span></p>

        </div>
      </div>

    </div>


  </div>
</div>

    
    </>
  )
}

export default Navbar;

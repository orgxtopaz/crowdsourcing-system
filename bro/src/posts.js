import React from 'react'
import logoIcon from './images/logo-icon.png'
import lightLogo from './images/logo-light-text.png'
import lightIcon from './images/logo-light-icon.png'
import user from './images/orgxtopaz.png'
import './css/custom.css';
import { useHistory } from "react-router-dom"; // allows us to access our path / route history.
import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import { useEffect } from "react"; //a hook that GIVES  "side-effects"

function Posts() {

  let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.
  const isLoaded = [true];
  useEffect(() => {

     if (isLoaded) {
      Axios.post("http://localhost:5000/login", 

      { 
        
        
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
      
      }
      
      )
    
      
      .then((res) => {
        if(res.data.position ==="admin"){ 

      
        }else{
          history.push("/")
          window.location.reload();
        }


     
      })
      .catch((error) => {
        history.push("/")


      })

    }else{
      console.log("ERROR")
    }


  }, isLoaded);
  function Logout(){
    localStorage.clear()
    window.location.reload()
  }
  return (


    <div>
    {/* ============================================================== */}
    {/* Preloader - style you can find in spinners.css */}
    {/* ============================================================== */}
    <div className="preloader">
      <div className="lds-ripple">
        <div className="lds-pos" />
        <div className="lds-pos" />
      </div>
    </div>
    {/* ============================================================== */}
    {/* Main wrapper - style you can find in pages.scss */}
    {/* ============================================================== */}
    <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
      {/* ============================================================== */}
      {/* Topbar header - style you can find in pages.scss */}
      {/* ============================================================== */}
      <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header" data-logobg="skin5">
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <a className="navbar-brand" href="/">
              {/* Logo icon */}
              <b className="logo-icon">
                {/* Dark Logo icon */}
                <img src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="homepage" className="dark-logo" />
                {/* Light Logo icon */}
              </b>
              {/*End Logo icon */}
              {/* Logo text */}
              <span className="logo-text">
                {/* dark Logo text */}
                <img src={logoIcon}alt="homepage" className="dark-logo" />
                {/* Light Logo text */}
                {/* <img src={lightLogo} className="light-logo" alt="homepage" /> */}
              </span>
            </a>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            {/* This is for the sidebar toggle which is visible on mobile only */}
            <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
          </div>
          {/* ============================================================== */}
          {/* End Logo */}
          {/* ============================================================== */}
          <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
            {/* ============================================================== */}
            {/* toggle and nav items */}
            {/* ============================================================== */}
          
            {/* ============================================================== */}
            {/* Right side toggle and nav items */}
            {/* ============================================================== */}
           
          </div>
        </nav>
      </header>
      {/* ============================================================== */}
      {/* End Topbar header */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Left Sidebar - style you can find in sidebar.scss  */}
      {/* ============================================================== */}
      <aside className="left-sidebar" data-sidebarbg="skin6">
        {/* Sidebar scroll*/}
        <div className="scroll-sidebar">
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              {/* User Profile*/}
              <li>
                {/* User Profile*/}
                <div className="user-profile d-flex no-block dropdown m-t-20">
                  <div className="user-pic"><img src={user} alt="users" className="rounded-circle" width={40} /></div>
                  <div className="user-content hide-menu m-l-10">
                    <a href="#" className id="Userdd" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <h5 className="m-b-0 user-name font-medium">Orgxtopaz <i className="fa fa-angle-down" /></h5>
                      <span className="op-5 user-email">orgxtopaz@gmail.com</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="Userdd" onClick={Logout}>
                   
                      
                      <a className="dropdown-item" href="javascript:void(0)"><i className="fa fa-power-off m-r-5 m-l-5" /> Logout</a>
                    </div>
                  </div>
                </div>
                {/* End User Profile*/}
              </li>
      
              {/* User Profile*/}
              <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/adminHome" aria-expanded="false"><i className="mdi mdi-view-dashboard" /><span className="hide-menu">Dashboard</span></a></li>

              <li className="sidebar-item">
                  {" "}
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="/investors"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-account-multiple" />
                    <span className="hide-menu">Investors</span>
                  </a>
                </li>
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>

      <div className="page-wrapper">
{/* ============================================================== */}
{/* Bread crumb and right sidebar toggle */}
{/* ============================================================== */}
<div className="page-breadcrumb">
  <div className="row align-items-center">
    <div className="col-5">
      <h4 className="page-title" >All Business</h4>
      <br></br>
      <button type="button" class="btn btn-light" style={{marginLeft:"20%"}}>Upload new business 🖊️ </button>

      <div className="d-flex align-items-center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/adminHome">Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page">Posts</li>
          </ol>
        </nav>
      </div>
    </div>
   
  </div>
</div>
{/* ============================================================== */}
{/* End Bread crumb and right sidebar toggle */}
{/* ============================================================== */}
{/* ============================================================== */}
{/* Container fluid  */}
{/* ============================================================== */}
<div className="container-fluid">
  {/* ============================================================== */}
  {/* Start Page Content */}
  {/* ============================================================== */}
  <div className="row">
    <center>
    <div className="col-8">
      <div className="card">
        <div className="card-body">
        <div className="example-1 card">
          <div className="wrapper" style={{backgroundImage: `url("https://cdn.phonebooky.com/blog/wp-content/uploads/2021/08/05113117/BKY-JT-MilkTea-01726.jpg")`,height:"10%" }}>
           
            <div className="data">
              <div className="content">
                <span className="author">Post by Admin</span>
                <h1 className="title"><a href="#">Milktea Product</a></h1>
                <p className="text">Descriptionnnnn</p>
                <label htmlFor="show-menu" className="menu-button"><span /></label>
              </div>
              <input type="checkbox" id="show-menu" />
              <ul className="menu-content">
                <li>
                  <a href="#" className="fa fa-bookmark-o" />
                </li>
                <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
                <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="comment-footer" style={{textAlign: 'left'}}>
                        <span className="text-muted float-end">April 14, 2021</span>
                        <span className="label label-rounded label-success">#1</span>
                      
          </div>
        
        </div>
        
      </div>
      
    </div>

  

    
    </center>
  </div>
  {/* ============================================================== */}
  {/* End PAge Content */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* Right sidebar */}
  {/* ============================================================== */}
  {/* .right-sidebar */}
  {/* ============================================================== */}
  {/* End Right sidebar */}
  {/* ============================================================== */}
</div>
{/* ============================================================== */}
{/* End Container fluid  */}
{/* ============================================================== */}
{/* ============================================================== */}
{/* footer */}
{/* ============================================================== */}
{/* <footer className="footer text-center">
          All Rights Reserved by Orgxtopaz. Designed and Developed by <a href="https://www.fiverr.com/orgxtopaz">Orgxtopaz</a>.
        </footer> */}
{/* ============================================================== */}
{/* End footer */}
{/* ============================================================== */}
</div>
 
    </div>
  </div>
   
    
  )
}

export default Posts


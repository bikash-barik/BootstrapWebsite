import React, { Component } from 'react'

export default function Header(){
 
        return (
            <>
            {/* // <!--.Navbar --> */}
            <nav class="mb-4 navbar navbar-expand-lg navbar-dark red darken-2">
            <a class="navbar-brand font-bold mob_75" href="#"><img src="images/logo.png" class="navbar_logo" /></a>
    
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText1" aria-controls="navbarText1" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText1">
    
                <div class="col-md-7">
    
    
                    <form class="form-inline full_width">
                    <input type="text" class="nav-link width_80" placeholder="Search ........."/>
                        {/* <a class="nav-link dropdown-toggle width_80" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  </a> */}
                        {/* <div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                            <a class="dropdown-item" href="#">Facebook</a>
                            <a class="dropdown-item" href="#">Instagram</a>
                        </div> */}
                        <a href="#" class="menu_search"><img src="https://img.icons8.com/material-outlined/22/ffffff/search--v1.png"/></a>
                    </form>
                </div>
    
                <div class="col-md-3">
                    <div class="social-media-number">
                        
                        <a href="/" class="fa social_media"><img src="https://img.icons8.com/material-sharp/18/c3357f/home.png"/></a>
                        <a href="/connection" class="fa social_media"><img src="https://img.icons8.com/ios-glyphs/18/c3357f/person-male.png"/><h6>6</h6></a>
                        <a href="/messenger" class="fa social_media"><img src="https://img.icons8.com/windows/18/c3357f/chat--v1.png"/><h6>2</h6></a>
                        <a href="#" class="fa social_media"><img src="https://img.icons8.com/ios-glyphs/18/c3357f/open-book--v1.png"/></a>
                        <a href="/notification" class="fa  social_media"><img src="https://img.icons8.com/ios/18/c3357f/appointment-reminders.png"/><h6>8</h6></a>
                    </div>
                </div>
    
                <div class="col-md-2">
                    <div class="nav_back_pink">
                        <div class="row">
                            <div class="col-md-2 col-sm-2 col-xs-2">
                            <a class="" href="/profile">
                                <img src="images/user.png" class="user_image user_image_top" />
                                </a>
                            </div>
                            <div class="col-md-9 col-sm-12 col-xs-3">
                                <div class="dropdown">
                                    <button class="btn btn-default dropdown-toggle side_btn1" type="button" data-toggle="dropdown">
                                        User Settings
                                        <span class="caret"></span>
                                    </button>
                                    {/* <div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                                        <a class="dropdown-item" href="/connection">Facebook</a>
                                        <a class="dropdown-item" href="#">Instagram</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </nav>
        {/* // <!--/.Navbar --> */}
    
            </>
        )
    }

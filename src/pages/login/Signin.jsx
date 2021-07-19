import React, { Component } from 'react'
import '../../style.css'
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
export default function Signin() {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };

    return (
        <div>
            <nav class="mb-4 navbar navbar-expand-lg navbar-dark red darken-2">
                <a class="navbar-brand font-bold mob_75" href="index.html"><img src="images/logo.png" class="navbar_logo" /></a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText1" aria-controls="navbarText1" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText1">
                </div>
            </nav>



            <div class="bg_manage">
                <div class="container">
                    <div class="main_bg">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="signin-first">
                                    <div class="signin_h4">
                                        <h4>Sign In</h4>
                                    </div>
                                    <div class="signup_a ">
                                        <a href="/register" class="signup_clr">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="img-rectangle"></div>
                                <div class="signin-img">
                                    <img src="images/logo_center.png" class="logo_center" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="signin-form">
                                    <h1>Sign In</h1>
                                    <form onSubmit={handleClick}>
                                        <input type="text" id="username" name="validation password" placeholder="Email / Phone No" autocomplete="off" ref={email} />

                                        <br /><span id="messages"></span>

                                        <input type="password" id="password" name="validation password" placeholder="Password" ref={password} /><br />
                                        <span id="messages2"></span>

                                        <div class="signin-form-f-p-s-p" style={{ padding: '5px 0px' }}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <a href="/forgetpassword" class="pass">Forgot Password?</a>
                                                </div>
                                                <div class="col-md-6">

                                                </div>
                                            </div>
                                        </div>
                                        <input type="submit" name="submit" value="Sign In"  disabled={isFetching}/>
                                        {isFetching ? (
                                                <CircularProgress color="white" size="20px" />
                                            ) : (
                                                ""
                                            )}
                                           
                                        {/* <button type="button">Register with Us</button> */}
                                    </form>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="text_right">
                                                <a href="/register" class="sin_up">Sign Up</a>
                                                <p class="account">If you don't have account with us.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

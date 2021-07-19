import React, { Component } from 'react'
import '../../style.css'
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
export default function SetPassword() {
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
                                        <h4>Forgot</h4>
                                    </div>
                                    <div class="signup_a ">
                                        <a href="/login" class="signup_clr">Sign In</a>
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
                                    <h1>Create new password</h1>
                                    <form onSubmit={handleClick}>
                                        <input type="password" id="password" name="validation password" placeholder="Password" ref={password} /><br />
                                        <input type="password" id="password" name="validation password" placeholder="Confirm Password" ref={password} /><br />

                                        <br /><span id="messages"></span>

                                        <span id="messages2"></span>

                                        <input type="submit" name="submit" value="Update My Password" disabled={isFetching} />
                                        {isFetching ? (
                                            <CircularProgress color="white" size="20px" />
                                        ) : (
                                            ""
                                        )}

                                    </form>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="text_right">
                                                <a href="/login" class="sin_up"><img src="https://img.icons8.com/material-rounded/15/000000/less-than.png" />Back to Sign In</a>
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

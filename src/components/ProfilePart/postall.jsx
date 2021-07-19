import React, { Component } from 'react'
import '../../style.css'

export default function ProfilePart() {

    return (
        <>

            <div class="container-fluid">
                <div class="row">
                    {/* <div class="col-md-3 col-sm-12 col-xs-12 mobile_none">


                        <div class="clr-bdr mt-o">
                            <h4 class="articles">Top Research Articles /</h4>

                            <div class="media" style={{ background: '#f4f4f4', padding: '5px' }}>
                                <div class="media-left">
                                    <img src="images/l-1.png" class="media-object" style={{ width: '60px' }} />
                                </div>
                                <div class="media-body">
                                    <h6 class="media-heading">7 frequentlyasked Questions fddhj </h6>
                                    <p class="media_p">Publised 20. 06. 2020 <br />by<b style={{ color: '#000' }}>John Dame</b></p>
                                </div>
                            </div>

                            <div class="media" style={{ background: '#f4f4f4', padding: '5px' }}>
                                <div class="media-left">
                                    <img src="images/l-2.png" class="media-object" style={{ width: '60px' }} />
                                </div>
                                <div class="media-body">
                                    <h6 class="media-heading">7 frequentlyasked Questions fddhj </h6>
                                    <p class="media_p">Publised 20. 06. 2020 <br />by<b style={{ color: '#000' }}>John Dame</b></p>
                                </div>
                            </div>

                            <div class="media" style={{ background: '#f4f4f4', padding: '5px' }}>
                                <div class="media-left">
                                    <img src="images/l-3.png" class="media-object" style={{ width: '60px' }} />
                                </div>
                                <div class="media-body">
                                    <h6 class="media-heading">7 frequentlyasked Questions fddhj </h6>
                                    <p class="media_p">Publised 20. 06. 2020 <br />by<b style={{ color: '#000' }}>John Dame</b></p>
                                </div>
                            </div>
                            <br />
                            <a href="#" class="more">Show More Articles /</a>
                        </div>
                        <br />
                        <div class="top-reasearch-left">
                            <h4 class="articles">Write A Recearch Paper &nbsp;  &nbsp;&nbsp;<i class="fa fa-pencil-square-o " aria-hidden="true"></i></h4>



                            <div>
                                <div class="tab">
                                    <button class="tablinks" onclick="openCity(event, 'Work')" id="defaultOpen"><img src="images/icons/work.png" class="work_image_article" /> &nbsp;Work</button>
                                    <button class="tablinks" onclick="openCity(event, 'Bookmark')"><img src="images/icons/bookmark.png" class="work_image_article" /> &nbsp;Bookmark</button>
                                    <button class="tablinks" onclick="openCity(event, 'Appreciations')"><img src="images/icons/3_a.png" class="work_image_article" /> &nbsp;Appreciations</button>
                                    <button class="tablinks" onclick="openCity(event, 'Insights')"><img src="images/icons/insites.png" class="work_image_article" /> &nbsp;Insights</button>
                                    <button class="tablinks" onclick="openCity(event, 'Draft')"><img src="images/icons/draft.png" class="work_image_article" /> &nbsp;Draft</button>
                                    <button class="tablinks" onclick="openCity(event, 'Updates')"><img src="images/icons/last.png" class="work_image_article" /> &nbsp;Updates</button>

                                </div>
                                <br />
                                <div id="Work" class="tabcontent">
                                    <h5 class="create"> Create   Work</h5>
                                    <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                                    <a href="work.html" class="view">View Details</a>
                                    <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                                </div>

                                <div id="Bookmark" class="tabcontent">
                                    <h5 class="create"> Create  Bookmark</h5>
                                    <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                                    <a href="bookmark.html" class="view">View Details</a>
                                    <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                                </div>

                                <div id="Appreciations" class="tabcontent">
                                    <h5 class="create"> Create  Appreciations</h5>
                                    <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                                    <a href="appreciations.html" class="view">View Details</a>
                                    <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                                </div>
                                <div id="Insights" class="tabcontent">
                                    <h5 class="create"> Create  Insights</h5>
                                    <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                                    <a href="Insights.html" class="view">View Details</a>
                                    <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                                </div>

                                <div id="Draft" class="tabcontent">
                                    <h5 class="create"> Create  Draft</h5>
                                    <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                                    <a href="Draft.html" class="view">View Details</a>
                                    <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                                </div>

                                <div id="Updates" class="tabcontent">
                                    <h5 class="create"> See  Updates</h5>
                                    <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                                    <a href="Updates.html" class="view">View Details</a>
                                    <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                                </div>

                                <br />

                            </div>

                            <h4 class="copy"> &copy; 2020. all rights reserved.</h4>

                        </div>



                    </div> */}


                    <div class="col-md-5 col-sm-12 col-xs-12">
                        {/* <br />  */}
                        <div class="article_bg">
                            <div class="left_pink_bg_article "></div>
                            <img src="images/left_mdl.png" class="left_img" />
                            <img src="images/user.png" class="left-img_circle" />
                            <h4 class="post_article">Naina Mohanty</h4>
                            <h6 class="profile_name">UI-UX Analyst </h6>
                            <p style={{}}><span class="following">111 Following</span> &nbsp;&nbsp;<span class="followers">178 followers</span></p>
                            <div class="lit_pink_article ">
                                <a href="#" class="article_p">Edit Profile Selection  &nbsp;<i class="fas fa-pencil-alt"></i></a>
                            </div>
                        </div>
                        <div class="dashboard">
                            <h3 class="dash_h3"> My Dashboard <span class="dash_span">Private to you</span></h3>

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="dash_border">
                                        <h1 class="dash_count">900</h1>
                                    </div>
                                    <p class="dash_p">Who viewed your profile</p>
                                </div>
                                <div class="col-md-4">
                                    <div class="dash_border">
                                        <h1 class="dash_count">500</h1>
                                    </div>
                                    <p class="dash_p">Search appearances</p>
                                </div>
                                <div class="col-md-4">
                                    <div class="dash_border">
                                        <h1 class="dash_count">90</h1>
                                    </div>
                                    <p class="dash_p">Post views</p>
                                </div>
                            </div>
                        </div>

                        <div class="dashboard">
                            <h3 class="dash_h3"> Activity <span class="dash_span">400 Followers</span></h3>
                            <p class="dash_manage">Manage Followers</p>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/blog_dash.png" class="media-object" style={{ width: '60px' }} />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/blog_dash2.png" class="media-object" style={{ width: '60px' }} />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/blog_dash.png" class="media-object" style={{ width: '60px' }} />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>


                        <div class="dashboard">
                            <h3 class="dash_h3"> Experience <span class="dash_span">4+ Years</span></h3>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/exp.png" class="media-object exp" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="dash_h5">UI-UX Analyst</h5>
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/exp_1.png" class="media-object exp" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="dash_h5">UI-UX Analyst</h5>
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/exp_2.png" class="media-object exp" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="dash_h5">UI-UX Analyst</h5>
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <a href="#" class="edit_clr"><i class="fa fa-plus-circle"></i></a><br />
                                    <a href="#" class="pencil_edit"><i class="fas fa-pencil-alt"></i></a>
                                </div>


                            </div>
                            <div class="row">
                                <div class="col-md-10"></div>
                                <div class="col-md-2">
                                    <a href="#" class="see_more pull-right">See More</a>
                                </div>
                            </div>
                        </div>


                        <div class="dashboard">
                            <h3 class="dash_h3"> Education</h3>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/edu_2.png" class="media-object exp" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="dash_h5">UI-UX Analyst</h5>
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/edu.png" class="media-object exp" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="dash_h5">UI-UX Analyst</h5>
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/edu_1.png" class="media-object exp" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="dash_h5">UI-UX Analyst</h5>
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <a href="#" class="edit_clr"><i class="fa fa-plus-circle"></i></a><br />
                                    <a href="#" class="pencil_edit"><i class="fas fa-pencil-alt"></i></a>
                                </div>


                            </div>
                            <div class="row">
                                <div class="col-md-10"></div>
                                <div class="col-md-2">
                                    <a href="#" class="see_more pull-right">See More</a>
                                </div>
                            </div>
                        </div>

                        <div class="dashboard">
                            <h3 class="dash_h3"> Skills</h3>
                            <div class="row">
                                <div class="col-md-10">
                                    <p class="skills"><i class="fa fa-genderless tick_mark"></i> &nbsp; Adobe Illustrator</p>
                                    <p class="skills"> <i class="fa fa-genderless tick_mark"></i> &nbsp; 2012 – 2014 </p>
                                    <p class="skills"> <i class="fa fa-genderless tick_mark"></i> &nbsp;Adobe after effect </p>
                                    <p class="skills"> <i class="fa fa-genderless tick_mark"></i> &nbsp;2012 – 2014 </p>
                                    <p class="skills"> <i class="fa fa-genderless tick_mark"></i> &nbsp; KIIT UNIVERSITY </p>
                                    <p class="skills">  <i class="fa fa-genderless tick_mark"></i> &nbsp;2012 – 2014 </p>

                                </div>

                                <div class="col-md-2">
                                    <a href="#" class="edit_clr"><i class="fa fa-plus-circle"></i></a><br />
                                    <a href="#" class="pencil_edit"><i class="fas fa-pencil-alt"></i></a>
                                </div>


                            </div>
                            <div class="row">
                                <div class="col-md-10"></div>
                                <div class="col-md-2">
                                    <a href="#" class="see_more pull-right">See More</a>
                                </div>
                            </div>
                        </div>

                        <div class="dashboard">
                            <h3 class="dash_h3"> Intrest</h3>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/intrest.png" class="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/intrest_1.png" class="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/intrest_2.png" class="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/intrest_2.png" class="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/intrest_3.png" class="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="media">
                                        <div class="media-left">
                                            <img src="images/intrest_4.png" class="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div class="media-body">
                                            <h6 class="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="row">
                                <div class="col-md-10"></div>
                                <div class="col-md-2">
                                    <a href="#" class="see_more pull-right">See More</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <div class="col-md-4 col-sm-12 col-xs-12  mobile_none">
                        <div class="scroll">
                            <div class="row">
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_1.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_2.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_3.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_4.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_5.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_6.png" class="client_1" />
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_6.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_5.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_4.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_3.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_2.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_1.png" class="client_1" />
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_3.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_4.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_5.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_6.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_1.png" class="client_1" />
                                </div>
                                <div class="col-md-2 pd-5">
                                    <img src="images/b_2.png" class="client_1" />
                                </div>

                            </div>
                        </div>
                        <br />
                        <div class="top-reasearch-right ">
                            <h4 class="articles" style={{}}>Educational Technical View</h4>
                            <div class="education">
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="images/blg_1.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_2.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_3.png" class="blg" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="images/blg_4.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_5.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_6.png" class="blg" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="images/blg_6.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_5.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_4.png" class="blg" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="images/blg_3.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_2.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_1.png" class="blg" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="images/blg_1.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_2.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_3.png" class="blg" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="images/blg_4.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_5.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_6.png" class="blg" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="images/blg_6.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_5.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_4.png" class="blg" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="images/blg_3.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_2.png" class="blg" />
                                    </div>

                                    <div class="col-md-4">
                                        <img src="images/blg_1.png" class="blg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>


                {/* <!--fixed Button--> */}
                {/* <button class="open-button" onclick="openForm()">
                    <ul>
                        <li><img src="images/user-chat.png" /></li>
                        <li style={{}}>Messaging &nbsp; <i class="fa fa-comment clr_white"></i>&nbsp;&nbsp; <i class="fa fa-ellipsis-h clr_white"></i></li>
                    </ul>
                </button>

                <div class="chat-popup" id="myForm">
                    <form action="#" class="form-container">
                        <textarea placeholder="Type message.." name="msg" required></textarea>

                        <button type="submit" class="btn">Send</button>
                        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                    </form>
                </div> */}
            </div>
        </>
    )
}


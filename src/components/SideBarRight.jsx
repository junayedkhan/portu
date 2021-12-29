import React from 'react'
import img from "../assets/images/img.png"

const SideBarRight = () => {
    return (
    <div className="side_bar_right">
        <div className="inner">
            <div className="nav">
                <div className='text'>
                    <p>preview</p>
                    <span>index</span>
                </div>
                <div className='icon'>
                    <i className="far fa-trash-alt"></i>
                    <i className="fas fa-compress-alt"></i>
                    <i className="far fa-times-circle"></i>
                </div>
            </div>
            <div className="content">
                <div className="top">
                    <button>
                        <i className="fas fa-exclamation"></i>
                        importenat
                    </button>

                    <div className="icon">
                        <i className="fas fa-exclamation-circle"></i>
                        <i className="far fa-star star"></i>
                    </div>
                </div>

                <div className="meeting">
                    <h5>
                        Weekly Meeting Schedule With <br />
                        Staleholders
                    </h5>
                    <span>Today March 30th 2021 04.35 PM</span>
                </div>
                
                <div className="public">
                    <img src={img} alt="" />
                    <div className='info'>
                        <p className='name'>Samantha William</p>
                        <span className='email'>samanthawilliam@gmail.com</span>
                    </div>
                </div>

                <div className="message">
                   <span> Hello Nella,</span>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit atque odit aut adipisci minima nemo, nulla itaque illo? Voluptas.</p>
                    <span>
                        Regards, <br />
                        Samantha
                    </span>
                </div>

                <div className="message_box">
                    <textarea name="message_box" id="message" placeholder='Write your message here...' rows="3"></textarea>
                    <div className="icon_area">
                        <div className="left">
                            <i className="fas fa-bold"></i>
                            <i className="fas fa-italic"></i>
                            <i className="fas fa-underline"></i>
                            <i className="fas fa-text-height"></i>
                        </div>
                        <div className="right">
                            <i className="fas fa-align-left"></i>
                            <i className="fas fa-align-center"></i> 
                            <i className="fas fa-align-right"></i>
                        </div>
                    </div>
                </div>

                <div className="button_area">
                    <div className="icon">
                        <i className="fas fa-paperclip"></i>
                        <i className="far fa-image"></i>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>

                    <button>
                        <i className="fas fa-paper-plane"></i>
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SideBarRight;

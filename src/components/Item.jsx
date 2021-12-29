import React from 'react'
import img from "../assets/images/img.png"

const Item = ({ currentItems }) => {
    return (
        <>
        {currentItems &&
          currentItems.map((item, index) => (
            <div className="item" key={index}>
                <input type="checkbox" name="" id="checkbox" />
                <img src={img} alt="img" />
                <div className="item_content">
                    <div className="head">
                        <div className="info">
                            <p className="name">{item.name}</p>
                            <span className='email'>issuesreport@gmail.com</span>
                        </div>
                        <div className="date">
                            <span>March 24, 2021 </span>
                        </div>
                    </div>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </div>
                <span className='star'><i className="far fa-star star"></i></span>
            </div>
          ))}
      </>
    )
}

export default Item;

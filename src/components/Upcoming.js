import React from 'react'
import yourImage from '../images/your-image.jpg'
import '../App.css';
export default function Upcoming() {
  return (
    <div className='bigContainer'>
        <div className="container">
            <div className="picture">
                <img src={yourImage} alt="error loading" className="image-container" />
            </div>
            <div className="box2">
                <h2 className='heading'>HEADING 1</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed sapiente, velit voluptatum, nisi tenetur amet temporibus earum quis id officia iste quas, explicabo eligendi dolore quos fugit odio repudiandae.</p>
            </div>
        </div>
        <div className="container">
            <div className="picture">
            <img src={yourImage} alt="error loading" className="image-container" />
            </div>
            <div className="box2">
                <h2 className='heading'>HEADING 2</h2>
                <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis fugit excepturi vel a aut voluptatum animi quos sint impedit pariatur suscipit quibusdam, harum vitae ut placeat. Quis error consequatur omnis.</p>
            </div>
        </div>
    </div>
  )
}

import React from "react";
const Rating = (props) => {
    return (
        <div className='rating'>
            <i className={`fas fa-star ${props.rating > 0 && 'orange-rating'}`}/>
            <i className={`fas fa-star ${props.rating > 1 && 'orange-rating'}`}/>
            <i className={`fas fa-star ${props.rating > 2 && 'orange-rating'}`}/>
            <i className={`fas fa-star ${props.rating > 3 && 'orange-rating'}`}/>
            <i className={`fas fa-star ${props.rating > 4 && 'orange-rating'}`}/>
        </div>
    )
}
export default Rating





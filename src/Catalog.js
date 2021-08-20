//idx-уник.ключ(убирает ошибку в консоле)
import React, {useState} from "react";
import dishes from "./dishes";
import "./style.css"
import Rating from "./Rating";


const Catalog = () => {
    const [dish, setDish] = useState(dishes)
    // const [catalog, setCatalog] = useState(['Misha', 'Sasha', 'Masha'])
    return (
        <div className='container text-center'>
            <h4 className='title'>Menu</h4>
            <h2 className='subtitle'>Food Full of treaty Love</h2>
            <p className="description">There are many things are needed to start the Fast Food Business. You need not
                only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            <div className="row ">
                {
                    dish.map(el =>
                        <div className='col-4 box'>
                            <div className="catalog-title" key={el.id}>
                                <img src={el.img} alt="" className='img'/>
                                <div className='box-info'>
                                    <div className='box-price'>
                                        <h2 className='dish-title'>{el.title}</h2>
                                        <h2> {el.price}</h2>
                                    </div>
                                    <p className='dish-desc'>{el.desc}</p>
                                    <Rating rating={el.rating}/>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
    // {
    //
    //
    //     dish.map(el => {
    //             <div className="catalog-title" key={el.id}>
    //                 <img src={el.img} alt="" width='300px'/>
    //                 <h2>{el.title}: {el.id}</h2>
    //                 <h2>prise: {el.price}</h2>
    //                 <p>{el.desc}</p>
    //                 <span>{el.rating}</span>
    //
    //             </div>
    //         }
    //     )
    //
    //
    // }


}
export default Catalog;
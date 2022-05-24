import React,{useContext,useEffect,useState} from 'react'
import { FoodContext } from '../App'
import {useNavigate} from 'react-router-dom';


function Pizza() {
    let context = useContext(FoodContext)
    let [products,setProducts]=useState([]);
    let navigate = useNavigate();
    let getData = ()=>{
        if(context.data.length>0)
            setProducts(context.data[0].subItemsData.subItems)
        else
            navigate('/')
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <div className='product-wrapper'>
            <h2>Tasty Pizzas</h2>
            {
                products.map((e,i)=>{
                    return <div className='product-item-wrapper' key={i}>
                        <div className='product-details'>
                            <h4>{e.name}</h4>
                            <div className='product-price'> &#x20B9; {e.price} </div>
                            <div className='product-description'>{e.description}</div>
                            <button className='product-btn' onClick={()=>{
                                context.cart.push(e);
                                context.setCartValue(context.cart.length)
                            }}
                            
                            >Order Now</button>
                        </div>
                        <div className='product-image'>
                            <img src={e.image} alt={e.name}></img>
                        </div>

                    </div>
                })
            }
        </div>
    )
}

export default Pizza

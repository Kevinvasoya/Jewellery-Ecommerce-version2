import react from 'react'
import Card from '../OurProduct/Card'
import './Cart.css'

const Cart =()=>{
    return(
        <>
        <header className='check-out'>Checkout</header>
            <div className='tw-Cart-Division container'>
                <div className='Product-Division col-lg-9 col-md-8 col-sm-12 col-xs-12'>
                    <Card/>
                </div>
                <div className='Total-Bill col-lg-3 col-md-4 col-sm-12 col-xs-12'>
                    
                </div>
            </div>
        </>
    )

}
export default Cart
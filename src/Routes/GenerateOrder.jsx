import '../styles/mesero.css';
import '../styles/orders.css'
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import LogoMesero from '../assets/logo-mesero.png'
import Buttons from '../Components/Button';
import { Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CircularJSON from 'circular-json';
/* import { useState } from 'react' */

export default function Order() {
    const [saveOrders, setSaveOrders] = useState([]);

    /* useEffect(() => {
        const savedOrders = localStorage.getItem('saveOrders');
        const parsedOrders = savedOrders ? CircularJSON.parse(savedOrders) : [];
        setSaveOrders(parsedOrders);
        console.log(saveOrders);
    }, []); */
    useEffect(() => {
        try {
            const savedOrders = localStorage.getItem('saveOrders');
            const parsedOrders = savedOrders ? CircularJSON.parse(savedOrders) : [saveOrders];
            setSaveOrders(parsedOrders);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }, []);

    const handleReturnClick = () => {
        return <Navigate to="/mesero" />;
    };

    return <>
        <Top user="Mesero Chayane" logoUser={LogoMesero} />

        <div className='gray-container'>
            <input type="text" class='input-order' placeholder='Nombre del cliente' autoFocus />

            <div className='container'>
                <div className='orders-container'>
                    {/* <p className='p-client-food'>Sandwich de jamón y queso $10.</p> */}
                    <h2>Pedido Generado:</h2>
                    {saveOrders.map((order, index) => (
                        <div key={index}>
                            {order.text && <p>Nombre: {order.text}</p>}
                            {order.price && <p>Precio: {order.price}</p>}
                            {order.amount && <p>Cantidad: {order.amount}</p>}
                        </div>
                    ))}

                </div>

                <div className='note-total-container'>
                    <div className='notes-container'>
                        Notas: Cafe sin azúcar.

                    </div>
                    <div className='total-container'>
                        <p id='p-total'>total $15</p>
                        <Buttons
                            id={'btn-confirmOrder'}
                            text={'Confirmar'}
                            onClick={() => { console.log('orden confirmada') }}
                        />
                    </div>

                </div>

            </div>

        </div>

        <Footer otherClass={'p-return'}
            text={
                <>
                    <Link to={'/mesero'}>
                        <Buttons
                            id={'btn-return'}
                            text={"⏎"}
                            onClick={handleReturnClick}
                            /* active={selectedPedido === 'pedidos'} */ />
                    </Link>

                </>
            }
        />
    </>;
}

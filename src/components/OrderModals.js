import M from 'materialize-css';
import { useEffect } from 'react';

const OrderModals = ({handleChange, handleClick, orderId}) => {
    useEffect(() => {
        M.Modal.init(document.querySelectorAll('.modal'));
    } , []);

    return (
        <>
            <div id="prepareOrder" className="modal">
                <div className="modal-content">
                    <h4>Complete form</h4>
                    <div className="input-field col s6">
                        <input id="name" name='name' type="text" className="validate" onChange={handleChange}/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="phone" name='phone' type="text" className="validate" onChange={handleChange}/>
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" name='email' type="email" className="validate" onChange={handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={handleClick} href="#finishOrder" className="modal-close waves-effect waves-light btn-small modal-trigger">Confirm order</button>
                </div>
            </div>
            <div id="finishOrder" className="modal">
                <div className="modal-content">
                    <h4>Thank you for buying in Mad Geek!!</h4>
                    <p>This is your order id: {orderId}</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-close waves-effect waves-light btn-small">Close</button>
                </div>
            </div>
        </>
    );
}

export default OrderModals;
import React, { createContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Card = (props) => {
    const [show, setShow] = useState(false);
    const [startdate, setStartdate] = useState();
    const [inc, setInc] = useState(0);

    const chosendate = useRef("");
    const chosentime = useRef("");
    const num = useRef(0);

    const incdec1 = () => {
        if (inc == 0)
            setInc(0);
        else
            setInc(inc - 1);
    }
    const incdec2 = () => {
        setInc(inc + 1);
    }
    const handleClose = () => {
        setShow(false);
        setInc(0);
        console.log("Movie Booked")
        console.log(chosendate.current.value);
        console.log(chosentime.current.value);
        console.log(inc);
    };
    const handleShow = () => {
        console.log("clicked");
        setShow(true)
    };

    const changedate = (e) => {
        setStartdate(e.target.value)
    }

    const disablebefore = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yy = today.getFullYear();
        return yy + "-" + mm + "-" + dd;
    }

    return (
        <>
            <div onClick={handleShow} className='mx-3 px-3 py-5'>
                <div className="card" style={{ width: "18rem" }}>
                    <img height={350} width={300} className="card-img-top" src={props.poster} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Book Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p> Select your preferred Date and Time</p>
                        <h3> Date</h3>
                        <input min={disablebefore()} ref={chosendate} type="date" onChange={changedate} />
                        <h3> Time</h3>
                        <select ref={chosentime} name="time" id="time">
                            <option value="">Choose preferred Time</option>
                            <option value="9:00AM">9:00AM</option>
                            <option value="12:00PM">12:00PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                        </select>
                        <h3 className='py-3'> Number of Tickets</h3>
                        <div className='row ' style={{ width: "60%" }}>
                            <div className='col'>
                                <button className=' btn rounded-2 btn-danger mx-2' onClick={incdec1}> - </button>
                            </div>
                            <div className='col'>
                                <p style={{ width: "20%" }} ref={num}>{inc}</p>
                            </div>
                            <div className='col'>
                                <button className=' btn rounded-2 btn-success mx-2' onClick={incdec2}>+</button>
                            </div>
                        </div>
                        <br />
                        <div >
                            <h4 className='text text-center'>Total Price inc. 18% GST : {(1.18 * parseFloat(inc) * 200)}</h4>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Book Now
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}

export default Card;

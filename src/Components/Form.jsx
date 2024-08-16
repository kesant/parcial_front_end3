import React, { useState } from "react";
import Card from "./card";
import '../Styles/Form.css'
 
const Form = () => {

    const [customer, setCustomer] = useState({
        libro: "",
        address: "",
      });
      
    const [showCard, setShowCard] = useState(false);
    const [error, setError] = useState(false);
    
    const handleChangelibro = (e) => {
        setCustomer({ ...customer, libro: e.target.value });
      };
    
    const handleChangeaddress = (e) => {
        setCustomer({ ...customer, address: e.target.value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
          customer.libro.trim().length >= 3 &&
          !customer.libro.startsWith(" ") &&
          customer.address.length >= 6
        ) {
          setShowCard(true);
          setError(false);
        } else {
          setError(true);
          setShowCard(false);
        }
      };
    
    const reset = () => {
        setCustomer({
          libro: "",
          address: "",
        });
        setShowCard(false);
        setError(false);
      };
  
    return (
    <>
     <form onSubmit={handleSubmit} className="form-container">
        <label>Ingresa el Nombre de un libro: </label>
        <input type="text"
        value={customer.libro}
        onChange={handleChangelibro}
        placeholder="Nombre de un libro"
        />
        <label >Ingresa tu Correo : </label>
        <input type="email"
        value={customer.address}
        onChange={handleChangeaddress}
        placeholder="Correo" 
        />
        <button type="submit">Enviar Libro</button>
    </form>
    {showCard ? (<Card customer={customer}/>) : null}
    {error && (
        <h4 style={{ color: "red" }}>
          Error: Por favor, chequea que la información sea correcta
        </h4>
      )}
  </>
  );
};

export default Form
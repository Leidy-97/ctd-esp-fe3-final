import React,{ useState } from "react";
const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name,setName]=useState("");
  function onSubmit(event){
    console.log(event)
  alert("Gracias " + name + ", te contactaremos cuando antes vía mail")
  event.preventDefault();
}
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">
          <input type="text" maxlength="5" required onChange={(e) => setName(e.target.value)}/> Nombre
          </label>
          <label htmlFor="">
          <input type="email" required /> Email
          </label>
          <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;

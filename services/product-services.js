//GET

const listProducts = () => {
  return fetch("http://localhost:3000/producto")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));
};

// POST

const insertNewProduct = (nombre, categoria,description, precio, imageURL) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST", // definimos que metodo va a usar, si no se pone esto fetch usa get por defecto
    headers: { // definimos que tipo de informacion se va a enviar en este caso es un objeto json 
      "Content-Type": "application/json",  
    },
    body: JSON.stringify({ // se pone toda la informacion que se va a enviar IMPORTANTE se debe convertir el objeto a texto por que http trabaja solo con dicho tipo de dato
      id:uuid.v4(),nombre, precio, imageURL,categoria,description
    })
  })
  
};

/* objeto para exportar todoas las funciones */
export const productServices = {
  listProducts,
  insertNewProduct
};
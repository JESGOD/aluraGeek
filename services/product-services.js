//GET

const listProducts = () => {
  return fetch("http://localhost:3000/producto")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));
};

/* objeto para exportar todoas las funciones */
export const productServices = {
  listProducts
};


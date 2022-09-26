import React, { useState } from 'react';
import Papa from 'papaparse';

// Archivos permitidos
const allowedExtensions = ['csv'];

function UploadFile() {

  // Este estado inicializa y guarda los datos analizados
  const [data, setData] = useState([]);

  // Utilizamos un estado para manejar el error si algún archivo se intenta subir y no es el correcto
  const [error, setError] = useState("");

  // Almacenamos el archivo subido
  const [file, setFile] = useState("");

  // Cuando se accione el change del input del archivo.
  const handleFileChange = (e) => {
    setError("");
     
    // Revisamos si se ha cargado el archivo
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
        
      // Revisamos el archivo y su extensión, si está permitido dentro de las
      // extensiones permitidas, sino muestra el error.
      const fileExtension = inputFile?.type.split("/")[1];

      if (!allowedExtensions.includes(fileExtension)) {
        setError("Por favor, cargue un archivo CSV.");
        return;
      }

      // Si el tipo de archivo es el correcto entonces sigue el proceso.
      setFile(inputFile);
    }
  };

  const handleParse = () => {
         
    // Si el usuario quiere mandar el archivo sin antes haber cargado uno, entonces muestra el error.
    if (!file) return setError("Ingrese un archivo válido.");

    // Inicializamos un lector de archivo.
    const reader = new FileReader();
     
    // Evento oyente para cuando el archivo se carga, se analiza y se configuran los datos.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      // console.log(csv);
      const parsedData = csv?.data;
      const headersCSV = Object.keys(parsedData[0]);
      // console.log(parsedData);
      setData(headersCSV);
    };
    reader.readAsText(file);
  };

  return (
    <div className="container">
      <label htmlFor="csvInput" style={{ display: "block" }}>Enter CSV File</label>
        <input
            onChange={handleFileChange}
            id="csvInput"
            name="file"
            type="File"
        />
        <div>
            <button onClick={handleParse}>Parse</button>
        </div>
        <div style={{ marginTop: "3rem" }}>
          {
            error ? error : data.map( ( col,idx ) => <div key={idx}>{col}</div> )
          }
        </div>
    </div>
  );
}

export default UploadFile;

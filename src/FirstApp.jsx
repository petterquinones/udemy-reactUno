import React from "react";
import PropTypes from "prop-types";

const message = "Ejemplo variable";

// const mifuncion = (a, b) => {
//   return a + b;
// };

export const FirstApp = ({title, subtitle, name}) => {


  return (
    <>
      <h1>{title}</h1>
      <h2>{name}</h2>
      <h2>{subtitle}</h2>
      <h3>Aprendiz de desarrollo de software.</h3>
      {/* <p> {mifuncion(9, 1)} </p> */}
    </>
  );
};

FirstApp.propTypes = {
  title : PropTypes.string.isRequired,
  subtitle : PropTypes.number,
}

FirstApp.defaultProps = {
  title : "No hay titulo asignado",
  subtitle: "No hay subtitulo",
  name: "Pedro Quiñones"
}
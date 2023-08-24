import React from "react";

const Mapfunc = () => {
  //   let cars = ["a", "b", "c", "d"];
  let carObject = {
    name: "testobject",
    price: 5555000,
    brand: "testabc",
  };

  //   let carProperty = [
  //     {
  //       name: "test",
  //       price: 100000,
  //       brand: "abc",
  //     },
  //     {
  //       name: "test1",
  //       price: 200000,
  //       brand: "abdc",
  //     },
  //   ];
  return (
    <div>
      <h1>Home</h1>
      {/* array */}
      {/* {cars.map((car) => (
        <li>{car}</li> */}

      {/* array of object */}
      {/* {carProperty.map((c) => (
        <ul>
          <li>{c.name}</li>
          <li>{c.price}</li>
        </ul>
      ))} */}

      {/* object */}

      {Object.keys(carObject).map((key) => (
        <div>
          <div>
            {key}:={carObject[key]}
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Mapfunc;

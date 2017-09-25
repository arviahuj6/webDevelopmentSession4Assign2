/// <reference path="interface.ts"/>
// defining namespace
namespace VechileNameSpace {
  export function carDetail(car: Car) {
    console.log(` The car details are : Model ${car.model},Engine ${car.engine} and the horespower is ${car.horsepower}`);
  };
}


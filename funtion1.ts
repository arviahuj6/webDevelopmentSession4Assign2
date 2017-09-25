/// <reference path="interface.ts"/>
// defining namespace VehicleNameSpace
namespace VechileNameSpace {
  export function carInetrnalDetail(carInternal: CarInternal) {
    console.log(` The car is having ${carInternal.seats} and it is ${carInternal.gear} `);
  };
}

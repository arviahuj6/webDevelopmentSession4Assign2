/// <reference path="interface.ts"/>
/// <reference path="funtion.ts"/>
/// <reference path="funtion1.ts"/>

let myCar: VechileNameSpace.Car = { model: "Wagon R", engine: "K10B", horsepower: 1000 }
VechileNameSpace.carDetail(myCar);

let carInternalD : VechileNameSpace.CarInternal = { seats : 2 ,gear : "automatic"}
VechileNameSpace.carInetrnalDetail(carInternalD);

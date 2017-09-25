// creating namespace VehicleNameSpace
namespace VechileNameSpace {
    export interface Car {
        model: string;
        engine: string;
        horsepower: number;
    }
    // exporting interface CarInternal
    export interface CarInternal {
        seats: number;
        gear: string;
    }
}
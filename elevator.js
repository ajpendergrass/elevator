var noFloors = 10;
var floorSelected = Math.floor(Math.random() * 10);
var ground = 1;
var noElevators = 3;
var maxTrips = 100;

var Elevator = function (elevatorNo, active, direction, openDoors, currentFloor, occupied, tripCount, floorsPassed) {
    this.elevatorNo = elevatorNo;
    this.active = active;
    this.direction = direction;
    this.openDoors = 0;
    this.currentFloor = currentFloor;
    this.occupied = occupied;
    this.tripCount = tripCount;
    this.floorsPassed = floorsPassed;
    this.elevatorMovt = function () {
        while (this.active) {
            if (this.openDoors === 0 && this.direction === 0 && this.currentFloor < noFloors){
                this.currentFloor = this.currentFloor + 1;
                this.floorsPassed = this.floorsPassed + 1;
            } 
            else {
                this.currentFloor = this.currentFloor -1;
                this.floorsPassed = this.floorsPassed + 1;
            }
        }
    }
}


var elevator1 = new Elevator ('Elevator1', true, 0, 0, 1, false, 0, 0);
var elevator2 = new Elevator ('Elevator2', true, 0, 0, 1, false, 0, 0); 
var elevator3 = new Elevator ('Elevator', true, 0, 0, 1, false, 0, 0);

elevator1.elevatorMovt();

console.log(floorSelected);
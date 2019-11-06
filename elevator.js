
var noFloors = 34;

var Elevator = function (elevatorNo, active, direction, currentFloor, occupied, tripCount, floorsPassed) {
    this.elevatorNo = elevatorNo;
    this.active = active;
    this.direction = direction;
    this.currentFloor = currentFloor;
    this.occupied = occupied;
    this.tripCount = tripCount;
    this.floorsPassed = floorsPassed;
    this.elevatorMovt = function () {
        while (this.direction === 0 && this.currentFloor <= 34) {
            this.currentFloor = this.currentFloor + 1;
            return this.currentFloor;
        }
    }
}

var ground = 1;
var noElevators = 3;
var maxTrips = 100;
var elevator1 = new Elevator ('Elevator1', true, 0, 1, false, 0, 0);
var elevator2 = new Elevator ('Elevator2', true, 0, 1, false, 0, 0); 
var elevator3 = new Elevator ('Elevator', true, 0, 1, false, 0, 0);


elevator1.elevatorMovt();
console.log(elevator1);
console.log(noFloors);
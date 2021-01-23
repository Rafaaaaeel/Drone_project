class ComandParser {
    constructor(drone){
        this.parseCommand = function parseCommand(line){

            switch(line){
                case "takeoff":
                    drone.onTakeoff() 
                    break
                case "land":
                    drone.onLand() 
                    break
                case "battery":
                    drone.onBacttery() 
                    break
                case "flip":
                    drone.onFlip() 
                    break
            }
            switch(line.startsWith()){
                case "forward":
                    const [, dist] = line.split(" ")
                    drone.onForward(dist)
                    break
                case "back":
                    const [, dist] = line.split(" ")
                    drone.onBack(dist)
                    break
                case "right":
                    const [, dist] = line.split(" ")
                    drone.onRight(dist)
                    break
                case "left":
                    const [, dist] = line.split(" ")
                    drone.onLeft(dist)
                    break
                case "cw":
                    const [, dist] = line.split(" ")
                    drone.onCw(dist)
                    break
                case "ccw":
                    const [, dist] = line.split(" ")
                    drone.onCcw(dist)
                    break
            }

        }
    }
}

module.exports = ComandParser
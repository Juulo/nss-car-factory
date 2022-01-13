// produce car chassis
const createChassis = () => {
    const chassisObject = {}
    return chassisObject
}
// add 4 wheels to chassis
const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}
// add an engine to chassis
const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}
// add a steering wheel to chassis
const addSteeringWheel = (chassisObject) => {
    chassisObject.steering_wheel = "Tilting"
    return chassisObject
}
// add a body to chassis
const addBody = (chassisObject) => {
    chassisObject.body = "Fever"
    return chassisObject
}
// add a drive to train to chassis
const addDriveTrain = (chassisObject) => {
    chassisObject.drive_train = "Two wheel drive"
    return chassisObject
}

const chassis = createChassis()
const wheels = addWheels(chassis)
const engine = addEngine(chassis)
const steering = addSteeringWheel(chassis)
const body = addBody(chassis)
const driveTrain = addDriveTrain(chassis)

for (part in newChassisObject) {
    console.log(chassis)
    console.log(wheels)
    console.log(engine)
    console.log(steering)
    console.log(body)
    console.log(driveTrain)
}
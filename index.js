class Doctor {
    constructor(name, availability) {
        this.name = name;
        this.availability = availability; 
    }
}
class Appointment {
    constructor(doctor, patient, time) {
        this.doctor = doctor;
        this.patient = patient;
        this.time = time;
    }
}
class Patient {
    constructor(name, preferredTime) {
        this.name = name;
        this.preferredTime = preferredTime; 
    }
}

const doctorLeon = new Doctor("Dr.Leon","wednesday to Saturday");
const patientCaren = new Patient("Caren Kosgey","12:00p.m");
const appointment = new Appointment(doctorLeon,patientCaren,"12:00p.m")

console.log(`Appointment with ${doctorLeon.name} for ${patientCaren.name} at ${appointment.time}`);
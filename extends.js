class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }
};


class Instructor extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web Team'
    constructor(name, location) {
        super(name, location)
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for ${module}`)
    }
};


class Developer extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web Team'
    tech;
    constructor(name, location, tech) {
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`please develop the ${feature}`)
    }
    release(version) {
        console.log(`please create quiz for ${version}`)
    }
};


class JobPlacement extends TeamMember {
    designation = 'job placement commandos'
    team = 'Job placement Team'
    region;
    constructor(name, location,region) {
        super(name, location)
        this.region = region;
    }
    provideResume(feature) {
        console.log(`please develop the ${feature}`)
    }
    prepareStudent(version) {
        console.log(`please create quiz for ${version}`)
    }
};

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia)
alia.provideFeedback();

const masum = new JobPlacement('masum', 'kolkata', 'India');
console.log(masum)
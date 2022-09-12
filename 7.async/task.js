class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id = null) {
        if (id === null) {
            throw new Error("параметр id не передан");
        }
        if (this.alarmCollection.some(item => item.id === id)) {
            console.error("такой id существует");            
        } else {
            this.alarmCollection.push({id, time, callback});
        }
    }

    removeClock (id) {
        let ind = this.alarmCollection.findIndex( item => item.id === id);
        if (ind === -1) {
            return false;
        }
        this.alarmCollection.splice(ind, 1);
        return true;
    }

    getCurrentFormattedTime() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return `${hours}:${minutes}`;
    }

    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback();
        }
    }

    start (){
        if (this.timerId === null) {
            this.timerId = setInterval (() => {
                this.alarmCollection.forEach(elem => this.checkClock(elem));
            }, 500);  
        }
    }

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms () {
        this.alarmCollection.forEach(elem => console.log(`${elem.id}-${elem.time}`))
    }

    clearAlarms (){
        this.alarmCollection.splice(0, this.alarmCollection.length); 
    }
}

function testCase() {
    let alarm = new AlarmClock;
    let nowDate = new Date();
    let hours = nowDate.getHours();
    let minutes = nowDate.getMinutes();

    alarm.addClock (`${hours}:${minutes}`, () => console.log("новый звонок добавлен"), "№1");
    alarm.addClock (`${hours}:${minutes+1}`, () => console.log("новый звонок добавлен"), "№2");
    alarm.removeClock("№2");
    alarm.addClock (`${hours}:${minutes+2}`, () => console.log("новый звонок добавлен"), "№3");
    alarm.stop();
    alarm.printAlarms();
    alarm.clearAlarms();
    alarm.printAlarms();
    alarm.start();
}
testCase();




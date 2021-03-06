import store from "../store/store";

 function pubSub() {
    const subscribers = {};

    console.log(subscribers);

    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) {
            return;
        }
        subscribers[eventName].forEach((callback) => {
            callback(data);
        });
    }

    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = [];
        }
        subscribers[eventName].push(callback);
    }



    return {
        publish,
        subscribe,
    };
}

export default pubSub;


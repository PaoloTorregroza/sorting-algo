import State from "./State";

class Step {

    value: number
    state: State

    constructor(el: number, state: State) {
        this.value = el;
        this.state = state;
    }

}

export default Step
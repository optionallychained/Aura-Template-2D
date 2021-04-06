import { Component } from 'aura';

export class Health extends Component.Component {

    constructor(public health: number) {
        super('Health');
    }
}

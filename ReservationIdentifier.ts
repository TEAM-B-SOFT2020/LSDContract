import IReservationIdentifier from "./interface/IReservationIdentifier";


export default class ReservationIdentifier implements IReservationIdentifier {
    private _id: string

    get id() {
        return this._id
    }
    
    set id(id: string) {
        this._id = id
    }
}
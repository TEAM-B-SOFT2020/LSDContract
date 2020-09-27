import { Moment } from "moment-timezone";
import ICarrierDetail from "./DTO/ICarrierDetail";
import IAirportIdentifier from "./IAirportIdentifier";
import IFlightIdentifier from "./IFlightIdentifier";

export default interface IFlight extends IFlightIdentifier {
    carrier: ICarrierDetail
    
    departureDate: Moment
    arrivalDate: Moment

    departureAirport: IAirportIdentifier
    arrivalAirport: IAirportIdentifier
}
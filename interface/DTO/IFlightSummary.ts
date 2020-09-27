import IFlightIdentifier from "../IFlightIdentifier";
import { Moment } from "moment-timezone"
import ICarrierDetail from "./ICarrierDetail";
import IFlight from "../IFlight";

export default interface IFlightSummary extends IFlight {
    availableSeats: number
    seatPrice: number
}
import { Moment } from "moment-timezone";
import ICarrierDetail from "./DTO/ICarrierDetail";
import IAirportDetail from "./DTO/IAirportDetail";
import IFlightSummary from "./DTO/IFlightSummary";
import IReservationIdentifier from "./IReservationIdentifier";
import IPassenger from "./IPassenger";
import IBookingDetail from "./DTO/IBookingDetail";
import IReservationSummary from "./DTO/IReservationSummary";
import IBookingIdentifier from "./IBookingIdentifier";


export default interface IContract {

    getCarrierInformation(iata: string): ICarrierDetail | never
    
    getAirportInformation(iata: string): IAirportDetail | never

    getFlightsAvailable(departure: IAirportDetail, arrival: IAirportDetail, depart: Moment): IFlightSummary[] | never

    reserveFlight(flight: IFlightSummary, week: number, amountSeats: number): IReservationSummary | never

    bookFlight(reservedIds: IReservationIdentifier[], passengers: IPassenger[], creditCardNumber:number, frequentFlyerNumber: number): IBookingDetail | never

    getBooking(id: IBookingIdentifier): IBookingDetail | never

    cancelBooking(id: IBookingIdentifier): void | never 

}

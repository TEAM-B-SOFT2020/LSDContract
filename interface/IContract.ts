import { Moment } from "moment-timezone";
import ICarrierDetail from "./DTO/ICarrierDetail";
import IAirportDetail from "./DTO/IAirportDetail";
import IFlightSummary from "./DTO/IFlightSummary";
import IReservationIdentifier from "./IReservationIdentifier";
import IPassenger from "./IPassenger";
import IBookingDetail from "./DTO/IBookingDetail";
import IReservationSummary from "./DTO/IReservationSummary";
import IBookingIdentifier from "./IBookingIdentifier";
import NotFoundError from "../error/NotFoundError";
import InvalidInputError from "../error/InvalidInputError";
import IFlightIdentifier from "./IFlightIdentifier";
import IReservationDetail from "./DTO/IReservationDetail";
import InconsistentLengthError from "../error/InconsistentLengthError";


export default interface IContract {

    getCarrierInformation(iata: string): ICarrierDetail | NotFoundError | InvalidInputError

    getAirportInformation(iata: string): IAirportDetail | NotFoundError | InvalidInputError

    getFlightsAvailable(departure: IAirportDetail, arrival: IAirportDetail, depart: Moment): IFlightSummary[] | NotFoundError | InvalidInputError

    reserveFlight(id: IFlightIdentifier, amountSeats: number): IReservationSummary | NotFoundError | InvalidInputError

    bookFlight(reservedIds: IReservationDetail[], creditCardNumber:number, frequentFlyerNumber: number): IBookingDetail | InconsistentLengthError | NotFoundError | InvalidInputError

    getBooking(id: IBookingIdentifier): IBookingDetail | NotFoundError | InvalidInputError

    cancelBooking(id: IBookingIdentifier): void | NotFoundError | InvalidInputError

}

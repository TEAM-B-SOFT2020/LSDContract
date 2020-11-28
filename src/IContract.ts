import ICarrierDetail from '../src/DTO/ICarrierDetail';
import IAirportDetail from '../src/DTO/IAirportDetail';
import IFlightSummary from '../src/DTO/IFlightSummary';
import IBookingDetail from '../src/DTO/IBookingDetail';
import IReservationSummary from '../src/DTO/IReservationSummary';
import IBookingIdentifier from './IBookingIdentifier';
import IFlightIdentifier from './IFlightIdentifier';
import IReservationDetail from '../src/DTO/IReservationDetail';
import IAirportIdentifier from './IAirportIdentifier';

import NotFoundError from './ETO/NotFoundError';
import InvalidInputError from './ETO/InvalidInputError';
import InconsistentLengthError from './ETO/InconsistentLengthError';
import IPassengerIdentifier from './IPassengerIdentifier';

/**
 * The contract for integration between the backend and frontent
 * @author TEAM-B-SOFT-2020
 * @copyright TEAM-B-SOFT-2020
 */
export default interface IContract {
	/**
	 * A getter for Carrier information
	 *
	 * @param iata The Carrier IATA as two capital letters i.e. "SA"
	 * @returns Carrier detail with name and IATA
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getCarrierInformation(iata: string): Promise<ICarrierDetail>;

	/**
	 * A getter for Airport information
	 * @param iata The airport IATA as three capital letters i.e. "CPH"
	 * @returns Airport detail with information about its timezone and IATA
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getAirportInformation(iata: string): Promise<IAirportDetail>;

	/**
	 * This method returns the flights available between two given airports on a given day.
	 *
	 * @param departure The Airport identifier for departure
	 * @param arrival The Airport identifier for arrival
	 * @param depart A moment-timezone object of the time of departure. Only the date matters here.
	 * @returns A list with the extended information about the flights available on the defined route on the specific date.
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getFlightsAvailable(departure: IAirportIdentifier, arrival: IAirportIdentifier, depart: number): Promise<IFlightSummary[]>;

	/**
	 * This method makes a flight reservation.
	 *
	 * @param id A flight identifier for the desired reservation
	 * @param amountSeats The number of seats of the desired reservation
	 * @returns An identifier for the reservation with price included
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	reserveFlight(id: IFlightIdentifier, amountSeats: number): Promise<IReservationSummary>;

	/**
	 * This method books a trip of already reserved flights.
	 *
	 * @param reservationDetails A list of reservation details with reservation ids and passenger lists.
	 * Each passenger list should have the length of the perviously defined "amountSeats" of the reservation.
	 * @param creditCardNumber The creditcard number of the booking.
	 * @param frequentFlyerNumber The frequent flyer number of the booker
	 * @returns A booking detail with the price and list of flights
	 * @throws [[InconsistentLengthError]] | [[NotFoundError]] | [[InvalidInputError]]
	 */
	createBooking(reservationDetails: IReservationDetail[], creditCardNumber: number, frequentFlyerNumber?: string): Promise<IBookingDetail>;

	/**
	 * A getter for bookings on booking identifier
	 *
	 * @param id The booking identifier containing the booking id
	 * @returns A booking detail with the price and list of flights
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getBookingOnBookingId(id: IBookingIdentifier): Promise<IBookingDetail>;

	/**
	 * A getter for bookings on passenger identifier
	 *
	 * @param id The passenger identifier containing the PNR of the passenger
	 * @returns A booking detail with the price and list of flights
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getBooking(passenger: IPassengerIdentifier): Promise<IBookingDetail>;

	/**
	 * This method cancels a booking
	 *
	 * @param id The passenger identifier containing the PNR of the passenger
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	cancelBooking(passenger: IPassengerIdentifier): Promise<void>;
}

import IFlight from '../IFlight';

export default interface IFlightSummary extends IFlight {
	availableSeats: number;
	seatPrice: number;
}

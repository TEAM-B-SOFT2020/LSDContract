import ICarrierDetail from '../src/DTO/ICarrierDetail';
import IAirportIdentifier from './IAirportIdentifier';
import IFlightIdentifier from './IFlightIdentifier';

export default interface IFlight extends IFlightIdentifier {
	carrier: ICarrierDetail;

	departureDate: number;
	arrivalDate: number;

	departureAirport: IAirportIdentifier;
	arrivalAirport: IAirportIdentifier;
}

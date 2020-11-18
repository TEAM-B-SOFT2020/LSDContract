import IFlight from '../IFlight';
import IFlightPassenger from './IFlightPassenger';

export default interface IFlightBookingDetail extends IFlight {
	passengers: IFlightPassenger[];
}

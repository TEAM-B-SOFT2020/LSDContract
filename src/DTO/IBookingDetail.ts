import IFlightBookingDetail from './IFlightBookingDetail';

import IBookingIdentifier from '../IBookingIdentifier';

export default interface IBookingDetail extends IBookingIdentifier {
	frequentFlyerId: string;
	creditCardNumber: number;
	price: number;
	flightBookings: IFlightBookingDetail[];
}

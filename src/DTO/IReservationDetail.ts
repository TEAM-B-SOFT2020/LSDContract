import IPassenger from '../IPassenger';
import IReservationIdentifier from '../IReservationIdentifier';

export default interface IReservationDetail extends IReservationIdentifier {
	passengers: IPassenger[];
}

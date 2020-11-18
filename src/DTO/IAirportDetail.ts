import IAirportIdentifier from '../IAirportIdentifier';

export default interface IAirportDetail extends IAirportIdentifier {
	name: string;
	timeZone: string;
}

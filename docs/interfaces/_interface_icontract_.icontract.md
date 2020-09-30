**contract**

> [Globals](../README.md) / ["interface/IContract"](../modules/_interface_icontract_.md) / IContract

# Interface: IContract

The contract for integration between the backend and frontent

**`author`** TEAM-B-SOFT-2020

**`copyright`** TEAM-B-SOFT-2020

## Hierarchy

* **IContract**

## Index

### Methods

* [cancelBooking](_interface_icontract_.icontract.md#cancelbooking)
* [createBooking](_interface_icontract_.icontract.md#createbooking)
* [getAirportInformation](_interface_icontract_.icontract.md#getairportinformation)
* [getBooking](_interface_icontract_.icontract.md#getbooking)
* [getCarrierInformation](_interface_icontract_.icontract.md#getcarrierinformation)
* [getFlightsAvailable](_interface_icontract_.icontract.md#getflightsavailable)
* [reserveFlight](_interface_icontract_.icontract.md#reserveflight)

## Methods

### cancelBooking

▸ **cancelBooking**(`id`: [IBookingIdentifier](_interface_ibookingidentifier_.ibookingidentifier.md)): void \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

*Defined in [interface/IContract.ts:90](https://github.com/TEAM-B-SOFT2020/LSDContract/blob/cf22cbf/interface/IContract.ts#L90)*

This method cancels a booking

**`throws`** [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) | [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | [IBookingIdentifier](_interface_ibookingidentifier_.ibookingidentifier.md) | The booking identifier |

**Returns:** void \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

___

### createBooking

▸ **createBooking**(`reservationDetails`: [IReservationDetail](_interface_dto_ireservationdetail_.ireservationdetail.md)[], `creditCardNumber`: number, `frequentFlyerNumber?`: number): [IBookingDetail](_interface_dto_ibookingdetail_.ibookingdetail.md) \| [InconsistentLengthError](../classes/_error_inconsistentlengtherror_.inconsistentlengtherror.md) \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

*Defined in [interface/IContract.ts:73](https://github.com/TEAM-B-SOFT2020/LSDContract/blob/cf22cbf/interface/IContract.ts#L73)*

This method books a trip of already reserved flights.

**`throws`** [InconsistentLengthError](../classes/_error_inconsistentlengtherror_.inconsistentlengtherror.md) | [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) | [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reservationDetails` | [IReservationDetail](_interface_dto_ireservationdetail_.ireservationdetail.md)[] | A list of reservation details with reservation ids and passenger lists. Each passenger list should have the length of the perviously defined "amountSeats" of the reservation. |
`creditCardNumber` | number | The creditcard number of the booking. |
`frequentFlyerNumber?` | number | The frequent flyer number of the booker |

**Returns:** [IBookingDetail](_interface_dto_ibookingdetail_.ibookingdetail.md) \| [InconsistentLengthError](../classes/_error_inconsistentlengtherror_.inconsistentlengtherror.md) \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

A booking detail with the price and list of flights

___

### getAirportInformation

▸ **getAirportInformation**(`iata`: string): [IAirportDetail](_interface_dto_iairportdetail_.iairportdetail.md) \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

*Defined in [interface/IContract.ts:39](https://github.com/TEAM-B-SOFT2020/LSDContract/blob/cf22cbf/interface/IContract.ts#L39)*

A getter for Airport information

**`throws`** [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) | [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iata` | string | The airport IATA as three capital letters i.e. "CPH" |

**Returns:** [IAirportDetail](_interface_dto_iairportdetail_.iairportdetail.md) \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

Airport detail with information about its timezone and IATA

___

### getBooking

▸ **getBooking**(`id`: [IBookingIdentifier](_interface_ibookingidentifier_.ibookingidentifier.md)): [IBookingDetail](_interface_dto_ibookingdetail_.ibookingdetail.md) \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

*Defined in [interface/IContract.ts:82](https://github.com/TEAM-B-SOFT2020/LSDContract/blob/cf22cbf/interface/IContract.ts#L82)*

A getter for bookings

**`throws`** [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) | [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | [IBookingIdentifier](_interface_ibookingidentifier_.ibookingidentifier.md) | The booking identifier |

**Returns:** [IBookingDetail](_interface_dto_ibookingdetail_.ibookingdetail.md) \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

A booking detail with the price and list of flights

___

### getCarrierInformation

▸ **getCarrierInformation**(`iata`: string): [ICarrierDetail](_interface_dto_icarrierdetail_.icarrierdetail.md) \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

*Defined in [interface/IContract.ts:31](https://github.com/TEAM-B-SOFT2020/LSDContract/blob/cf22cbf/interface/IContract.ts#L31)*

A getter for Carrier information

**`throws`** [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) | [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iata` | string | The Carrier IATA as two capital letters i.e. "SA" |

**Returns:** [ICarrierDetail](_interface_dto_icarrierdetail_.icarrierdetail.md) \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

Carrier detail with name and IATA

___

### getFlightsAvailable

▸ **getFlightsAvailable**(`departure`: [IAirportIdentifier](_interface_iairportidentifier_.iairportidentifier.md), `arrival`: [IAirportIdentifier](_interface_iairportidentifier_.iairportidentifier.md), `depart`: Moment): [IFlightSummary](_interface_dto_iflightsummary_.iflightsummary.md)[] \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

*Defined in [interface/IContract.ts:50](https://github.com/TEAM-B-SOFT2020/LSDContract/blob/cf22cbf/interface/IContract.ts#L50)*

This method returns the flights available between two given airports on a given day.

**`throws`** [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) | [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`departure` | [IAirportIdentifier](_interface_iairportidentifier_.iairportidentifier.md) | The Airport identifier for departure |
`arrival` | [IAirportIdentifier](_interface_iairportidentifier_.iairportidentifier.md) | The Airport identifier for arrival |
`depart` | Moment | A moment-timezone object of the time of departure. Only the date matters here. |

**Returns:** [IFlightSummary](_interface_dto_iflightsummary_.iflightsummary.md)[] \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

A list with the extended information about the flights available on the defined route on the specific date.

___

### reserveFlight

▸ **reserveFlight**(`id`: [IFlightIdentifier](_interface_iflightidentifier_.iflightidentifier.md), `amountSeats`: number): [IReservationSummary](_interface_dto_ireservationsummary_.ireservationsummary.md) \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

*Defined in [interface/IContract.ts:61](https://github.com/TEAM-B-SOFT2020/LSDContract/blob/cf22cbf/interface/IContract.ts#L61)*

This method makes a flight reservation.

**`throws`** [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) | [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | [IFlightIdentifier](_interface_iflightidentifier_.iflightidentifier.md) | A flight identifier for the desired reservation |
`amountSeats` | number | The number of seats of the desired reservation |

**Returns:** [IReservationSummary](_interface_dto_ireservationsummary_.ireservationsummary.md) \| [NotFoundError](../classes/_error_notfounderror_.notfounderror.md) \| [InvalidInputError](../classes/_error_invalidinputerror_.invalidinputerror.md)

An identifier for the reservation with price included

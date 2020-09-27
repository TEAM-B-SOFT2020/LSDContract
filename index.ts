import ICarrierDetail from "./interface/DTO/ICarrierDetail";
import IReservationIdentifier from "./interface/IReservationIdentifier";
import ReservationIdentifier from "./ReservationIdentifier";


function test(reservation: IReservationIdentifier) {
    reservation.id = "test"
}

test({iata: "SA", name: "SAS"})

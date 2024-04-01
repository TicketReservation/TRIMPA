export const ADD_FLIGHT = 'ADD_FLIGHT';

export function addFlight(flight) {
  return { type: ADD_FLIGHT, flight };
}
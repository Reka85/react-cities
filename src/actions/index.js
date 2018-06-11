import cities from "../cities";

//actions

export function setCities(){
  return {
    type: "SET_CITIES",
    payload: cities
  };
}

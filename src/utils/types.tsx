//constants

export const APP_NAME = "Flight Flight Go"
export const FOOTER_TEXT = "@iamcrazyshank"


export interface flightMarkers {
    position: position;
    destination: string;
}

export interface position {
    lat: number;
    lng: number;
}


enum planeType {
    smallPlane = "small-plane",
    fighterPlane = "fighter-plane",
    airplane = "airplane",
  }
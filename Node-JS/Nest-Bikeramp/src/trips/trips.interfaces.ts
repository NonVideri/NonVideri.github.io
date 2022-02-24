type TextAndValue = {
  text: string;
  value: number;
};

interface DistanceMatrixResponseElement {
  distance: TextAndValue;
  duration: TextAndValue;
  duration_in_traffic: TextAndValue;
  fare: TextAndValue;
  status: string;
}

interface DistanceMatrixResponseRow {
  elements: Array<DistanceMatrixResponseElement>;
}

export interface DistanceMatrixResponse {
  destinationAddresses: Array<string>;
  originAddresses: Array<string>;
  rows: Array<DistanceMatrixResponseRow>;
}

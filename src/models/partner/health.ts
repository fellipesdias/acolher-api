export default interface Health {
  id: number;
  idPersonalData: number;
  bloodType:
    | "O"
    | "O+"
    | "O-"
    | "A"
    | "B"
    | "AB"
    | "A+"
    | "A-"
    | "B+"
    | "B-"
    | "AB+"
    | "AB-";
  alergies: string;
  illness: string;
  foodRestriction: string;
  drugRestriction: string;
}

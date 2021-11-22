export default interface SchoolData {
  id: number;
  idPersonalData: number;
  name: string;
  schooling: "F" | "M";
  turn: "M" | "T" | "N";
  grade: string;
}

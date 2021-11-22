import Address from "./address";
import Contact from "./contact";
import FamilyData from "./familyData";
import Health from "./health";
import SchoolData from "./schoolData";

export default interface PersonalData {
  id: number;
  fullName: string;
  birthGender: "M" | "F" | "O";
  birthDate: Date;
  rg: string;
  cpf: string;
  phone: string;
  mobilePhone: string;
  federated: {
    isFederated: boolean;
    clubName: string;
    sport: string;
    startDate: Date;
  };
  familyData: FamilyData;
  address: Address;
  contact: Contact;
  schoolData: SchoolData;
  health: Health;
}

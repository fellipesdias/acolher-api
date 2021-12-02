export default interface FamilyData {
  mother: BasicData;
  father: BasicData;
  hasDivorcedParents: boolean;
  isParentsAlive: boolean;
  receiveChildSupport: boolean;
  responsible: BasicData & { kinship: string };
  numberOfFamilyMembers: number;
  hasCustody: boolean;
}

interface BasicData {
  fullName: string;
  birthDate: Date;
  occupation: string;
}

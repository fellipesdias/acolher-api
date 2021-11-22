export default interface FamilyData {
  mother: BasicData;
  father: BasicData;
  hasDivorcedParents: boolean;
  isParentsAlive: boolean;
  receiveChildSupport: boolean;
  responsible: BasicData & { kinship: string };
  hasCustody: boolean;
  numberOfFamilyMembers: number;
}

interface BasicData {
  fullName: string;
  birthDate: Date;
  occupation: string;
}

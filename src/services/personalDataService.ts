import PersonalData from "../models/partner/personalData";

export const findAll = async (): Promise<Array<PersonalData>> => {
  return null;
};

export const find = async (id: number): Promise<PersonalData> => {
  return null;
};

export const create = async (
  personalData: PersonalData
): Promise<PersonalData> => {
  const id = new Date().valueOf();

  return {
    id,
    ...personalData,
  };
};

export const update = async (
  personalData: PersonalData
): Promise<PersonalData> => {
  return {};
};

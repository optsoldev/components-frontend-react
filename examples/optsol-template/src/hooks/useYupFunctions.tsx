import * as Yup from 'yup';

export const useYupFunctions = () => {
  const isFieldRequired = (
    validationSchema: Yup.AnyObjectSchema,
    field: string
  ): boolean => {
    const fieldProperties = validationSchema.describe().fields[field];

    if (fieldProperties && 'tests' in fieldProperties) {
      return fieldProperties.tests.some((test) => test.name === 'required');
    }
    return false;
  };

  return { isFieldRequired };
};

import { yupResolver } from '@hookform/resolvers/yup';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { describe, expect, test } from 'vitest';
import * as Yup from 'yup';
import { PatternInput } from '..';

describe('PatternInput component', () => {
  const testLabel = 'Test Label';

  test('renders label correctly', () => {
    const Component = () => {
      const form = useForm<{ test: string }>();
      return (
        <FormProvider {...form}>
          <PatternInput
            control={form.control}
            label={testLabel}
            name="test"
            format=""
          />
        </FormProvider>
      );
    };

    render(<Component />);
    const labelElement = screen.getByText(testLabel);
    expect(labelElement).toBeInTheDocument();
  });

  test('PatternInput field changes value correctly', () => {
    const Component = () => {
      const form = useForm<{ test: string }>();
      return (
        <FormProvider {...form}>
          <PatternInput
            control={form.control}
            label={testLabel}
            name="test"
            format="###.###.###-##"
          />
        </FormProvider>
      );
    };

    render(<Component />);

    const testInputValue = '17498767015';
    const testInputMaskedValue = '174.987.670-15';
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: testInputValue } });
    expect(inputElement).toHaveValue(testInputMaskedValue);
  });

  test('displays error message correctly', () => {
    const testErrorMessage = 'Test Error Message';
    const mockError = { type: 'testErrorType', message: testErrorMessage };

    const Component = () => {
      const form = useForm<{ test: string }>();
      return (
        <FormProvider {...form}>
          <PatternInput
            control={form.control}
            errors={mockError}
            name="test"
            format=""
          />
        </FormProvider>
      );
    };

    render(<Component />);

    const errorMessageElement = screen.getByText(testErrorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });

  test('validate and display error message correctly', async () => {
    const testErrorMessage = 'Test Error Message';

    const Component = () => {
      const validationSchema = Yup.object().shape({
        test: Yup.string().required(testErrorMessage)
      });

      const form = useForm({
        resolver: yupResolver(validationSchema)
      });

      return (
        <FormProvider {...form}>
          <PatternInput control={form.control} name="test" format="" />;
          <button
            type="submit"
            data-testid="submit"
            onClick={form.handleSubmit(console.log)}
          >
            Submit
          </button>
        </FormProvider>
      );
    };

    render(<Component />);

    fireEvent.click(screen.getByTestId('submit'));

    await act(async () => {
      // Wait for form validation and re-render
    });

    const errorMessageElement = screen.getByText(testErrorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });
});

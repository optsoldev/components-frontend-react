import { yupResolver } from '@hookform/resolvers/yup';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { describe, expect, test } from 'vitest';
import * as Yup from 'yup';
import Input from './Input';

describe('Input component', () => {
  const testLabel = 'Test Label';

  test('renders label correctly', () => {
    const Component = () => {
      const { control } = useForm<{ test: string }>();
      return <Input control={control} name="test" label={testLabel} />;
    };

    render(<Component />);
    const labelElement = screen.getByText(testLabel);
    expect(labelElement).toBeInTheDocument();
  });

  test('input field changes value correctly', () => {
    const Component = () => {
      const { control } = useForm<{ test: string }>();
      return <Input control={control} name="test" label={testLabel} />;
    };

    render(<Component />);

    const testInputValue = 'Test Input Value';
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: testInputValue } });
    expect(inputElement).toHaveValue(testInputValue);
  });

  test('displays error message correctly', () => {
    const testErrorMessage = 'Test Error Message';
    const mockError = { type: 'testErrorType', message: testErrorMessage };

    const Component = () => {
      const { control } = useForm<{ test: string }>();
      return <Input control={control} name="test" errors={mockError} />;
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
          <Input control={form.control} name="test" />;
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

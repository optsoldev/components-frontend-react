import { render } from '@testing-library/react';
import InputError from './InputError';

describe('InputError Component', () => {
  it('should render without error message', () => {
    const { container } = render(<InputError />);
    expect(container.firstChild).toBeNull();
  });

  it('should render with string error message', () => {
    const errorMessage = 'This is an error message';
    const { getByText } = render(<InputError error={errorMessage} />);
    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('should render with FieldError object', () => {
    const fieldError = {
      type: 'required',
      message: 'This field is required'
    };
    const { getByText } = render(<InputError error={fieldError} />);
    expect(getByText(fieldError.message)).toBeInTheDocument();
  });
});

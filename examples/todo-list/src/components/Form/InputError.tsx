import { Typography } from "@mui/material";
import { FieldError } from "react-hook-form";

interface Props {
  color?: string;
  error?: FieldError | string;
}

const InputError = ({ error, color = "error" }: Props) => {
  const message = !!error && typeof error !== "string" ? error.message : error;

  return message ? (
    <Typography mt={0.5} color={color}>
      {message}
    </Typography>
  ) : null;
};

export default InputError;

import { useMemo } from "react";

import {
  InputLabel,
  FilledInput,
  TextField,
  FormControl,
  FormHelperText,
  useFormControl,
} from "@mui/material";

const StandardField = ({
  label,
  placeholder,
  helperText,
  value,
  setValue,
  number,
  errorText,
}) => {
  const { filled } = useFormControl() || {};

  const HelperText = () => {
    const { focused, error } = useFormControl() || {};

    return useMemo(() => {
      if (error) {
        return <FormHelperText>{errorText}</FormHelperText>;
      } else if (focused) {
        return <FormHelperText>{helperText}</FormHelperText>;
      }

      return <></>;
    }, [focused, error]);
  };

  return (
    <>
      <FormControl
        variant="filled"
        error={value && errorText}
        sx={{ width: "100%", marginY: 1 }}
      >
        <InputLabel>{label}</InputLabel>
        <FilledInput
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          inputProps={{
            inputMode: number ? "numeric" : "text",
            pattern: number ? "[0-9]*" : "",
          }}
        />
        <HelperText />
      </FormControl>
    </>
  );
};

export default StandardField;

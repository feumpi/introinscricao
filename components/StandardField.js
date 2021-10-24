import { useMemo } from "react";

import {
  InputLabel,
  FilledInput,
  TextField,
  FormControl,
  FormHelperText,
  useFormControl,
} from "@mui/material";

import InputMask from "react-input-mask";
import { PinDropSharp } from "@mui/icons-material";

const StandardField = ({
  label,
  placeholder,
  helperText,
  value,
  setValue,
  number,
  errorText,
  mask,
}) => {
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
        error={Boolean(value && errorText)}
        sx={{ width: "100%", marginY: 1 }}
      >
        <InputLabel>{label}</InputLabel>

        {mask ? (
          <InputMask
            mask={mask || ""}
            maskChar={""}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label={label}
            placeholder={placeholder}
            inputProps={{
              inputMode: number ? "numeric" : "text",
              pattern: number ? "[0-9]*" : "",
            }}
          >
            {(props) => <FilledInput {...props} />}
          </InputMask>
        ) : (
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
        )}

        <HelperText />
      </FormControl>
    </>
  );
};

export default StandardField;

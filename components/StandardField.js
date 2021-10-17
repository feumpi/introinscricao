import { useMemo } from "react";

import {
  InputLabel,
  OutlinedInput,
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
}) => {
  const HelperText = () => {
    const { focused } = useFormControl() || {};

    return useMemo(() => {
      if (focused) {
        return <FormHelperText>{helperText}</FormHelperText>;
      }

      return <></>;
    }, [focused]);
  };

  return (
    <>
      <FormControl sx={{ width: "100%", marginY: 1 }}>
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={(e, v) => setValue(v)}
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

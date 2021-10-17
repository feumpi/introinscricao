import { Autocomplete, TextField } from "@mui/material";

const AutocompleteField = (props) => {
  const {
    label,
    placeholder,
    options,
    value,
    setValue,
    inputValue,
    setInputValue,
    free,
  } = props;
  return (
    <>
      <Autocomplete
        options={options}
        value={value}
        onChange={(e, v) => setValue(v)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e, v) => setInputValue(v)}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
        disablePortal
        openOnFocus
        freeSolo={free}
      />
    </>
  );
};

export default AutocompleteField;
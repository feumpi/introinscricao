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
        value={value || null}
        onChange={(e, v) => setValue(v)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label={label}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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

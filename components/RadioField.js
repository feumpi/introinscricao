import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const RadioField = ({ label, name, options, value, setValue }) => {
  return (
    <>
      <FormControl component="fieldset" sx={{ marginTop: "20px" }}>
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          aria-label={label}
          defaultValue={options[0]}
          name={name}
          value={value}
          onChange={(e, v) => setValue(v)}
          row
        >
          {options.map((option, index) => {
            return (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioField;

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Drop() {
    const [HallName, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 ,marginLeft:6 ,display:"flex-inline" }} size="small">
            <InputLabel id="demo-select-small">Hall</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={HallName}
                label="Hall Name"
                onChange={handleChange}
            >
                <MenuItem value="">

                </MenuItem>
                <MenuItem value={10}>Hall Name 1</MenuItem>
                <MenuItem value={20}>Hall Name 2</MenuItem>
                <MenuItem value={30}>Hall Name 3</MenuItem>
            </Select>
        </FormControl>
    );
}

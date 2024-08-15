'use client';
import React, { FC } from 'react';
import { MenuItem, Box, FormControl, Select } from '@mui/material';
import { LangSwithMobileProps } from '../LangSwitch.types';

const LangSwitchMobile: FC<LangSwithMobileProps> = ({ lang, handleChange }) => {
    return (
        <Box sx={{ maxWidth: 40 }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={lang}
                    onChange={handleChange}
                    sx={{
                        color: '#B069C7',
                        padding: '0',
                        fontSize: '24px',
                        fontWeight: '500',
                        border: 'none',
                        boxShadow: 'none',
                        '& .MuiSelect-icon': {
                            display: 'none',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }}
                >
                    <MenuItem value={'en'}>EN</MenuItem>
                    <MenuItem value={'ua'}>UA</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default LangSwitchMobile;

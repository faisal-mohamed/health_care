import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Paper } from '@mui/material';

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  placeholder?: string;
}

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0),
  },
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 1),
  [theme.breakpoints.up('sm')]: {
    width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  flex: 1,
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    '&:focus': {
      width: '100%',
    },
  },
}));

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, setSearchValue, placeholder }) => {
  return (
    <Paper
      sx={{
        p: 1,
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px',
        width: '80%',
        maxWidth: 600,
      }}
    >
      <SearchContainer>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholder}
          inputProps={{ 'aria-label': 'search' }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </SearchContainer>
    </Paper>
  );
};

export default SearchBar;

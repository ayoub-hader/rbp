import { createTheme } from '@mui/material/styles';
import { AppTheme } from './app-theme';

const theme = createTheme({
  palette: {
    primary: {
      main: AppTheme.AppColors.primary,
    },
    customPrimary: {
      main: AppTheme.AppColors.success,
    },
  },
  spacing: 1,
  typography: {
    fontSize: 14,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;

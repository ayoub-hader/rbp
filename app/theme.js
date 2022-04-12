import {createTheme} from '@mui/material/styles';
import {AppTheme} from './theme/index';

export default createTheme({
  palette: {
    primary: {
      main: '#000fff',
    },
    customPrimary: {
      main: AppTheme.AppColors.success,
    },
  },
});

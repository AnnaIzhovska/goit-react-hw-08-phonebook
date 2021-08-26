import { createReducer } from '@reduxjs/toolkit';
import themeActions  from './themeActions';

const themeReducer = createReducer(true, {
  [themeActions.changeTheme]: state => !state,
});

export default themeReducer;
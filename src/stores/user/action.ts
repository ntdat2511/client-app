import { createAction } from '@reduxjs/toolkit';
import * as type from './type';

export const fetchUsers = createAction(type.FETCH_USERS);

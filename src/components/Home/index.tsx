import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../stores';
import { fetchUsers } from '../../stores/user/action';
import { Container } from './styles';

const HomePage = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchUsers());
  };

  console.log(user);

  return (
    <Container>
      <button onClick={handleClick}>CLick</button>
    </Container>
  );
};

export default React.memo(HomePage);

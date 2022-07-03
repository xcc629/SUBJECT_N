/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import { PersonListItemProps } from '../../types/propsTypes';

const ImgWrapper = styled.img`
  width: 150px;
  height: 150px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
`;

const FakeProfileWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: silver;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export default function PersonListItem({
  profilePath,
  name,
  department,
}: PersonListItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: '160px',
        height: '250px',
        border: '1px solid silver',
        borderRadius: '5px',
        m: 0.5,
        p: 0.5,
      }}
    >
      {profilePath ? (
        <ImgWrapper
          src={`https://image.tmdb.org/t/p/w500${profilePath}`}
          alt={`${name}profilePicture`}
        />
      ) : (
        <FakeProfileWrapper />
      )}

      <InfoWrapper>
        <strong>{name}</strong>
        {department}
      </InfoWrapper>
    </Box>
  );
}

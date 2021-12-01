import styled from 'styled-components/native';

import Icon from '../icon';

// Resume
export const IconList = styled(Icon).attrs(() => ({
  name: 'clipboard-list',
  size: 50,
  color: 'white',
  type: 'font-5',
}))``;

export const ResumeContainer = styled.View`
  background-color: #4299e1;
  position: absolute;
  bottom: 0;

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0 17px;
  width: 100%;
  height: 80px;
`;

export const ResumeText = styled.Text`
  font-size: 18px;
  color: white;
`;

export const LeftResume = styled.View`
  flex: 0.9;
  margin-left: 7px;
`;

export const RightResume = styled.View`
  flex: 0.25;
  align-items: center;
`;

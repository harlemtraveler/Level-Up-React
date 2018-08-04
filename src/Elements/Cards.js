import styled from 'styled-components';
// You can import the 'colors' file or a property from the 'colors' Object!
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  max-width: 320px;
  margin: 0 auto;
  color: ${black};
  ${elevation[4]};
${'' /* Don't have to pass args to transition, but needs Object...curly braces */}
  ${transition({
    property: 'box-shadow'
    })};
  &:hover {
    ${elevation[5]};
  }
`;

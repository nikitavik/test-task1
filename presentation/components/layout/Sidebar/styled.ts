import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  position: sticky;
  left: 0;
  margin: 0;
  bottom: 0;
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.light1pxBorder};
  box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  top: ${({ theme }) => theme.sizes.headerHeight};
  max-width: ${({ theme }) => theme.sizes.sidebarWidth};
  overflow-y: auto;
  grid-area: sidebar;
`;
export const Subtitle = styled.h6`
  color: ${(props) => props.theme.colors.gray33};
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 108%;
  margin: 0 0 0 1rem;
`;
export const Subsection = styled.div`
  margin: 1.5rem 1.5rem 0;
`;

import styled from "@emotion/styled";

export const H1 = styled.h1(() => ({
  position: "relative",
  fontSize: "70px",
  marginTop: "150px",
}));

export const H2 = styled.h2(() => ({
  fontSize: "40px",
}));

export const H3 = styled.h3(() => ({
  fontSize: "30px",
}));

export const P = styled.p(() => ({
  color: "black",
  textAlign: "center",
  boxSizing: "border-box",
  bottom: 0,
}));

export const P1 = styled.p(() => ({
  color: "black",
  textAlign: "center",
  boxSizing: "border-box",
  bottom: 0,
}));

export const P2 = styled.p(() => ({
  color: "black",
  textAlign: "left",
  boxSizing: "border-box",
  fontSize: "20px",
}));

export const BioDiv = styled.div(() => ({
  width: "35%",
  marginLeft: "auto",
  marginRight: "auto",
}));

export const FOOTER = styled.footer(() => ({
  background: "grey",
  width: "100%",
  position: "fixed",
  padding: "5px",
  top: "0",
}));

export const PORTFOLIO = styled.div(() => ({
  [mediaQueries[1]]: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "20px",
  },
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
}));

export const EXAMPLES = styled.div(() => ({
  [mediaQueries[1]]: {
    display: "none",
  },
  paddingBottom: "30px",
}));

export const SkillsBody = styled.body(() => ({
  [mediaQueries[0]]: {
    background: "white",
  },
  paddingBottom: "100px",
  paddingTop: "20px",
  background: "lightgrey",
}));

export const breakpoints: number[] = [576, 768, 992, 1200];

export const mediaQueries: string[] = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

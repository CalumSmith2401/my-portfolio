import styled from "@emotion/styled";

export const breakpoints: number[] = [576, 768, 992, 1200];

export const mediaQueries: string[] = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

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
  [mediaQueries[3]]: {
    textAlign: "center",
  },
}));

export const BioDiv = styled.div(() => ({
  width: "35%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: "30px",
}));

export const FOOTER = styled.footer(() => ({
  background: "grey",
  width: "100%",
  position: "fixed",
  padding: "5px",
  top: "0",
}));

export const PORTFOLIO = styled.div(() => ({
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: "50px",
  [mediaQueries[3]]: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "50px",
  },
}));

export const EXAMPLES = styled.div(() => ({
  paddingBottom: "30px",
}));

export const SkillsBody = styled.body(() => ({
  paddingBottom: "100px",
  paddingTop: "20px",
  background: "lightgrey",
}));

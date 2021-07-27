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
  color: "white",
  textAlign: "center",
  boxSizing: "border-box",
  bottom: 0,
  fontWeight: 200,
  fontSize: 25,
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
  width: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: "60px",
}));

export const FOOTER = styled.footer(() => ({
  background: "white",
  width: "100%",
  position: "absolute",
  top: "0",
  boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8",
}));

export const PORTFOLIO = styled.div(() => ({
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: "100px",
  paddingLeft: "30px",
  paddingRight: "30px",
  marginTop: "-75px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8",
}));

export const PortfolioItems = styled.div(() => ({}));

export const PortfolioDiv = styled.div(() => ({
  display: "flex",
  [mediaQueries[3]]: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "50px",
  },
}));

export const EXAMPLES = styled.div(() => ({
  paddingBottom: "30px",
  paddingTop: "200px",
}));

export const SkillsBody = styled.body(() => ({
  paddingBottom: "100px",
  paddingTop: "20px",
  background: "lightgrey",
}));

export const LINK = styled.a(() => ({
  color: "white",
}));

import styled from "@emotion/styled";

export const H1 = styled.h1(() => ({
  position: "relative",
  fontSize: "70px",
  marginTop: "150px",
}));

export const H2 = styled.h2(() => ({
  fontSize: "40px",
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

export const BioDiv = styled.div(() => ({
  width: "35%",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "200px",
}));

export const FOOTER = styled.footer(() => ({
  background: "grey",
  width: "100%",
  position: "fixed",
  padding: "5px",
  top: "0",
}));

export const TABLE = styled.table(() => ({
  marginLeft: "auto",
  marginRight: "auto",
  borderSpacing: "50px 0px",
}));

export const SkillsBody = styled.body(() => ({
  paddingBottom: "40px",
}));

import styled from "@emotion/styled";

export const H1 = styled.h1(() => ({
  color: "red",
  position: "relative",
}));

export const P = styled.p(() => ({
  color: "white",
  position: "relative",
  bottom: 0
}));

export const FOOTER = styled.footer(() => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "2.5rem",
  color: "white"
}));

export const APPHEADER = styled.header(() => ({
    backgroundColor: "#282c34",
    minHeight: "100vh",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
}));

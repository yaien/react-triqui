import * as React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  box-shadow: 0px 2px 2px 2px lightgray;
  border-radius: 5px 5px 5px 5px;
  margin: 10px;
  flex-grow: 1;
`;

const CardHeader = styled.div`
  padding: 3%;
  text-align: center;
  color: darkblue;
`;

const CardTitle = styled.h4`
  margin: 0px;
  font-size: 3rem;
  @media (max-width: 720px) {
    font-size: 2em;
  }
`;

const CardBody = styled.div`
  padding: 5%;
  text-align: center;
`;

export interface CardProps extends React.Props<Element> {
  title: string;
}

export function Card(props: CardProps) {
  return (
    <CardWrapper>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardBody>{props.children}</CardBody>
    </CardWrapper>
  );
}

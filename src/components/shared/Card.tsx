import * as React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px 5px 5px 5px;
  margin: 10px;
  flex-grow: 1;

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
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

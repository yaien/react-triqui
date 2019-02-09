import * as React from "react";

export type FormProps = React.HTMLProps<HTMLFormElement>;

export function Form(props: FormProps) {
  let { onSubmit, ...rest } = props;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(null);
  };

  return (
    <form onSubmit={submit} {...rest}>
      {props.children}
    </form>
  );
}

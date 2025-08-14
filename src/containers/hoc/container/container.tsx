import { ReactNode } from "react";

import classes from "./container.module.scss";

interface Props {
  children: ReactNode;
}

export const Container = (props: Props) => {
  return <div className={classes.container}>{props.children}</div>;
};

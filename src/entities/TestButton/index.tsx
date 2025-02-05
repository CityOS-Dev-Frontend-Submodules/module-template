import classNames from "classnames";
import styles from "./style.module.scss";

interface Props {
  className?: string;
}

export const TestButton = ({ className }: Props) => {
  return (
    <button className={classNames(styles.wrapper, className)}>
      {"shared button"}
    </button>
  );
};

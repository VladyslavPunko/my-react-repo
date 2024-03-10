import clsx from "clsx";
import css from "./Alert.module.css";
import { HiUser } from "react-icons/hi";

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

export const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <HiUser className="my-icon" size="40" /> {name}
      </p>
    </div>
  );
};

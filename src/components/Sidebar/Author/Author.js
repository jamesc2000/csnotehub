// @flow strict
import React from "react";
import { withPrefix, Link } from "gatsby";
import styles from "./Author.module.scss";

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string,
  },
  isIndex: ?boolean,
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles["author"]}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__logo']}
        width="125"
        height="125"
        alt="csnotehub Logo"
      />
    </Link>
  </div>
);

export default Author;

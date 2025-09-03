"use client";
import { BodyProps } from "./Body.props";
import styles from "./Body.module.css";
import cn from "classnames";
import { KeyboardEvent, useState, useRef } from "react";

export function Body({ children, className, ...props }: BodyProps) {
  const [skipLinkDisplayed, isSkipLinkDisplayed] = useState<boolean>(false);
  const mainRef = useRef<HTMLElement>(null);

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      mainRef.current?.focus();
    }
    isSkipLinkDisplayed(false);
  };

  return (
    <>
      <div
        className={cn(styles["skip-link"], {
          [styles.displayed]: skipLinkDisplayed
        })}
        tabIndex={1}
        onKeyDown={(key: KeyboardEvent) => skipContentAction(key)}
        onFocus={() => isSkipLinkDisplayed(true)}
      >К содержанию</div>
      <main
        {...props}
        className={cn(styles.body, className)}
        ref={mainRef}
        tabIndex={0}
      >
        {children}
      </main>
    </>
  );
}
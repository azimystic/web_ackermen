import type { ReactNode } from "react";

/** Browser-chrome frame for product screenshots. */
export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`frame frame--browser${className ? ` ${className}` : ""}`}>
      <div className="frame__bar">
        <span className="frame__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="frame__url">{url}</span>
      </div>
      <div className="frame__body">{children}</div>
    </div>
  );
}

/** Phone-chrome frame for mobile screenshots. */
export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`frame frame--phone${className ? ` ${className}` : ""}`}>
      <div className="frame__body">{children}</div>
    </div>
  );
}

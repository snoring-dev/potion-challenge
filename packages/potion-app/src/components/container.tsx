import { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-[720px] xl:max-w-[1024px]">{children}</div>;
}

export default Container;

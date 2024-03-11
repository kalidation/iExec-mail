import { I18nextProvider } from "react-i18next";
import i18n from "../lang/i18n";
import { RenderOptions, render } from "@testing-library/react";
import { ReactElement } from "react";

export const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export * from "@testing-library/react";

export { customRender as render };

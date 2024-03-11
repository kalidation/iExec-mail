import { vi, describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import ProtectedDataFooter from "../ProtectedDataFooter";

vi.mock("../../../../redux/App/typedHooks.ts", async (importOriginal) => {
  const mocks = await importOriginal<
    typeof import("../../../../redux/App/typedHooks.ts")
  >();
  return {
    ...mocks,
    useAppDispatch: vi.fn(),
    useAppSelector: vi
      .fn()
      .mockReturnValueOnce({
        fetchProtectedDataState: { data: undefined },
        protectDataState: { isLoading: false },
      })
      .mockReturnValueOnce({
        fetchProtectedDataState: { data: undefined },
        protectDataState: { isLoading: false },
      })
      .mockReturnValueOnce({
        fetchProtectedDataState: { data: [] },
        protectDataState: { isLoading: false },
      })
      .mockReturnValueOnce({
        fetchProtectedDataState: { data: [] },
        protectDataState: { isLoading: false },
      })
      .mockReturnValueOnce({
        isLoading: false,
      }),
  };
});

describe("ProtectedDataFooter", () => {
  const handleForme = vi.fn();
  const handleGrantAccess = vi.fn();
  const handleProtectData = vi.fn();
  const handleSelectProtectedData = vi.fn();

  it("SHOULD display button WHEN not protectedData AND !isForm", async () => {
    const isForm = false;

    const { getByRole, getByText } = render(
      <ProtectedDataFooter
        handleForme={handleForme}
        handleGrantAccess={handleGrantAccess}
        handleProtectData={handleProtectData}
        handleSelectProtectedData={handleSelectProtectedData}
        isForm={isForm}
      />
    );

    expect(getByRole("button")).toBeDefined();
    expect(getByText("Protect my Address")).toBeDefined();
  });

  it("SHOULD display form WHEN isForm", () => {
    const isForm = true;

    const { getByTestId } = render(
      <ProtectedDataFooter
        handleForme={handleForme}
        handleGrantAccess={handleGrantAccess}
        handleProtectData={handleProtectData}
        handleSelectProtectedData={handleSelectProtectedData}
        isForm={isForm}
      />
    );

    expect(getByTestId("button-form")).toBeDefined();
  });

  it("SHOULD NOT display button WHEN protectedData AND !isForm", () => {
    const isForm = false;

    const { queryByRole } = render(
      <ProtectedDataFooter
        handleForme={handleForme}
        handleGrantAccess={handleGrantAccess}
        handleProtectData={handleProtectData}
        handleSelectProtectedData={handleSelectProtectedData}
        isForm={isForm}
        selectedProtectedData=""
      />
    );

    expect(queryByRole("button")).toBeNull();
  });

  it("SHOULD display button WHEN protectedData AND selectedData AND !isForm", () => {
    const isForm = false;

    const { getByText } = render(
      <ProtectedDataFooter
        handleForme={handleForme}
        handleGrantAccess={handleGrantAccess}
        handleProtectData={handleProtectData}
        handleSelectProtectedData={handleSelectProtectedData}
        isForm={isForm}
        selectedProtectedData="x"
      />
    );

    expect(getByText("Share Acccess")).toBeDefined();
    expect(getByText("Cancel")).toBeDefined();
    expect(getByText("Add new")).toBeDefined();
  });
});

import { vi, describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ProtectedDataContent from "../ProtectedDataContent";

vi.mock("../../../../redux/App/typedHooks.ts", async (importOriginal) => {
  const mocks = await importOriginal<
    typeof import("../../../../redux/App/typedHooks.ts")
  >();
  return {
    ...mocks,
    useAppSelector: vi
      .fn()
      .mockReturnValueOnce({
        fetchProtectedDataState: { data: undefined },
      })
      .mockReturnValueOnce({
        fetchProtectedDataState: { data: undefined },
      })
      .mockReturnValueOnce({
        fetchProtectedDataState: {
          data: [
            {
              name: "test",
              address: "0xtest",
              creationTimestamp: 12345,
              owner: "test",
              schema: {
                email: "string",
              },
            },
          ],
        },
      }),
  };
});

describe("ProtectedDataFooter", () => {
  const handleSelectProtectedData = vi.fn();
  const handleOnChangeEmail = vi.fn();
  const handleOnChangeName = vi.fn();

  it("SHOULD display no data message WHEN NOT protectedData AND !isForm", async () => {
    const { getByTestId } = render(
      <ProtectedDataContent
        handleOnChangeEmail={handleOnChangeEmail}
        handleSelectProtectedData={handleSelectProtectedData}
        handleOnChangeName={handleOnChangeName}
        email=""
        isForm={false}
      />
    );

    expect(getByTestId("no-data-message")).toBeDefined();
  });

  it("SHOULD display details message WHEN NOT protectedData AND isForm", async () => {
    const { getByTestId } = render(
      <ProtectedDataContent
        handleOnChangeEmail={handleOnChangeEmail}
        handleSelectProtectedData={handleSelectProtectedData}
        handleOnChangeName={handleOnChangeName}
        email=""
        isForm={true}
      />
    );

    expect(getByTestId("form-protect-message")).toBeDefined();
  });

  it("SHOULD display list WHEN protectedData AND !isForm", async () => {
    const { getByText } = render(
      <ProtectedDataContent
        handleOnChangeEmail={handleOnChangeEmail}
        handleSelectProtectedData={handleSelectProtectedData}
        handleOnChangeName={handleOnChangeName}
        email=""
        isForm={false}
      />
    );

    expect(getByText("test")).toBeDefined();
  });
});

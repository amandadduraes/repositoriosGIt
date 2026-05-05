import { fireEvent, render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  it("submits a trimmed username", () => {
    const onSearch = vi.fn();

    render(<SearchForm initialValue="  fabpot  " onSearch={onSearch} />);

    fireEvent.click(screen.getByRole("button", { name: "Buscar perfil" }));

    expect(onSearch).toHaveBeenCalledWith("fabpot");
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it("does not submit an empty username", () => {
    const onSearch = vi.fn();

    render(<SearchForm initialValue="   " onSearch={onSearch} />);

    fireEvent.click(screen.getByRole("button", { name: "Buscar perfil" }));

    expect(onSearch).not.toHaveBeenCalled();
  });

  it("updates the field when the initial value changes", () => {
    const onSearch = vi.fn();
    const { rerender } = render(
      <SearchForm initialValue="gaearon" onSearch={onSearch} />,
    );

    rerender(<SearchForm initialValue="fabpot" onSearch={onSearch} />);

    expect(screen.getByLabelText("Usuario do GitHub")).toHaveValue("fabpot");
  });
});

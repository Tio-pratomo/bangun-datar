import { beforeEach, describe, it, expect } from "vitest";
import App from "./App";
import { setup, screen, within } from "./test/test-utils";

beforeEach(() => {
  localStorage.clear();
  document.documentElement.className = "";
});

async function clickNav(user, name) {
  const buttons = screen.getAllByRole("button", { name });
  await user.click(buttons[buttons.length - 1]);
}

describe("App", () => {
  it("navigates correctly", async () => {
    const { user } = setup(<App />);
    await user.click(screen.getByRole("button", { name: "Bangun Datar" }));
    expect(
      screen.getByRole("heading", { name: "Bangun Datar" }),
    ).toBeInTheDocument();
  });

  it("toggles and persists theme", async () => {
    const { user } = setup(<App />);
    const themeBtn = screen.getByRole("button", { name: /Dark/i });
    await user.click(themeBtn);
    expect(screen.getByRole("button", { name: /Light/i })).toBeInTheDocument();
  });

  it("calculates 2D area and resets", async () => {
    const { user } = setup(<App />);
    await user.click(screen.getByRole("button", { name: "Persegi" }));
    const inputs = screen.getAllByRole("spinbutton");
    await user.type(inputs[0], "5");
    await user.click(screen.getByRole("button", { name: "Hitung Luas" }));
    expect(screen.getByText(/Luas = 25/i)).toBeInTheDocument();
    expect(inputs[0].value).toBe("");
  });

  it("validates 3D input", async () => {
    const { user } = setup(<App />);
    await clickNav(user, "Bangun Ruang");
    await user.click(screen.getByRole("button", { name: "Kubus" }));
    await user.click(screen.getByRole("button", { name: "Hitung Volume" }));
    expect(screen.getByText("Input tidak valid")).toBeInTheDocument();
  });

  it("calculates 3D volume decimal", async () => {
    const { user } = setup(<App />);
    await clickNav(user, "Bangun Ruang");
    await user.click(screen.getByRole("button", { name: "Kubus" }));
    await user.type(screen.getByRole("spinbutton"), "2.5");
    await user.click(screen.getByRole("button", { name: "Hitung Volume" }));
    expect(screen.getByText(/Volume = 15.63/i)).toBeInTheDocument();
  });

  it("converts units with result", async () => {
    const { user } = setup(<App />);
    await user.click(screen.getByRole("button", { name: "Konversi Satuan" }));
    await user.click(screen.getByRole("button", { name: "Panjang" }));
    await user.type(screen.getByRole("spinbutton"), "100");
    // Defaults: km → hm. 100 km = 1000 hm
    expect(screen.getByText(/Hasil.*1.000.*hm/)).toBeInTheDocument();
  });

  it("hides Hasil when input is empty or invalid", async () => {
    const { user } = setup(<App />);
    await user.click(screen.getByRole("button", { name: "Konversi Satuan" }));
    await user.click(screen.getByRole("button", { name: "Panjang" }));
    expect(screen.queryByText(/Hasil/)).not.toBeInTheDocument();
    await user.type(screen.getByRole("spinbutton"), "abc");
    expect(screen.queryByText(/Hasil/)).not.toBeInTheDocument();
  });

  it("converts temperature celsius to fahrenheit", async () => {
    const { user } = setup(<App />);
    await user.click(screen.getByRole("button", { name: "Konversi Satuan" }));
    await user.click(screen.getByRole("button", { name: "Suhu" }));
    // Defaults: celsius → fahrenheit
    await user.type(screen.getByRole("spinbutton"), "100");
    // 100 °C = 212 °F
    expect(screen.getByText(/Hasil.*212.*fahrenheit/)).toBeInTheDocument();
  });

  it("converts temperature kelvin to celsius", async () => {
    const { user } = setup(<App />);
    await user.click(screen.getByRole("button", { name: "Konversi Satuan" }));
    await user.click(screen.getByRole("button", { name: "Suhu" }));
    // Change fromUnit to kelvin, toUnit to celsius
    const selects = screen.getAllByRole("combobox");
    await user.selectOptions(selects[0], "kelvin");
    await user.selectOptions(selects[1], "celsius");
    await user.type(screen.getByRole("spinbutton"), "273.15");
    // 273.15 K = 0 °C
    expect(screen.getByText(/Hasil.*0.*celsius/)).toBeInTheDocument();
  });

  it("hides calculators until shape is selected", async () => {
    const { user } = setup(<App />);
    expect(screen.queryByText(/Kalkulator/i)).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Persegi" }));
    expect(
      screen.getByRole("heading", { name: "Kalkulator Persegi" }),
    ).toBeInTheDocument();
    await clickNav(user, "Bangun Ruang");
    expect(screen.queryByRole("heading", { name: /Hitung Volume/i })).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Kubus" }));
    expect(
      screen.getByRole("heading", { name: "Kalkulator Kubus" }),
    ).toBeInTheDocument();
  });

  it("uses requested Bangun Ruang label grid columns", async () => {
    const { user } = setup(<App />);
    await clickNav(user, "Bangun Ruang");
    const grid = screen.getByText("Kubus");
    expect(grid).toBeInTheDocument();
  });

  it("opens mobile drawer navigation and closes after selecting a page", async () => {
    const { user } = setup(<App />);
    const drawerToggle = document.getElementById("mobile-nav-drawer");
    expect(drawerToggle).toBeInTheDocument();
    expect(drawerToggle).not.toBeChecked();

    await user.click(screen.getByLabelText("Buka menu"));
    expect(drawerToggle).toBeChecked();

    const drawer = screen.getByRole("list", { name: /mobile navigation/i });
    await user.click(within(drawer).getByText("Bangun Ruang"));
    expect(
      screen.getByRole("heading", { name: "Kalkulator Bangun Ruang" }),
    ).toBeInTheDocument();
    expect(drawerToggle).not.toBeChecked();
  });
});

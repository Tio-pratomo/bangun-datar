import { beforeEach, describe, it, expect } from 'vitest';
import App from './App';
import { setup, screen } from './test/test-utils';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.className = '';
});

async function clickNav(user, name) {
  const buttons = screen.getAllByRole('button', { name });
  await user.click(buttons[buttons.length - 1]);
}

describe('App', () => {
  it('navigates correctly', async () => {
    const { user } = setup(<App />);
    expect(screen.getByRole('heading', { name: 'Bangun Datar' })).toBeInTheDocument();
    
    await clickNav(user, 'Bangun Ruang');
    expect(screen.getByRole('heading', { name: 'Bangun Ruang' })).toBeInTheDocument();
    
    await clickNav(user, 'Konversi Satuan');
    expect(screen.getByRole('heading', { name: 'Konversi Satuan' })).toBeInTheDocument();
    
    await clickNav(user, 'Bangun Datar');
    expect(screen.getByRole('heading', { name: 'Bangun Datar' })).toBeInTheDocument();
  });

  it('toggles and persists theme', async () => {
    const { user } = setup(<App />);
    const darkBtn = screen.getByRole('button', { name: /🌙 Dark/i });
    
    await user.click(darkBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('true');
    
    const lightBtn = screen.getByRole('button', { name: /☀️ Light/i });
    await user.click(lightBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('false');
  });

  it('calculates 2D area and resets', async () => {
    const { user } = setup(<App />);
    await user.click(screen.getByRole('button', { name: 'Persegi' }));
    
    const input = screen.getByPlaceholderText('Sisi');
    await user.type(input, '5');
    await user.click(screen.getByRole('button', { name: 'Hitung Luas' }));
    
    expect(screen.getByText('Rumus: s x s')).toBeInTheDocument();
    expect(screen.getByText('Luas = 25')).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  it('validates 3D input', async () => {
    const { user } = setup(<App />);
    await clickNav(user, 'Bangun Ruang');
    await user.click(screen.getByRole('button', { name: 'Kubus' }));
    
    const input = screen.getByPlaceholderText('Masukkan sisi');
    await user.type(input, 'abc');
    expect(input.value).toBe('');
    
    await user.click(screen.getByRole('button', { name: 'Hitung Volume' }));
    expect(screen.getByText('Input tidak valid')).toBeInTheDocument();
  });

  it('calculates 3D volume decimal', async () => {
    const { user } = setup(<App />);
    await clickNav(user, 'Bangun Ruang');
    await user.click(screen.getByRole('button', { name: 'Kubus' }));
    
    const input = screen.getByPlaceholderText('Masukkan sisi');
    await user.type(input, '2.5');
    await user.click(screen.getByRole('button', { name: 'Hitung Volume' }));
    
    expect(screen.getByText('Rumus: V = s³')).toBeInTheDocument();
    expect(screen.getByText('Volume = 15.63')).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  it('converts units', async () => {
    const { user } = setup(<App />);
    await clickNav(user, 'Konversi Satuan');
    await user.click(screen.getByRole('button', { name: 'Panjang' }));
    
    const input = screen.getByPlaceholderText('Masukkan nilai');
    await user.type(input, '1');
    
    expect(screen.getByText(/Hasil:\s*10\s*hm/i)).toBeInTheDocument();
    
    await user.clear(input);
    expect(screen.getByText(/Input tidak valid/i)).toBeInTheDocument();
  });
});

  it('hides calculators until shape is selected', async () => {
    const { user } = setup(<App />);
    expect(screen.queryByText(/Kalkulator/i)).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Persegi' }));
    expect(screen.getByRole('heading', { name: 'Kalkulator Persegi' })).toBeInTheDocument();

    await clickNav(user, 'Bangun Ruang');
    expect(screen.queryByText(/Kalkulator/i)).not.toBeInTheDocument();
    expect(screen.queryByText('Pilih salah satu bangun ruang di atas untuk memulai perhitungan.')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Kubus' }));
    expect(screen.getByRole('heading', { name: 'Kalkulator Kubus' })).toBeInTheDocument();
  });

  it('uses requested Bangun Ruang label grid columns', async () => {
    const { user } = setup(<App />);
    await clickNav(user, 'Bangun Ruang');
    const kubusButton = screen.getByRole('button', { name: 'Kubus' });
    expect(kubusButton.parentElement).toHaveClass('grid-cols-2');
    expect(kubusButton.parentElement).toHaveClass('min-[601px]:grid-cols-4');
  });

# ADR 0002: Arsitektur Halaman Dinamis Tunggal

## Status
Accepted

## Context
User ingin navigasi lancar tanpa pindah file HTML fisik.

## Decision
Gunakan satu file HTML utama. Konten diatur React (SPA style).

## Consequences
Logika render pindah ke React components. Diperlukan state management untuk input/hasil.

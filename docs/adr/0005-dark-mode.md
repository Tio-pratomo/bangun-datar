# ADR 0005: Dukungan Dark Mode

## Status
Accepted

## Context
User ingin fitur Dark Mode untuk kenyamanan visual.

## Decision
Gunakan strategi `class` untuk dark mode di Tailwind CSS.

## Consequences
State toggle tema (React context). Semua komponen styling menggunakan prefix `dark:`.

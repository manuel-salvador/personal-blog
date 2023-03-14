import React, { FormEvent } from 'react';

type Props = {};

export default function Search({}: Props) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar"
        className="bg-transparent border px-2 py-1 rounded-sm border-slate-400"
      />
    </form>
  );
}

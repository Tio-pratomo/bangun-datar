import React from "react";

export default function CategoryModal({ isOpen, onClose, title, options, onSelect }) {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">{title}</h3>
        <div className="grid grid-cols-1 gap-2">
          {options.map((opt) => (
            <button
              key={opt.id}
              className="btn btn-outline w-full"
              onClick={() => {
                onSelect(opt);
                onClose();
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>Tutup</button>
        </div>
      </div>
    </dialog>
  );
}

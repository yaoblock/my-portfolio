"use client";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="text-sm text-purple-700 dark:text-purple-400 hover:underline cursor-pointer"
    >
      {label}
    </button>
  );
}

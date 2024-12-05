import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export function NavLink({ icon, href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="group relative flex items-center justify-center w-12 h-12 rounded-lg hover:bg-emerald-500/10 transition-colors"
      title={label}
    >
      <span className="text-gray-400 group-hover:text-emerald-400 transition-colors">
        {icon}
      </span>
      <span className="absolute left-14 px-2 py-1 bg-gray-800 text-gray-200 text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {label}
      </span>
    </a>
  );
}
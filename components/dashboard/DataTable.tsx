import { ReactNode } from 'react';

export interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
}

interface DataTableProps {
  title?: string;
  columns: TableColumn[];
  children: ReactNode;
  actions?: ReactNode;
}

export default function DataTable({ title, columns, children, actions }: DataTableProps) {
  return (
    <section className="flex flex-col gap-4">
      {(title || actions) && (
        <div className="flex items-center justify-between">
          {title && <h3 className="text-white text-xl font-bold">{title}</h3>}
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
      )}

      <div className="w-full overflow-x-auto">
        <div className="flex overflow-hidden rounded-xl border border-[#282e39] bg-[#1e232e] shadow-sm min-w-[600px]">
          <table className="flex-1 w-full">
            <thead>
              <tr className="bg-[#282e39] border-b border-[#3b4354]">
                {columns.map((column) => {
                  const hideClasses = [
                    column.hideOnMobile ? 'hidden sm:table-cell' : '',
                    column.hideOnTablet ? 'hidden md:table-cell' : '',
                  ]
                    .filter(Boolean)
                    .join(' ');

                  return (
                    <th
                      key={column.key}
                      className={`px-6 py-4 text-${column.align || 'left'} text-[#9da6b9] text-xs font-semibold uppercase tracking-wider ${hideClasses}`}
                    >
                      {column.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#282e39]">{children}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

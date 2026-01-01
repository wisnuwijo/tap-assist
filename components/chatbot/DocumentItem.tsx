interface DocumentItemProps {
  name: string;
  addedBy: string;
  timeAgo: string;
  status: 'indexed' | 'processing';
  type?: 'pdf' | 'link' | 'document';
}

export default function DocumentItem({
  name,
  addedBy,
  timeAgo,
  status,
  type = 'pdf',
}: DocumentItemProps) {
  const getIcon = () => {
    if (type === 'pdf') return 'picture_as_pdf';
    if (type === 'link') return 'link';
    return 'description';
  };

  const getIconColor = () => {
    if (type === 'pdf') return 'text-red-500';
    if (type === 'link') return 'text-blue-500';
    return 'text-blue-500';
  };

  return (
    <div className="flex items-center justify-between p-4 hover:bg-[#232936] rounded-lg transition-colors">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span className={`material-symbols-outlined ${getIconColor()}`}>{getIcon()}</span>
        <div className="min-w-0 flex-1">
          <p className="text-white text-sm font-medium truncate">{name}</p>
          <p className="text-[#9da6b9] text-xs">
            Added by {addedBy} • {timeAgo}
          </p>
        </div>
      </div>
      <span
        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
          status === 'indexed'
            ? 'text-[#0bda5e] bg-[#0bda5e]/10'
            : 'text-blue-400 bg-blue-500/10'
        }`}
      >
        {status === 'indexed' ? 'Indexed' : 'Processing'}
      </span>
    </div>
  );
}

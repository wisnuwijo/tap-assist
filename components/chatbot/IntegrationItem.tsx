interface IntegrationItemProps {
  name: string;
  status: 'connected' | 'not-configured';
  icon: string;
  iconColor: string;
  iconBg: string;
}

export default function IntegrationItem({
  name,
  status,
  icon,
  iconColor,
  iconBg,
}: IntegrationItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#282e39] rounded-lg hover:bg-[#2d3340] transition-colors">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
          <span className={`material-symbols-outlined text-[20px] ${iconColor}`}>{icon}</span>
        </div>
        <div>
          <p className="text-white text-sm font-medium">{name}</p>
          <p
            className={`text-xs ${
              status === 'connected' ? 'text-[#0bda5e]' : 'text-[#9da6b9]'
            }`}
          >
            {status === 'connected' ? 'Connected' : 'Not Configured'}
          </p>
        </div>
      </div>
    </div>
  );
}

interface DateDividerProps {
  date: string;
}

export default function DateDivider({ date }: DateDividerProps) {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="bg-[#282e39] text-[#9da6b9] text-xs font-medium px-4 py-2 rounded-full">
        {date}
      </div>
    </div>
  );
}

import React from "react";
import { ChannelSplitItem } from "@/data/results";

interface ChannelSplitTableProps {
  channelSplit: ChannelSplitItem[];
  title?: string;
  caption?: string;
}

export default function ChannelSplitTable({
  channelSplit,
  title = "Channel Acquisition Split",
  caption = "Comparison of cost per conversion across acquisition channels",
}: ChannelSplitTableProps) {
  if (!channelSplit || channelSplit.length === 0) return null;

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
          {title}
        </h3>
        <span className="text-[11px] uppercase tracking-wider text-white/40 font-medium">
          Direct Response Comparison
        </span>
      </div>

      <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-[#0c0c0e] shadow-xl">
        <table className="w-full min-w-[500px] border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              <th
                scope="col"
                className="py-3.5 px-4 sm:px-6 font-bold uppercase tracking-wider text-[11px] text-white/50 text-left"
              >
                Channel
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-white/50 text-right"
              >
                Cost Per Conversion
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 sm:px-6 font-bold uppercase tracking-wider text-[11px] text-white/50 text-left"
              >
                Efficiency Note
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-sans">
            {channelSplit.map((item, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-4 sm:px-6 font-medium text-white text-left">
                  <div className="flex items-center gap-2">
                    <span>{item.channel}</span>
                    {item.isLowestCost && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        Lower-cost channel
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4 text-white tabular-nums text-right font-mono text-xs sm:text-sm font-bold">
                  <span className={item.isLowestCost ? "text-emerald-400" : "text-white"}>
                    {item.costPerConversionDisplay}
                  </span>
                </td>
                <td className="py-4 px-4 sm:px-6 text-white/60 text-xs sm:text-sm text-left">
                  {item.notes || (item.isLowestCost ? "Delivers lower inquiry cost" : "Standard instant form")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

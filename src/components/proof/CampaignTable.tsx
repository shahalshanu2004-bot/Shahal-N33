import React from "react";
import {
  CampaignResult,
  SHOW_RUPEE_AMOUNTS,
  formatIndianNumber,
  formatINR,
} from "@/data/results";

interface CampaignTableProps {
  title: string;
  campaigns: CampaignResult[];
  showPrivacyOverride?: boolean;
  honestyNote?: string;
  caption?: string;
}

export default function CampaignTable({
  title,
  campaigns,
  showPrivacyOverride,
  honestyNote,
  caption,
}: CampaignTableProps) {
  const showRupee =
    showPrivacyOverride !== undefined ? showPrivacyOverride : SHOW_RUPEE_AMOUNTS;

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
          {title}
        </h3>
        <span className="text-[11px] uppercase tracking-wider text-white/40 font-medium">
          Horizontal scroll on mobile &rarr;
        </span>
      </div>

      {honestyNote && (
        <div className="p-4 rounded-xl bg-amber-500/[0.07] border border-amber-500/20 text-amber-200/90 text-xs sm:text-sm leading-relaxed">
          <span className="font-bold uppercase tracking-wider text-[10px] text-amber-400 block mb-1">
            Attribution &amp; Scope Transparency
          </span>
          {honestyNote}
        </div>
      )}

      {/* Horizontally scrollable wrapper */}
      <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-[#0c0c0e] shadow-xl">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
          <caption className="sr-only">
            {caption || `${title} performance breakdown with Meta Ads metrics`}
          </caption>
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              <th
                scope="col"
                className="py-3.5 px-4 sm:px-6 font-bold uppercase tracking-wider text-[11px] text-white/50 text-left"
              >
                Campaign
              </th>
              {showRupee && (
                <th
                  scope="col"
                  className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-white/50 text-right"
                >
                  Spend
                </th>
              )}
              <th
                scope="col"
                className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-white/50 text-right"
              >
                Installs
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-white/50 text-right"
              >
                Cost / Install
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-white/50 text-right"
              >
                Purchases
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-white/50 text-right"
              >
                Cost / Purchase
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 sm:px-6 font-bold uppercase tracking-wider text-[11px] text-[#3b82f6] text-right"
              >
                ROAS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-sans">
            {campaigns.map((camp, idx) => (
              <tr
                key={idx}
                className="hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-4 px-4 sm:px-6 font-medium text-white text-left">
                  {camp.name}
                </td>
                {showRupee && (
                  <td className="py-4 px-4 text-white/80 tabular-nums text-right font-mono text-xs sm:text-sm">
                    {formatINR(camp.spend, 0)}
                  </td>
                )}
                <td className="py-4 px-4 text-white/80 tabular-nums text-right font-mono text-xs sm:text-sm">
                  {formatIndianNumber(camp.installs)}
                </td>
                <td className="py-4 px-4 text-white/80 tabular-nums text-right font-mono text-xs sm:text-sm">
                  {formatINR(camp.costPerInstall, 2)}
                </td>
                <td className="py-4 px-4 text-white/80 tabular-nums text-right font-mono text-xs sm:text-sm">
                  {formatIndianNumber(camp.purchases)}
                </td>
                <td className="py-4 px-4 text-white/80 tabular-nums text-right font-mono text-xs sm:text-sm">
                  {formatINR(camp.costPerPurchase, 2)}
                </td>
                <td className="py-4 px-4 sm:px-6 text-[#3b82f6] font-bold tabular-nums text-right font-mono text-xs sm:text-sm">
                  {camp.roas.toFixed(2)}x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React from "react";
import {
  ClientResultsData,
  SHOW_RUPEE_AMOUNTS,
  formatIndianNumber,
  formatINR,
} from "@/data/results";

interface ResultsLedgerProps {
  data: ClientResultsData;
  showPrivacyOverride?: boolean;
}

interface StatCell {
  label: string;
  value: string;
  subValue?: string;
  highlight?: boolean;
  helpText?: string;
}

export default function ResultsLedger({
  data,
  showPrivacyOverride,
}: ResultsLedgerProps) {
  const showRupee =
    showPrivacyOverride !== undefined ? showPrivacyOverride : SHOW_RUPEE_AMOUNTS;

  const cells: StatCell[] = [];

  // Check if App Marketing or Lead Generation
  if (data.category === "app-marketing" && data.accountTotals) {
    const totals = data.accountTotals;

    if (showRupee) {
      cells.push({
        label: "Ad Spend",
        value: totals.adSpendDisplay,
        subValue: `Exact: ${formatINR(totals.adSpend, 0)}`,
        helpText: "Total ad spend managed",
      });
    }

    cells.push({
      label: "Impressions",
      value: totals.impressionsDisplay,
      subValue: `${formatIndianNumber(totals.impressions)} delivered`,
    });

    cells.push({
      label: "Reach",
      value: totals.reachDisplay,
      subValue: `${formatIndianNumber(totals.reach)} unique users`,
    });

    cells.push({
      label: "App Installs",
      value: formatIndianNumber(totals.installs),
      subValue: "Verified installs",
    });

    cells.push({
      label: "Cost Per Install",
      value: formatINR(totals.costPerInstall, 2),
      subValue: "Blended CPI",
    });

    cells.push({
      label: "In-App Purchases",
      value: formatIndianNumber(totals.purchases),
      subValue: "Downstream conversions",
    });

    cells.push({
      label: "Cost Per Purchase",
      value: formatINR(totals.costPerPurchase, 2),
      subValue: "Purchase CPA",
    });

    if (showRupee) {
      cells.push({
        label: "Purchase Value",
        value: totals.purchaseValueDisplay,
        subValue: `Exact: ${formatINR(totals.purchaseValue, 0)}`,
        highlight: true,
        helpText: "Direct tracked purchase value",
      });
    }

    cells.push({
      label: "Purchase ROAS",
      value: `${totals.roas.toFixed(2)}x`,
      subValue: "Purchase value / ad spend",
      highlight: true,
      helpText: "Account-wide ROAS (Meta default attribution)",
    });
  } else if (data.leadGenTotals) {
    const lt = data.leadGenTotals;

    // Real Estate or general Lead Generation
    if (lt.adSpend && showRupee) {
      cells.push({
        label: "Ad Spend",
        value: lt.adSpendDisplay || formatINR(lt.adSpend, 0),
        subValue: "Managed budget",
      });
    }

    if (lt.leads !== undefined) {
      cells.push({
        label: "Verified Leads",
        value: formatIndianNumber(lt.leads),
        subValue: "Qualified inquiries",
        highlight: true,
      });
    }

    if (lt.costPerLead !== undefined) {
      cells.push({
        label: "Cost Per Lead",
        value: formatINR(lt.costPerLead, 0),
        subValue: "Blended CPL",
        highlight: true,
      });
    }

    if (lt.conversions !== undefined) {
      cells.push({
        label: "Direct Inquiries",
        value: formatIndianNumber(lt.conversions),
        subValue: "Verified customer actions",
        highlight: true,
      });
    }

    if (lt.costPerConversion !== undefined) {
      cells.push({
        label: "Avg Cost / Conversion",
        value: formatINR(lt.costPerConversion, 2),
        subValue: "Blended CPA across channels",
        highlight: true,
      });
    }

    // If channel split exists, show channel cells in ledger
    if (data.channelSplit && data.channelSplit.length > 0) {
      data.channelSplit.forEach((c) => {
        cells.push({
          label: `${c.channel} CPA`,
          value: c.costPerConversionDisplay,
          subValue: c.isLowestCost ? "Lower-cost channel" : "Inquiry channel",
        });
      });
    }
  }

  const gridColsClass =
    cells.length <= 4
      ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-4"
      : "grid-cols-2 md:grid-cols-3 lg:grid-cols-3";

  return (
    <div className="w-full">
      <div className={`grid ${gridColsClass} gap-3 md:gap-4`}>
        {cells.map((cell, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-5 rounded-2xl bg-[#0c0c0e] border transition-all duration-300 ${
              cell.highlight
                ? "border-[#3b82f6]/40 bg-gradient-to-br from-[#0c0c0e] via-[#0c0c0e] to-[#3b82f6]/[0.06] shadow-[0_0_24px_rgba(59,130,246,0.08)]"
                : "border-white/5 hover:border-white/15"
            }`}
          >
            <span className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider block mb-1">
              {cell.label}
            </span>
            <div
              className={`font-heading text-xl sm:text-2xl md:text-3xl font-black tracking-tight tabular-nums ${
                cell.highlight ? "text-[#3b82f6]" : "text-white"
              }`}
            >
              {cell.value}
            </div>
            {cell.subValue && (
              <span className="text-white/40 text-[11px] sm:text-xs font-light block mt-1 tabular-nums">
                {cell.subValue}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

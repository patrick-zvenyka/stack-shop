import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Tax & Compliance | StackShop Finance" },
    { name: "description", content: "Regional tax matrices, VAT calculation, and multi-currency compliance." },
  ];
};

export default function Taxes() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Tax & Compliance</h3>
        <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Automated regional tax synchronization and regulatory reporting.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 space-y-6">
          <h4 className="text-lg font-black dark:text-white">Regional Tax Rules</h4>
          <div className="space-y-4">
             <TaxRule region="USA (New York)" rate="8.875%" type="Sales Tax" />
             <TaxRule region="United Kingdom" rate="20.0%" type="VAT" />
             <TaxRule region="Germany" rate="19.0%" type="VAT" />
             <TaxRule region="Japan" rate="10.0%" type="Consumption Tax" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 space-y-6">
          <h4 className="text-lg font-black dark:text-white">Compliance Status</h4>
          <div className="space-y-5">
            <ComplianceItem label="Multi-currency Matching" status="Synced" />
            <ComplianceItem label="EU VAT MOSS" status="Active" />
            <ComplianceItem label="KYC / AML Checks" status="Verified" />
            <div className={`p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl border border-emerald-100 dark:border-emerald-800/50`}>
               <div className="text-[10px] font-black uppercase text-emerald-600 tracking-widest mb-1">Audit Readiness</div>
               <div className="text-2xl font-black text-emerald-700">100%</div>
               <p className="text-xs font-bold text-emerald-600/70 mt-1">All ledger entries have valid cryptographic hashes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaxRule({ region, rate, type }: { region: string; rate: string; type: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-50 dark:border-gray-800 last:border-0">
      <div>
        <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{region}</div>
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{type}</div>
      </div>
      <div className="text-lg font-black text-emerald-600">{rate}</div>
    </div>
  );
}

function ComplianceItem({ label, status }: { label: string; status: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm font-bold text-gray-500">{label}</span>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span className="text-[10px] font-black uppercase text-gray-900 dark:text-white tracking-widest">{status}</span>
      </div>
    </div>
  );
}

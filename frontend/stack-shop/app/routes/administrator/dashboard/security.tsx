import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Security & Audit Vault | StackShop Admin" },
    { name: "description", content: "Deep-dive security logs and cryptographic controls." },
  ];
};

export default function SecurityAudit() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Security & Audit Vault</h3>
        <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Immutable activity logs, IP whitelisting, and encryption key management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SecurityMetric label="Threat Level" value="Minimal" color="text-emerald-500" />
        <SecurityMetric label="Active Keys" value="128-AES" color="text-blue-500" />
        <SecurityMetric label="Audit Cycle" value="Weekly" color="text-indigo-500" />
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm p-8">
        <h4 className="text-lg font-black dark:text-white mb-6">Master Audit Log</h4>
        <div className="space-y-4">
          <AuditEntry time="2026-02-05 17:21" event="KEY_ROTATION" user="Root.Node_892" detail="AES-256 master keys rotated successfully." type="success" />
          <AuditEntry time="2026-02-05 16:45" event="ACL_MODIFIED" user="Chen.S (Admin)" detail="Granted 'Finance_Lead' role to region hub 'SE-Alpha'." type="info" />
          <AuditEntry time="2026-02-05 15:10" event="FAIL_LOGIN_X" user="UNKNOWN_IP" detail="Multi-factor authentication failure from 203.0.113.5." type="warning" />
          <AuditEntry time="2026-02-05 14:30" event="BACKUP_REINDEX" user="SYS_INTERNAL" detail="S3-Vault block indexing complete. 4.2TB verified." type="success" />
        </div>
      </div>
    </div>
  );
}

function SecurityMetric({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <div className={`text-2xl font-black ${color}`}>{value}</div>
    </div>
  );
}

function AuditEntry({ time, event, user, detail, type }: { time: string; event: string; user: string; detail: string; type: 'success' | 'info' | 'warning' }) {
  const typeStyles = {
    success: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/10",
    info: "text-blue-600 bg-blue-50 dark:bg-blue-900/10",
    warning: "text-red-600 bg-red-50 dark:bg-red-900/10"
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-b border-gray-50 dark:border-gray-800 last:border-0">
      <div className="w-32 text-xs font-mono font-bold text-gray-400 shrink-0">{time}</div>
      <div className={`w-32 px-2 py-0.5 ${typeStyles[type]} text-[9px] font-black uppercase tracking-widest rounded-md shrink-0 text-center`}>{event}</div>
      <div className="w-40 text-sm font-black text-gray-700 dark:text-gray-300 shrink-0">{user}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{detail}</div>
    </div>
  );
}

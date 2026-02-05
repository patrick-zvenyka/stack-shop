import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "System Configuration | StackShop Admin" },
    { name: "description", content: "Fine-tune system parameters and global constants." },
  ];
};

export default function SystemConfig() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">System Configuration</h3>
        <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Manual database triggers, CDN cache controls, and global system flags.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ConfigSection title="Core Infrastructure" description="Base API endpoints and CDN distributions.">
          <ConfigField label="Master API Endpoint" value="https://api-v4.stackshop.io" type="text" />
          <ConfigField label="Content CDN Hub" value="Global Edge (Cloudfront)" type="text" readonly />
          <ConfigField label="Maintenance Mode" value={false} type="toggle" />
        </ConfigSection>

        <ConfigSection title="Financial Matrix" description="Tax rules and currency synchronization settings.">
          <ConfigField label="Base Currency" value="USD" type="text" />
          <ConfigField label="Auto-Tax Calculation" value={true} type="toggle" />
          <ConfigField label="Sync Interval" value="15 Minutes" type="text" />
        </ConfigSection>

        <ConfigSection title="Operational Switches" description="Toggles for specific microservice behaviors.">
          <ConfigField label="Real-time Inventory" value={true} type="toggle" />
          <ConfigField label="Push Notifications" value={true} type="toggle" />
          <ConfigField label="Guest Checkout" value={false} type="toggle" />
        </ConfigSection>

        <div className="flex flex-col gap-4">
           <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl shadow-xl shadow-indigo-500/20 transition-all">Save Global Changes</button>
           <button className="w-full py-5 border-2 border-red-200 dark:border-red-900/30 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 font-black rounded-2xl transition-all">Flush System Cache</button>
        </div>
      </div>
    </div>
  );
}

function ConfigSection({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
      <div>
        <h4 className="text-lg font-black dark:text-white leading-none">{title}</h4>
        <p className="text-xs font-bold text-gray-400 mt-2">{description}</p>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function ConfigField({ label, value, type, readonly }: { label: string; value: string | boolean; type: 'text' | 'toggle'; readonly?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm font-black text-gray-500">{label}</span>
      {type === 'text' ? (
        <input 
          type="text" 
          defaultValue={value as string} 
          readOnly={readonly}
          className={`bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-xl px-4 py-2 text-sm font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${readonly ? 'opacity-50 cursor-not-allowed' : ''}`}
        />
      ) : (
        <button className={`w-12 h-6 rounded-full transition-all relative ${value ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-800'}`}>
          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${value ? 'right-1' : 'left-1'}`}></div>
        </button>
      )}
    </div>
  );
}

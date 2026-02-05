import { useNavigate } from "react-router";

interface LoginCardProps {
  role: string;
  logo: React.ReactNode;
  accentColor: string;
  redirectPath: string;
}

export function LoginCard({ role, logo, accentColor, redirectPath }: LoginCardProps) {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    navigate(redirectPath);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className={`h-2 ${accentColor}`} />
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className={`p-4 rounded-2xl ${accentColor.replace('bg-', 'bg-').replace('600', '100').replace('500', '100')} dark:bg-opacity-10 text-xl`}>
                {logo}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
              {role} Login
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
              Enter your credentials to access the system
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Staff ID / Email
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g. STF-12345"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:opacity-90 transition-all active:scale-[0.98] ${accentColor}`}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/50 px-8 py-4 border-t border-gray-100 dark:border-gray-700">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              Authorized Personnel Only. System activity is logged.
            </p>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; 2026 StackShop Enterprise Solutions
        </p>
      </div>
    </div>
  );
}

import { LoginCard } from "../../../components/LoginCard";

export default function FinanceLogin() {
  return (
    <LoginCard
      role="Finance"
      accentColor="bg-emerald-600"
      redirectPath="/finance"
      logo={
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      }
    />
  );
}

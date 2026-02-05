import { LoginCard } from "../../../components/LoginCard";

export default function POSLogin() {
  return (
    <LoginCard
      role="Point of Sale"
      accentColor="bg-indigo-600"
      redirectPath="/pos"
      logo={
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      }
    />
  );
}

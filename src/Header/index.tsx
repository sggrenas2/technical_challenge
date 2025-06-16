import { Link } from "react-router";
import { useAuth } from "../Hooks/useAuth";
import { ProfileCard } from "../components/ProfileCard";

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="w-full bg-transparent md:mx-auto md:max-w-10/12">
      <section className="bg-azure-600/50 bg-opacity-40 border-azure-100 flex h-full w-full items-center justify-between rounded-md border bg-clip-padding px-4 py-3 backdrop-blur-md backdrop-filter">
        <h1 className="text-xl font-bold">Welcome</h1>
        <div className="flex gap-4">
          {isAuthenticated && <ProfileCard />}
          {isAuthenticated ? (
            <button
              type="button"
              onClick={logout}
              className="text-azure-900 border-azure-200 hover:bg-azure-100 hover:text-azure-700 focus:ring-azure-100 dark:focus:ring-azure-700 dark:bg-azure-800 dark:border-azure-600 dark:hover:bg-azure-700 me-2 mb-2 rounded-lg border bg-transparent px-5 py-2.5 text-sm font-medium focus:z-10 focus:ring-4 focus:outline-none dark:text-white dark:hover:text-white"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="from-azure-500 via-azure-600 to-azure-700 focus:ring-azure-300 dark:focus:ring-azure-800 shadow-azure-500/50 dark:shadow-azure-800/80 me-2 mb-2 w-fit rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg hover:bg-gradient-to-br focus:ring-4 focus:outline-none dark:shadow-lg">
                Login
              </button>
            </Link>
          )}
        </div>
      </section>
    </header>
  );
};

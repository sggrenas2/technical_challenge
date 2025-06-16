import { Suspense, useEffect, useState } from "react";
import { client } from "../../lib/axiosClient";
import { ProfileCardSkeleton } from "../skelletons/ProfileCard";
import type { User } from "../../types";

export const InnerProfileCard = () => {
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await client.get("https://dummyjson.com/auth/me");
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      {!userData && <ProfileCardSkeleton />}
      {userData && (
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-20 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700">
            <img
              className={"h-5 w-5 text-gray-200 dark:text-gray-600"}
              src={`${userData.image}`}
              alt={`${userData.firstName} profile image`}
            />
          </div>
          <div className="text-azure-800 dark:text-azure-200 w-full font-bold">
            <div className="">{`${userData.firstName} ${userData.lastName}`}</div>
            <div className="">{`${userData.company.department}`}</div>
            <div className="">{`${userData.company.title}`}</div>
          </div>
        </div>
      )}
    </>
  );
};

export const ProfileCard = () => {
  return (
    <Suspense fallback={<ProfileCardSkeleton />}>
      <InnerProfileCard />
    </Suspense>
  );
};

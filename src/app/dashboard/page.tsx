import { auth, currentUser } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  let user;
  try {
    const { userId } = await auth();
    user = await currentUser();
    if (!userId || !user) {
      throw new Error("Authentication failed");
    }
  } catch (error) {
    console.error("Clerk error:", error);
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center p-4">
        <div className="bg-[var(--card)] p-4 sm:p-6 rounded-md shadow-sm text-center max-w-md w-full">
          <p className="text-[var(--muted-foreground)] text-sm sm:text-base">
            Error loading user data. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SignedIn>
        <div className="p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--foreground)]">
            Welcome to the Dashboard
          </h1>
          <p className="mb-6 text-[var(--muted-foreground)] text-sm sm:text-base">
            This is a protected page for authenticated users only.
          </p>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 text-[var(--foreground)]">
            Profile
          </h2>
          <div className="space-y-3">
            <p>
              <span className="font-medium text-[var(--foreground)]">
                User ID:
              </span>{" "}
              <span className="text-[var(--muted-foreground)]">{user.id}</span>
            </p>
            <p>
              <span className="font-medium text-[var(--foreground)]">
                Email:
              </span>{" "}
              <span className="text-[var(--muted-foreground)]">
                {user.emailAddresses[0]?.emailAddress || "N/A"}
              </span>
            </p>
            <p>
              <span className="font-medium text-[var(--foreground)]">
                Name:
              </span>{" "}
              <span className="text-[var(--muted-foreground)]">
                {user.firstName || ""} {user.lastName || ""}
              </span>
            </p>
            {user.imageUrl && (
              <Image
                width={100}
                height={100}
                src={user.imageUrl}
                alt="Avatar"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mt-4"
              />
            )}
          </div>
        </div>
      </SignedIn>
    </div>
  );
}

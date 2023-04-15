import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

interface CountWithUser extends User {
  user: User;
  _count: {
    bookmarks: number;
    Fav: number;
  };
}

interface ProfileResponse {
  ok: boolean;
  profile: CountWithUser;
}

export default function useUser() {
  const { data, error } = useSWR<ProfileResponse>("/api/user/me");
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/log-in");
    }
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}

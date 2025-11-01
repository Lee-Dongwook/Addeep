"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import MaintenancePage from "./MaintenancePage";
import { useResponsive } from "@/lib/useResponsive";

interface MaintenanceMode {
  id: number;
  is_active: boolean;
  message: string | null;
  updated_at: string;
}

async function fetchMaintenanceStatus() {
  const { data, error } = await supabase
    .from("maintenance_mode")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Error fetching maintenance status:", error);
    return null;
  }

  return data as MaintenanceMode;
}

export default function MaintenanceChecker({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobileTablet } = useResponsive();
  const [maintenanceStatus, setMaintenanceStatus] =
    useState<MaintenanceMode | null>(null);

  // 초기 상태 조회
  const { data } = useQuery({
    queryKey: ["maintenance_mode"],
    queryFn: fetchMaintenanceStatus,
    refetchInterval: 30000, // 30초마다 자동으로 상태 확인
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (data) {
      setMaintenanceStatus(data);
    }
  }, [data]);

  // Supabase Realtime 구독으로 실시간 상태 업데이트
  useEffect(() => {
    const channel = supabase
      .channel("maintenance_mode_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "maintenance_mode",
        },
        (payload) => {
          if (payload.new) {
            setMaintenanceStatus(payload.new as MaintenanceMode);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // 모바일/태블릿에서만 점검 모드 페이지 표시
  if (maintenanceStatus?.is_active && isMobileTablet) {
    return <MaintenancePage />;
  }

  return <>{children}</>;
}

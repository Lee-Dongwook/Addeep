"use client";
import { MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import { type ChangeEvent, Suspense, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import CustomTable from "../components/custom-table";
import { Announcement } from "../store/interface/announcement";
import { Event } from "../store/interface/event";
import { News } from "../store/interface/news";
import { Article } from "../store/interface/article";
import { tableConfig } from "../store/commonConfig";

type TableType = "announcement" | "events" | "news" | "article";
type DataType = Announcement | Event | News | Article;

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TableType>("announcement");
  const [query, setQuery] = useState("");

  const [pagination, setPagination] = useState({
    pageIndex: Number(searchParams.get("page") || 0),
    pageSize: Number(searchParams.get("size") || 10),
  });

  const getTableData = async (tableName: TableType) => {
    try {
      const { data, count, error } = await supabase
        .from(tableName)
        .select("*", { count: "exact" })
        .order("id", { ascending: false })
        .range(
          pagination.pageIndex * pagination.pageSize,
          pagination.pageIndex * pagination.pageSize + (pagination.pageSize - 1)
        );

      if (error) {
        console.error(`Supabase 에러 (${tableName}):`, error);
        throw error;
      }

      return { data, count };
    } catch (err) {
      console.error(`getTableData 에러 (${tableName}):`, err);
      throw err;
    }
  };

  const updatePagination = (
    updaterOrValue:
      | { pageIndex: number; pageSize: number }
      | ((prev: { pageIndex: number; pageSize: number }) => {
          pageIndex: number;
          pageSize: number;
        })
  ) => {
    const newPagination =
      typeof updaterOrValue === "function"
        ? updaterOrValue(pagination)
        : updaterOrValue;
    setPagination(newPagination);

    const params = new URLSearchParams();
    params.set("page", newPagination.pageIndex.toString());
    params.set("size", newPagination.pageSize.toString());

    window.history.pushState({}, "", `?${params.toString()}`);
  };

  const { data: tableData, isLoading } = useQuery({
    queryKey: [activeTab, pagination.pageIndex, pagination.pageSize],
    queryFn: () => getTableData(activeTab),
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 30000,
  });

  const columns = useMemo<MRT_ColumnDef<DataType>[]>(
    () => [
      {
        accessorKey: "title",
        header: "제목",
        size: 50,
      },
      {
        accessorKey: "description",
        header: "내용",
        size: 50,
      },
      {
        accessorKey: "created_at",
        header: "작성 날짜",
        size: 50,
        Cell: ({ cell }) => {
          const date = cell.getValue<string>();
          return date ? date.split("T")[0] : "";
        },
      },
      {
        accessorKey: "updated_at",
        header: "수정 날짜",
        size: 50,
        Cell: ({ cell }) => {
          const date = cell.getValue<string>();
          return date ? date.split("T")[0] : "";
        },
      },
    ],
    []
  );

  const handleRowClick = (id: number) => {
    router.push(`/dashboard/${activeTab}/${id}`);
  };

  const table = useMaterialReactTable({
    columns,
    data: tableData?.data || [],
    rowCount: tableData?.count || 0,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => handleRowClick(row.original.id),
      sx: { cursor: "pointer" },
    }),
    state: {
      isLoading: isLoading,
      pagination,
    },
    onPaginationChange: updatePagination,
    paginationDisplayMode: "pages",
    ...tableConfig,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleTabChange = (tab: TableType) => {
    setActiveTab(tab);
    setPagination({ pageIndex: 0, pageSize: 10 });
  };

  const tabs: { key: TableType; label: string; icon: React.ReactElement }[] = [
    {
      key: "announcement",
      label: "공지사항",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
    },
    {
      key: "events",
      label: "이벤트",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      key: "news",
      label: "뉴스",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
    },
    {
      key: "article",
      label: "아티클",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  const getStatsForTab = (tabKey: TableType) => {
    return tableData?.count || 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-50 via-primary-50/30 to-dark-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-dark-900 mb-2 gradient-text">
                Dashboard
              </h1>
              <p className="text-dark-600 text-sm font-medium">
                콘텐츠 관리 시스템
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-dark-200 rounded-xl text-dark-700 font-medium hover:bg-dark-50 transition-all duration-200 shadow-soft"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                새로고침
              </button>
              <button
                onClick={() => router.push("/")}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl text-white font-medium hover:from-primary-700 hover:to-primary-600 transition-all duration-200 shadow-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                로그아웃
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-slide-up">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <div
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`cursor-pointer card-hover relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-large"
                    : "bg-white text-dark-700 shadow-soft hover:shadow-medium border border-dark-100"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      isActive ? "bg-white/20" : "bg-primary-100"
                    }`}
                  >
                    <div
                      className={isActive ? "text-white" : "text-primary-600"}
                    >
                      {tab.icon}
                    </div>
                  </div>
                  {isActive && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <p
                    className={`text-sm font-medium mb-1 ${isActive ? "text-white/80" : "text-dark-500"}`}
                  >
                    {tab.label}
                  </p>
                  <p className="text-2xl font-bold">
                    {isActive ? getStatsForTab(tab.key) : "—"}
                  </p>
                </div>
                {isActive && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-medium border border-dark-100 overflow-hidden animate-slide-up">
          {/* Tabs Header */}
          <div className="border-b border-dark-100 bg-gradient-to-r from-dark-50 to-white px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-medium"
                      : "bg-white text-dark-600 hover:bg-dark-50 border border-dark-200"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Table Section */}
          <div className="p-6">
            <CustomTable<DataType> table={table} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-dark-50 via-primary-50/30 to-dark-50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl mb-4 shadow-medium animate-pulse">
              <svg
                className="w-8 h-8 text-white animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
            <p className="text-dark-600 font-medium">Loading...</p>
          </div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}

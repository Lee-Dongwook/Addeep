"use client";
import { MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import { type ChangeEvent, useMemo, useState } from "react";
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

export default function Dashboard() {
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
      {
        accessorKey: "edit",
        header: "수정",
        size: 50,
        Cell: ({ cell }) => {
          function handleEdit(id: number): void {
            console.log(id);
          }

          return (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(cell.row.original.id);
              }}
            >
              수정
            </button>
          );
        },
      },
      {
        accessorKey: "delete",
        header: "삭제",
        size: 50,
        Cell: ({ cell }) => {
          function handleDelete(id: number): void {
            console.log(id);
          }

          return (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(cell.row.original.id);
              }}
            >
              삭제
            </button>
          );
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

  const tabs: { key: TableType; label: string }[] = [
    { key: "announcement", label: "공지사항" },
    { key: "events", label: "이벤트" },
    { key: "news", label: "뉴스" },
    { key: "article", label: "아티클" },
  ];

  return (
    <div className="h-full w-full rounded-lg bg-white p-12">
      <div className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="mb-6 flex gap-4 border-b border-gray-200 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            className={`pb-3 px-4 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <CustomTable<DataType> table={table} />
    </div>
  );
}

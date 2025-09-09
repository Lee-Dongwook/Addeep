"use client";
import { MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import { type ChangeEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import CustomTable from "../components/custom-table";
import { Announcement } from "../store/interface/announcement";
import { tableConfig } from "../store/commonConfig";

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  const [pagination, setPagination] = useState({
    pageIndex: Number(searchParams.get("page") || 0),
    pageSize: Number(searchParams.get("size") || 10),
  });

  const getAnnouncementData = async () => {
    console.log("getAnnouncementData 호출됨", { pagination });

    try {
      const { data, count, error }: any = await supabase
        .from("announcement")
        .select("*", { count: "exact" })
        .order("id")
        .range(
          pagination.pageIndex * 10,
          pagination.pageIndex * 10 + (pagination.pageSize - 1)
        );

      console.log("Supabase 응답:", { data, count, error });

      if (error) {
        console.error("Supabase 에러:", error);
        throw error;
      }

      return { data, count };
    } catch (err) {
      console.error("getAnnouncementData 에러:", err);
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

  const {
    data: announcementList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["announcement", pagination.pageIndex, pagination.pageSize],
    queryFn: () => getAnnouncementData(),
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 30000,
  });

  console.log("useQuery 상태:", { announcementList, isLoading, error });

  const columns = useMemo<MRT_ColumnDef<Announcement>[]>(
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

  const handleRowClick = (uuid: string) => {
    router.push(``);
  };

  const table = useMaterialReactTable({
    columns,
    data: announcementList?.data || [],
    rowCount: announcementList?.count,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => handleRowClick(String(row.original.id)),
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

  return (
    <div className="h-full w-full rounded-lg bg-white p-12">
      <div className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="min-w-67 h-10 rounded-lg border border-[#E5E7EB] pl-4 text-base font-normal placeholder:text-[#ADAEBC] focus:outline-none"
            placeholder="공지사항 검색"
          />
        </div>
      </div>
      <CustomTable<Announcement> table={table} />
    </div>
  );
}

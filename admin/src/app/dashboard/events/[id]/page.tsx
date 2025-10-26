"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import { MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import { useQuery } from "@tanstack/react-query";
import CustomTable from "../../../components/custom-table";
import { supabase } from "../../../../../lib/supabase";
import { Event } from "../../../store/interface/event";

export default function EventDetailPage() {
  const params = useParams();
  const id = params.id as unknown as number;

  const getEventDetailData = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id);

      if (error) {
        console.error("Supabase 에러:", error);
        throw error;
      }
      return data;
    } catch (err) {
      console.error(`getEventDetailData 에러:`, err);
      throw err;
    }
  };

  const {
    data: eventDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["eventDetail", id],
    queryFn: () => getEventDetailData(),
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 30000,
  });

  const columns = useMemo<MRT_ColumnDef<Event>[]>(
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

  console.log(eventDetail);

  const table = useMaterialReactTable({
    columns,
    data: eventDetail?.[0] || [],
    rowCount: eventDetail?.length || 0,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="h-full w-full rounded-lg bg-white p-12">
      <div className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Event Detail</h1>
      </div>
      <CustomTable<Event> table={table} />
    </div>
  );
}

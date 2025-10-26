"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../../../lib/supabase";
import type { Event, PersonDetail } from "../../../store/interface/event";

export default function EventDetailPage() {
  const params = useParams();
  const id = params.id as unknown as number;

  const getEventDetailData = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();

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
  } = useQuery<Event>({
    queryKey: ["eventDetail", id],
    queryFn: () => getEventDetailData(),
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 30000,
  });

  console.log(eventDetail);

  function handleEdit(id: number): void {
    console.log("수정:", id);
  }

  function handleDelete(id: number): void {
    console.log("삭제:", id);
  }

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-lg text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  if (!eventDetail) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-lg">데이터를 찾을 수 없습니다.</div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return dateString ? dateString.split("T")[0] : "";
  };

  return (
    <div className="h-full w-full rounded-lg bg-white p-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Event Detail</h1>
        <div className="flex gap-4">
          <button
            onClick={() => handleEdit(eventDetail.id)}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            수정
          </button>
          <button
            onClick={() => handleDelete(eventDetail.id)}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            삭제
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full">
          <tbody>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="w-1/4 px-6 py-4 font-semibold text-gray-700">
                제목
              </td>
              <td className="px-6 py-4 text-gray-900">{eventDetail?.title}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="w-1/4 px-6 py-4 font-semibold text-gray-700">
                내용
              </td>
              <td className="px-6 py-4 text-gray-900">
                {eventDetail.description}
              </td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="w-1/4 px-6 py-4 font-semibold text-gray-700">
                작성 날짜
              </td>
              <td className="px-6 py-4 text-gray-900">
                {formatDate(eventDetail.created_at)}
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="w-1/4 px-6 py-4 font-semibold text-gray-700">
                수정 날짜
              </td>
              <td className="px-6 py-4 text-gray-900">
                {formatDate(eventDetail.updated_at)}
              </td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="w-1/4 px-6 py-4 font-semibold text-gray-700">
                배너 설명
              </td>
              <td className="px-6 py-4 text-gray-900">
                {eventDetail.banner_description &&
                eventDetail.banner_description.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    {eventDetail.banner_description.map(
                      (item: string, index: number) => (
                        <p key={index}>{item}</p>
                      )
                    )}
                  </div>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="w-1/4 px-6 py-4 font-semibold text-gray-700">
                주요 참석자 정보
              </td>
              <td className="px-6 py-4 text-gray-900">
                {eventDetail.Person?.data &&
                eventDetail.Person.data.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {eventDetail.Person.data.map(
                      (person: PersonDetail, index: number) => (
                        <div
                          key={index}
                          className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                        >
                          {person.en_name && (
                            <p className="mb-1 font-semibold text-gray-900">
                              {person.en_name}
                            </p>
                          )}
                          {person.title && (
                            <p className="mb-1 text-sm text-gray-700">
                              {person.title}
                            </p>
                          )}
                          {person.sub_title && (
                            <p className="mb-1 text-sm text-gray-600">
                              {person.sub_title}
                            </p>
                          )}
                          {person.speaker && (
                            <p className="mb-1 text-sm text-gray-600">
                              연사: {person.speaker}
                            </p>
                          )}
                          {person.desc && person.desc.length > 0 && (
                            <div className="mt-2 flex flex-col gap-1">
                              {person.desc.map(
                                (description: string, descIndex: number) => (
                                  <p
                                    key={descIndex}
                                    className="text-sm text-gray-600"
                                  >
                                    • {description}
                                  </p>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

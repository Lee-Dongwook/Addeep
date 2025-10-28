"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Modal } from "../../../components/modal";
import { supabase } from "../../../../../lib/supabase";
import { Announcement } from "../../../store/interface/announcement";
import { deleteAnnouncement } from "../actions";

export default function AnnouncementDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as unknown as number;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAnnouncementDetailData = async () => {
    try {
      const { data, error } = await supabase
        .from("announcement")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Supabase 에러:", error);
        throw error;
      }
      return data;
    } catch (err) {
      console.error(`getAnnouncementDetailData 에러:`, err);
      throw err;
    }
  };

  const deleteAnnouncementDetailData = async (id: number) => {
    try {
      const result = await deleteAnnouncement(id);
      return result.data;
    } catch (err) {
      console.error(`deleteAnnouncementDetailData 에러:`, err);
      throw err;
    }
  };

  const {
    data: AnnouncementDetail,
    isLoading,
    error,
  } = useQuery<Announcement>({
    queryKey: ["announcementDetail", id],
    queryFn: () => getAnnouncementDetailData(),
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 30000,
  });

  const { mutate: deleteAnnouncementDetailDataMutation } = useMutation({
    mutationFn: (id: number) => deleteAnnouncementDetailData(id),
    onSuccess: () => {
      alert("삭제가 정상적으로 완료 되었습니다.");
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error("deleteAnnouncementDetailData 에러:", error);
    },
  });

  console.log(AnnouncementDetail);

  function handleEdit(id: number): void {
    console.log("수정:", id);
  }

  function handleDelete(id: number): void {
    console.log("삭제:", id);
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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

  if (!AnnouncementDetail) {
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
        <h1 className="text-2xl font-bold">Announcement Detail</h1>
        <div className="flex gap-4">
          <button
            onClick={() => handleEdit(AnnouncementDetail.id)}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            수정
          </button>
          <button
            onClick={() => handleDelete(AnnouncementDetail.id)}
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
              <td className="px-6 py-4 text-gray-900">
                {AnnouncementDetail?.title}
              </td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="w-1/4 px-6 py-4 font-semibold text-gray-700">
                작성 날짜
              </td>
              <td className="px-6 py-4 text-gray-900">
                {formatDate(AnnouncementDetail.created_at)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-gray-900">삭제 확인</h2>
            <p className="text-base text-gray-600">
              이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={handleModalClose}
              className="rounded-lg bg-gray-200 px-6 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-300"
            >
              취소
            </button>
            <button
              onClick={() => deleteAnnouncementDetailDataMutation(id)}
              className="rounded-lg bg-red-500 px-6 py-2.5 font-medium text-white transition-colors hover:bg-red-600"
            >
              삭제
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

"use server";

import { supabaseAdmin } from "../../../../lib/supabase";

export async function deleteNews(id: number) {
  try {
    const { data, error } = await supabaseAdmin
      .from("news")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase 에러:", error);
      throw error;
    }

    return { success: true, data };
  } catch (err) {
    console.error("deleteNews 에러:", err);
    throw err;
  }
}

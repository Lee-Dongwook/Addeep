"use server";

import { supabaseAdmin } from "../../../../lib/supabase";

export async function deleteArticle(id: number) {
  try {
    const { data, error } = await supabaseAdmin
      .from("article")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase 에러:", error);
      throw error;
    }

    return { success: true, data };
  } catch (err) {
    console.error("deleteArticle 에러:", err);
    throw err;
  }
}

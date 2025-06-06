import { supabase } from "../supabaseConfig";

export const fetchEatimeData = async () => {
  const { data, error } = await supabase
    .from('eatime')
    .select('*');

  if (error) {
    console.error("Supabase fetch error:", error);
    throw new Error(error.message);
  }
  return data;
};

export const fetchPeriodsData = async () => {
  const { data, error } = await supabase
    .from('periods')
    .select('*');

  if (error) {
    console.error("Supabase fetch error:", error);
    throw new Error(error.message);
  }
  return data;
};


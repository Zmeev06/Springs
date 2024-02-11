import { AxiosError } from "axios";
import { ApiClient } from "@shared/api/Client";

export const getSprings = async (search: string, sort: string, state?: string, range?: string) => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `service-client/spring/search?search=${search}&sort_order=${sort}${state ? `&spring_state=${ state }` : ''}${range ? `&range=${ range }` : ''}`,
    });

    const { data, status } = response;
    if (status === 200) {
      return { data, status };
    } else {
      console.error(`Ошибка при входе. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    console.error("Ошибка при входе:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};

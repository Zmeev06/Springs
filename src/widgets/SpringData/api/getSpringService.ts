import { AxiosError } from "axios";
import { ApiClient } from "@shared/api/Client";

export const getSpring = async (id: string | string[]) => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `https://source.web-gen.ru:444/api/service-client/spring/get?id=${id}`,
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

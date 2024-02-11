import { AxiosError } from "axios";
import { ApiClient } from "@shared/api/Client";

export const getSprings = async () => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `service-client/spring/search?search=&sort_order=-1`,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("JwtToken")}`,
      // },
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

import { urls } from "../strings/strings.js";

const getPicsumImages = async (page, limit = 30) => {
  try {
    const res = await fetch(`${urls.picsum}?page=${page}&limit=${limit}`);

    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getPicsumImages };

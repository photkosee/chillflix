"server";

export const fetchAnime = async (page: number) => {
  const response = await fetch(`${ANIME_BASE_URL}/anime?page=${page}&limit=10`);
};

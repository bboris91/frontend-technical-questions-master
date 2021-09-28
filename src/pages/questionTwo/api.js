import axios from "axios";

async function getCardDetails() {
  return await axios.get("http://localhost:3001/example").then((result) => {
    const { title, body, imgSrc } = result.data;
    return { title, body, imgSrc };
  });
}

export { getCardDetails };

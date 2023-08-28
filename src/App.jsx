import { useEffect, useState } from "react";
import { ImageList } from "./components/ImageList/ImageList";
import s from "./App.module.css";
import { useScrollPosition } from "./hooks/useScrollPosition";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
export function App() {
  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isBottom);
  useEffect(() => {
    fetchImagebyPages(page);
  }, [page]);
  useEffect(() => {
    if (isBottom) {
      increasePage();
    }
  }, [isBottom]);
  async function fetchImagebyPages(pagesNumber) {
    setIsLoading(true);
    const { data } = await axios(
      `https://picsum.photos/v2/list?page=${pagesNumber}&limit=10`
    );
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }

  function increasePage() {
    setPage(page + 1);
  }
  return (
    <div className={s.root}>
      <h1>Rand' Images</h1>
      <h2>Download Random image from source</h2>
      <div className={s.imageList}>
        <ImageList imageList={imageList} />
      </div>
      <div style={{ marginTop: "20px" }}>{isLoading && <Spinner />}</div>
    </div>
  );
}

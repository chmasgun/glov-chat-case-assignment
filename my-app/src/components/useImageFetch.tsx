import { useState, useEffect } from 'react';

function useImageFetch(imageInput:number) {
  const [imageData, setImageData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch("https://picsum.photos/150");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        setImageData(URL.createObjectURL(blob));
      } catch (err : any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    fetchImage();
  }, [imageInput]);

  return { imageData, loading, error };
}

export default useImageFetch;

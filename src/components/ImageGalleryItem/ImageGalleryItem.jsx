import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onClick,
}) => {
  return (
    <GalleryItem>
      <GalleryItemImage
        src={webformatURL}
        id={id}
        alt=""
        onClick={() => onClick(largeImageURL)}
      />
    </GalleryItem>
  );
};

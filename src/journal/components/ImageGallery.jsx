import { ImageList, ImageListItem } from '@mui/material';


export const ImageGallery = ({ images = [] }) => {
  return (
    <ImageList 
      variant="mansory" 
      sx={{ width: '100%', height: '100%', padding: 0.5, paddingBottom: 2, borderBottom: '1px solid #5f4633' }} 
      cols={4} 
      rowHeight={164}
      
    >
      {images.map(( image ) => (
        <ImageListItem key={image}>
          <img
            border= '3px solid white'
            src={`${image}?w=248&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="imagen de la Nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

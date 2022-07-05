import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function WovenImageList() {
    return (
        <ImageList sx={{ width: 1000, height: 600 }} variant="woven" cols={3} gap={8}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=161&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://travelbar.kg/template/images/listings/735/1.jpg',
        title: 'Bed',
    },
    {
        img: 'https://travels.mukashovphoto.com/wp-content/uploads/2019/07/DSC_9751.jpg',
        title: 'Kitchen',
    },
    {
        img: 'https://kabar.kg/site/assets/files/70855/33.jpg',
        title: 'Sink',
    },
    {
        img: 'https://travelbar.kg/template/images/listings/735/3.jpg',
        title: 'Books',
    },
    {
        img: 'https://content.author-tour.com.ua/_Content/_materials/tury-v-karpaty-osnovnye-napravleniya/Images/149569868659268cfeefb20.jpg',
        title: 'Chairs',
    },
    {
        img: 'https://www.advantour.com/img/kyrgyzstan/images/tours.jpg',
        title: 'Candle',
    },
    {
        img: 'https://tilinustravel.com/wp-content/uploads/2019/11/eyjwtfyvgdhb4738riuewdjk-1-1024x683.jpg',
        title: 'Laptop',
    },
    {
        img: 'https://www.kalipsoua.com/wp-content/uploads/IMG_4323.jpg',
        title: 'Doors',
    },
    {
        img: 'https://images.pexels.com/photos/2055556/pexels-photo-2055556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Coffee',
    },
    {
        img: 'https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Storage',
    },
    {
        img: 'https://beta.ooba.kg/static/2021/2/idty8xx7iuttyr986xd4q.jpg',
        title: 'Coffee table',
    },
    {
        img: 'https://images.pexels.com/photos/906097/pexels-photo-906097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Blinds',
    },
];

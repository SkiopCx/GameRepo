import noImage from '../assets/noImage.webp'

// 提取小的图片来加速加载
const getCropImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCropImageUrl;
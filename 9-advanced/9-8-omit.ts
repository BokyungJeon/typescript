{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..',
        };
    }

    type VideoMetadata = Omit<Video, 'url' | 'data'>; // Omit은 빼고 싶은 것을 명시
    function getVideoMetadata(id: string): VideoMetadata{
        return {
            id: id,
            title: 'title',
        }
    }
}
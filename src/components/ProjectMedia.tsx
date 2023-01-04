interface ProjectMediaProps {
  media: {
    isLocal: boolean;
    isVideo: boolean;
    src: string;
    description: string;
    thumbnail: string;
  };
}

export default function ProjectMedia({ media }: ProjectMediaProps) {
  if (!media.isLocal && media.isVideo) {
    return <iframe width="100%" height="100%" src={media.src} />;
  } else if (media.isLocal && media.isVideo) {
    return (
      <video width="100%" height="100%" controls>
        <source src={media.src} type="video/mp4" />
      </video>
    );
  } else {
    return <img src={media.src} alt={media.description} />;
  }
}

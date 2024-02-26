type ImageButtonProps = {
    image: string;
    onClick: () => void;
}

export default function ImageButton({ image, onClick }: ImageButtonProps) {
    return (
        <button onClick={onClick} className="imageButton">
            <img src={image} alt="Button" width="50" height="50" />
        </button>
    );
}
type Props = {
  audioUrl: string;
};

export function WowButton({ audioUrl }: Props) {
  console.log({ audioUrl });
  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        console.log('hello');

        const audio = new Audio();
        audio.src = audioUrl;

        audio.play();
      }}
    >
      WOW
    </button>
  );
}

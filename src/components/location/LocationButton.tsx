import { GoPrimitiveDot } from "react-icons/go";

type LocationButtonProps = {
  locationColor: string;
};

export default function LocationButton({ locationColor }: LocationButtonProps) {
  return <GoPrimitiveDot style={{ fill: locationColor }} />;
}

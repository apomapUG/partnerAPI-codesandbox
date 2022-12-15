import { Location } from "../../types/Location";
type WelcomeTextProps = {
  location: Location;
};

export default function WelcomeText({ location }: WelcomeTextProps) {
  console.log("Location:", location);

  return (
    <div className="card card-compact w-full flex justify-center items-center bg-base-100 shadow-xl text-center mb-12">
      <div className="card-body">
        <p>Welcome to the</p>
        <h2
          className="card-title uppercase text-3xl font-bold my-4"
          style={{ color: location.color }}
        >
          {location.name}
        </h2>
        <p>Dashboard</p>
      </div>
    </div>
  );
}
